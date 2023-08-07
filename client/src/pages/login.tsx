import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

import { caas, signIn, loader } from "assets";
import { useLogin } from "@pankod/refine-core";
import { useNavigate } from '@pankod/refine-react-router-v6'
import { Container, Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface LoginForm {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const { mutate: login } = useLogin();
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<LoginForm>({
    email: "caas@gmail.com",
    password: "Caas123*",
  });

  const [formErrors, setFormErrors] = useState<Partial<LoginForm>>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Perform form validation
    const errors: Partial<LoginForm> = {};

    if (!formValues.email) {
      errors.email = "Email is required.";
    } else if (!isValidEmail(formValues.email)) {
      errors.email = "Invalid email format.";
    }

    if (!formValues.password) {
      errors.password = "Password is required.";
    }

    if (Object.keys(errors).length > 0) {
      // If there are validation errors, display the error messages using react-toastify
      Object.values(errors).forEach((error) => {
        toast.error(error as string);
      });
      setFormErrors(errors);
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        'http://projectcaas.ng/api/Account/authenticate',
        formValues
      );
      // check for incorrect email or passwords
      if (response.status === 400) {
        toast.error("Invalid email or password")
      }
      // Check response status
      if (response.status === 200) {
        // Handle successful authentication
        console.log(response.data); // Do something with the response data
        await login(formValues);
      } else {
        // Handle unsuccessful authentication
        toast.error("Invalid email or password. Please check your credentials.");
        console.log('Authentication failed');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Check if it's a network error
        if (error.response) {
          // Handle error from server response (e.g., 400, 500 status codes)
          // console.error(error.response.data);
          const err = error.response.data
          toast.error(err)
        } else if (error.request) {
          // Handle network error (e.g., no response from server)
          toast.warn("Network error. Please check your internet connection.");
        } else {
          // Handle other Axios errors
          console.error(error.message);
        }
      }else{
        // Handle authentication error
        console.error(error);
      }
      // console.error(error);
      toast.error("Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPasswordClick = () => {
    navigate('/forgot-password');
  };

  // Helper function to validate email format
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        gap: "30px",
        backgroundColor: "#ffffff",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          background: `url(${signIn}) no-repeat right center`,
          backgroundSize: "cover",
          flex: "1",
        }}
      />

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
              error={!!formErrors.email} // Set error prop to true if there's an email error
              helperText={formErrors.email} // Display the email error message
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              color="secondary"
              fullWidth
              value={formValues.password}
              onChange={handleInputChange}
              error={!!formErrors.password} // Set error prop to true if there's a password error
              helperText={formErrors.password} // Display the password error message
            />

            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: 'column', width: "100%" }}>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                sx={{
                  backgroundColor: "#000080",
                  color: "#ffffff",
                  width: '100%',
                  height: "56px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: 2,
                  "&:hover": {backgroundColor: "#080850" }
                }}
                disabled={isLoading}
              >
                {isLoading ? <img src={loader} alt="caas Logo" style={{width: '30px'}} /> : 'Sign in'}
              </Button>

              {/* forgot password */}
              <Box
                mt={2}
              >
                <Button
                  type="button"
                  color="primary"
                  size="small"
                  onClick={handleForgotPasswordClick}
                >
                  Forgot Password?
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Container>

      {/* ToastContainer to display toast messages */}
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    </Box>
  );
}
