import GoogleIcon from "@mui/icons-material/Google";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../../images/login2.svg";
import useAuth from "../../Context/useAuth";

const Login = () => {
  const { setUser, setIsLoading, signInPassword, signInWithGoogles } =
    useAuth();
  let navigate = useNavigate();
  let location = useLocation();
  const uri = location?.state?.from || "/checkout";

  const emailRef = useRef();
  const passwordRef = useRef();

  const handelLogin = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInPassword(email, password)
      .then((userCredential) => {
        setIsLoading(true);
        // Signed in
        const user = userCredential.user;
        setUser(user);
        // ...
        navigate(uri);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handelGoogleSignIn = () => {
    signInWithGoogles()
      .then((result) => {
        setIsLoading(true);
        setUser(result.user);
        navigate(uri);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <Container>
      <Grid container spacing={{ xs: 1, md: 2 }}>
        <Grid sx={{ display: { xs: "none", md: "flex" } }} item md={6}>
          <img src={img} alt="" />
        </Grid>
        <Grid item md={6} sm={12} sx={{ my: { md: "auto", xs: 4 } }}>
          <Typography
            variant="h4"
            sx={{ mb: 3, textAlign: "center", fontWeight: "bold" }}
          >
            Login
          </Typography>
          <form onSubmit={handelLogin}>
            <TextField
              fullWidth
              type="email"
              ref={emailRef}
              label="Your Email"
            />
            <TextField
              fullWidth
              type="password"
              ref={passwordRef}
              label="Your Password"
              sx={{ my: 1 }}
            />
            <Button fullWidth variant="contained" type="submit">
              Login
            </Button>
          </form>
          <Button
            endIcon={<GoogleIcon />}
            onClick={handelGoogleSignIn}
            variant="outlined"
            sx={{ mt: 1 }}
          >
            Sign with google
          </Button>
          <br />
          <Typography sx={{ textAlign: "center", mt: 1 }} variant="h6">
            New user please <Link to="/register">Register</Link>{" "}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
