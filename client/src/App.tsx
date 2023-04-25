import React from "react";import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import { Refine, AuthProvider,  } from "@pankod/refine-core";
import {
  notificationProvider,
  RefineSnackbarProvider,
  CssBaseline,
  GlobalStyles,
  ReadyPage,
  ErrorComponent,
} from "@pankod/refine-mui";

// importing incons
//importing Icons
// import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';

import dataProvider from "@pankod/refine-simple-rest";
import { MuiInferencer } from "@pankod/refine-inferencer/mui";
import routerProvider from "@pankod/refine-react-router-v6";
import axios, { AxiosRequestConfig } from "axios";
import { ColorModeContextProvider } from "contexts";
import { Title, Sider, Layout, Header } from "components/layout";
import { CredentialResponse } from "interfaces/google";
import { parseJwt } from "utils/parse-jwt";
// import style
import './index.css'

import { 
  Login,
  Home,
  Agents,
  MyProfile,
  MemberDetails,
  AllMembers,
  AgentProfile,
  CreateMembers,
  EditMembers,
  Attendance,
  ForgotPasswordPage
} from "pages";


const axiosInstance = axios.create();
axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
  const token = localStorage.getItem("token");
  if (request.headers) {
    request.headers["Authorization"] = `Bearer ${token}`;
  } else {
    request.headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  return request;
});

function App() {
  const authProvider: AuthProvider = {
    login: ({ credential }: CredentialResponse) => {
      const profileObj = credential ? parseJwt(credential) : null;

      if (profileObj) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...profileObj,
            avatar: profileObj.picture,
          })
        );
      }

      localStorage.setItem("token", `${credential}`);

      return Promise.resolve();
    },
    logout: () => {
      const token = localStorage.getItem("token");

      if (token && typeof window !== "undefined") {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        axios.defaults.headers.common = {};
        window.google?.accounts.id.revoke(token, () => {
          return Promise.resolve();
        });
      }

      return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: async () => {
      const token = localStorage.getItem("token");

      if (token) {
        return Promise.resolve();
      }
      return Promise.reject();
    },


    getPermissions: () => Promise.resolve(),
    getUserIdentity: async () => {
      const user = localStorage.getItem("user");
      if (user) {
        return Promise.resolve(JSON.parse(user));
      }
    },
  };

  return (
    <ColorModeContextProvider>
      <CssBaseline />
      <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
      <RefineSnackbarProvider>
        {/* <BrowserRouter> */}
          <Refine
            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
            notificationProvider={notificationProvider}
            ReadyPage={ReadyPage}
            catchAll={<ErrorComponent />}
            resources={[
              {
                name: "member",
                list: AllMembers,
                create: CreateMembers,
                edit: EditMembers,
                show: MemberDetails,
                
                icon: <PeopleAltRoundedIcon />,
              },
              {
                name: "attendnace",
                options: {label: "Attendnace"},
                list: Attendance,
                icon: <AutoStoriesRoundedIcon />,
              },
              {
                name: "subscription",
                options: {label: "Subscription"},
                list: MuiInferencer,
                icon: <AccountBalanceRoundedIcon />,
              },
              {
                name: "settings",
                list: MuiInferencer,
                icon: <SettingsSuggestRoundedIcon />,
              },
              {
                name: "profile",
                options: {label: "Profile"},
                list: ForgotPasswordPage,
                icon: <AccountCircleRoundedIcon />,
              },
              // add a forgot password page
            ]}
            Title={Title}
            Sider={Sider}
            Layout={Layout}
            Header={Header}
            routerProvider={routerProvider}
            authProvider={authProvider}
            LoginPage={Login}
            DashboardPage = {Home}
          >
            <Routes>
              {/* <Route path="/login" element={<Outlet />} /> */}
              <Route path="/member/:memberId" element={<MemberDetails />} />
              {/* <Route path="/forgot-password" element={<ForgotPasswordPage />} /> */}
            </Routes>
          </Refine>
       </RefineSnackbarProvider>
    </ColorModeContextProvider>
  );
}

export default App;