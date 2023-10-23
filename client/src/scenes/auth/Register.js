import React, { useState } from "react";
import { register } from "../../managers/authManager";
import { Link as RRLink, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Alert,
} from "@mui/material";

export default function Register({ setLoggedInUser }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordMismatch(true);
    } else {
      const newUser = {
        firstName,
        lastName,
        userName,
        email,
        address,
        password,
      };
      register(newUser).then((user) => {
        setLoggedInUser(user);
        navigate("/");
      });
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 2, // Add margin to the top
        }}
      >
        <Typography variant="h5" sx={{ my: 1 }}>Sign Up</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            sx={{ my: 1 }} // Add margin to the TextField
          />
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            sx={{ my: 1 }} // Add margin to the TextField
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ my: 1 }} // Add margin to the TextField
          />
          <TextField
            label="User Name"
            variant="outlined"
            fullWidth
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            sx={{ my: 1 }} // Add margin to the TextField
          />
          <TextField
            label="Address"
            variant="outlined"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            sx={{ my: 1 }} // Add margin to the TextField
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            error={passwordMismatch}
            value={password}
            onChange={(e) => {
              setPasswordMismatch(false);
              setPassword(e.target.value);
            }}
            sx={{ my: 1 }} // Add margin to the TextField
          />
          <TextField
            label="Confirm Password"
            variant="outlined"
            fullWidth
            type="password"
            error={passwordMismatch}
            value={confirmPassword}
            onChange={(e) => {
              setPasswordMismatch(false);
              setConfirmPassword(e.target.value);
            }}
            sx={{ my: 1 }} // Add margin to the TextField
          />
          {passwordMismatch && (
            <Alert severity="error" sx={{ my: 1 }}>Passwords do not match!</Alert>
          )}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
            disabled={passwordMismatch}
            sx={{ my: 1, p: 2 }}// Add margin to the Button
          >
            Register
          </Button>
        </form>
        <Box mt={2}>
          <Typography>
            Already signed up? Log in <RRLink to="/login">here</RRLink>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
