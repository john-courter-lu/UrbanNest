import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../managers/authManager";
import {
  Button,
  TextField,
  Typography,
  Container,
  Box,
} from "@mui/material";

export default function Login({ setLoggedInUser }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [failedLogin, setFailedLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password).then((user) => {
      if (!user) {
        setFailedLogin(true);
      } else {
        setLoggedInUser(user);
        navigate("/");
      }
    });
  };

  return (
    <Container component="main" maxWidth="sm" >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 2, // Add margin to the top
        }}>
        <Typography variant="h5" sx={{ my: 1 }}>Login</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ my: 1 }}
            error={failedLogin}
            value={email}
            onChange={(e) => {
              setFailedLogin(false);
              setEmail(e.target.value);
            }}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            sx={{ my: 1 }}
            type="password"
            error={failedLogin}
            value={password}
            onChange={(e) => {
              setFailedLogin(false);
              setPassword(e.target.value);
            }}
            helperText={failedLogin && "Login failed."}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ my: 1, p: 2 }}
            onClick={handleSubmit}
          >
            Login
          </Button>
        </form>

        <Box mt={2}>
          <Typography>
            Not signed up? Register <Link to="/register">here</Link>
          </Typography>
        </Box></Box>
    </Container>
  );
}
