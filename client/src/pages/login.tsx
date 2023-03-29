// import { useEffect, useRef } from "react";
// import { useLogin } from "@pankod/refine-core";
// import { Container, Box } from "@pankod/refine-mui";

// import { CredentialResponse } from "../interfaces/google";


// export const Login: React.FC = () => {
//   const { mutate: login } = useLogin<CredentialResponse>();

//   const GoogleButton = (): JSX.Element => {
//     const divRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//       if (typeof window === "undefined" || !window.google || !divRef.current) {
//         return;
//       }
//       try {
//         window.google.accounts.id.initialize({
//           ux_mode: "popup",
//           client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
//           callback: async (res: CredentialResponse) => {
//             if (res.credential) {
//               login(res);
//             }
//           },
//         });
//         window.google.accounts.id.renderButton(divRef.current, {
//           theme: "filled_blue",
//           size: "medium",
//           type: "standard",
//         });
//       } catch (error) {
//         console.log(error);
//       }
//     }, []); // you can also add your client id as dependency here

//     return <div ref={divRef} />;
//   };

//   return (
//     <Box
//       component="div"
//       sx={{backgroundColor: "#fcfcfc"}}
//     >
//       <Container
//         component="main"
//         maxWidth="xs"
//         sx={{
  //           display: "flex",
  //           flexDirection: "column",
//           justifyContent: "center",
//           height: "100vh",
//         }}
//       >
//         <Box
//           sx={{
  //             display: "flex",
  //             justifyContent: "center",
  //             flexDirection: "column",
  //             alignItems: "center",
  //           }}
//         >
//           <div>
//             <img src={caas} alt="caas Logo" />
//           </div>
//           <Box mt={2}>
//             <GoogleButton />
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// };


import { caas } from "assets";
import { useState } from "react";
import { useLogin } from "@pankod/refine-core";
// import { Container, Box, TextField, Button } from "@pankod/refine-mui";
import { Container, Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface LoginForm {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const { mutate: login } = useLogin();

  const [formValues, setFormValues] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await login(formValues);
  };

  return (
    // <Box
    //   component="div"
    //   sx={{ backgroundColor: "#fcfcfc" }}
    // >
    //   <Container
    //     component="main"
    //     maxWidth="xs"
    //     sx={{
    //       display: "flex",
    //       flexDirection: "column",
    //       justifyContent: "center",
    //       height: "100vh",
    //     }}
    //   >
    //     <Box
    //       sx={{
    //         display: "flex",
    //         justifyContent: "center",
    //         flexDirection: "column",
    //         alignItems: "center",
    //       }}
    //     >
    //       <div>
    //         <img src={caas} alt="caas Logo" />
    //       </div>
    //       <Box mt={2}>
    //         <form onSubmit={handleFormSubmit}>
    //           <TextField
    //             name="email"
    //             label="Email"
    //             value={formValues.email}
    //             onChange={handleInputChange}
    //           />
    //           <Box mt={2}>
    //             <TextField
    //               name="password"
    //               label="Password"
    //               type="password"
    //               value={formValues.password}
    //               onChange={handleInputChange}
    //             />
    //           </Box>
    //           <Box mt={2}>
    //             <Button type="submit" variant="contained" color="primary">
    //               Login
    //             </Button>
    //           </Box>
    //         </form>
    //       </Box>
    //     </Box>
    //   </Container>
    // </Box>

    <Box component="div" sx={{ backgroundColor: "#ffffff", height: "100vh" }}>
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 3,
          }}
        >
          <img src={caas} alt="caas Logo" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <form onSubmit={handleFormSubmit} style={{ width: "100%" }}>
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              margin="normal"
              required
              color="secondary"
              fullWidth
              value={formValues.email}
              onChange={handleInputChange}
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              required
              color="secondary"
              fullWidth
              value={formValues.password}
              onChange={handleInputChange}
            />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              sx={{
                backgroundColor: "#000080",
                color: "#ffffff",
                mt: 3,
                width: "100%",
                height: "56px",
                "&:hover": {backgroundColor: "#080850" }
              }}
            >
              Sign in
            </Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
};