import { caas, signIn } from "assets";
import { useState } from "react";
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

  const [formValues, setFormValues] = useState<LoginForm>({
    email: "example@example.com",
    password: "password",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await login(formValues);
  };

  const navigate = useNavigate()

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
                mt: 2,
                "&:hover": {backgroundColor: "#080850" }
              }}
            >
              Sign in
            </Button>

            {/* forgot password */}
            <Box
              mt={2}
            >
              <Button
                color="primary"
                size="small"
                onClick={() => alert("Forgot Password")}
              >
                Forgot Password?
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Container>
    
  </Box>
  );
}
// sign in from email at the bottom