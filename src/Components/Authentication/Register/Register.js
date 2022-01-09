import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import src from "../../../images/register.svg";

const Register = () => {
  const { registerCreatePassword, setIsLoading, updateName, setError } =
    useAuth();
  let navigate = useNavigate();
  let location = useLocation();
  const uri = location?.state?.from || "/";

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handelLogin = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    registerCreatePassword(email, password)
      .then((userCredential) => {
        setIsLoading(true);
        updateName(name);
        // Signed in
        const user = userCredential.user;
        // ...
        navigate(uri);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Container>
      <Grid container spacing={{ xs: 1, md: 2 }}>
        <Grid item md={6} sx={{ display: { xs: "none", md: "flex" } }}>
          <img src={src} alt="" />
        </Grid>
        <Grid item md={6} sx={{ my: { md: "auto", xs: 4 } }}>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", mb: 3, fontWeight: "bold" }}
          >
            Create a new account
          </Typography>
          <div style={{ textAlign: "center" }}>
            <form onSubmit={handelLogin}>
              <TextField
                fullWidth
                type="text"
                ref={nameRef}
                label="Your Name"
              />
              <TextField
                fullWidth
                type="email"
                ref={emailRef}
                label="Your Email"
                sx={{ my: 1 }}
              />

              <TextField
                fullWidth
                type="password"
                ref={passwordRef}
                label="Your Password"
                sx={{ mb: 1 }}
              />
              <Button fullWidth variant="contained" type="submit">
                Register
              </Button>
            </form>

            <h4>
              {" "}
              Already Have an account!<Link to="/login"> Log In</Link>
            </h4>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
