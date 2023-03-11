import { useEffect, useRef } from "react";
import { useLogin } from "@pankod/refine-core";
import { Container, Box } from "@pankod/refine-mui";

import { CredentialResponse } from "../interfaces/google";

import { caas } from "assets";

export const Login: React.FC = () => {
  const { mutate: login } = useLogin<CredentialResponse>();

  const GoogleButton = (): JSX.Element => {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (typeof window === "undefined" || !window.google || !divRef.current) {
        return;
      }
      try {
        window.google.accounts.id.initialize({
          ux_mode: "popup",
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          callback: async (res: CredentialResponse) => {
            if (res.credential) {
              login(res);
            }
          },
        });
        window.google.accounts.id.renderButton(divRef.current, {
          theme: "filled_blue",
          size: "medium",
          type: "standard",
        });
      } catch (error) {
        console.log(error);
      }
    }, []); // you can also add your client id as dependency here

    return <div ref={divRef} />;
  };

  return (
    <Box
      component="div"
      sx={{backgroundColor: "#fcfcfc"}}
    >
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <img src={caas} alt="caas Logo" />
          </div>
          <Box mt={2}>
            <GoogleButton />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};


// import { Home } from 'pages';
// import React, {useState} from 'react'

// import home from './home';

// const Login = () => {
//   const [password, setPassword] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   //@ts-expect-error
//   function handlePasswordChange(event) {
//     setPassword(event.target.value);
//   }
  
//   //@ts-expect-error
//   function handleSubmit(event) {
//     event.preventDefault();
//     if (password === "mypassword") {
//       setIsLoggedIn(true);
//     } else {
//       alert("Incorrect password. Please try again.");
//     }
//   }

//   if (isLoggedIn) {
//     return <Home />;
//   }

//   return (
//     <div>
//         <form onSubmit={handleSubmit}>
//       <label>
//         Password:
//         <input type="password" value={password} onChange={handlePasswordChange} />
//       </label>
//       <button type="submit">Log In</button>
//     </form>
//     </div>
//   )
// }

// export default Login;
