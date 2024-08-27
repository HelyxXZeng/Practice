import { useState } from "react";
import {
  setEmail,
  setPassword,
  setRememberMe,
  clearLogin
} from "../../features/login/Login";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { setAuthState } from "../../features/authState/AuthState";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const { email, password, rememberMe } = useSelector(
    (state) => state.login
  );

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email) => {
    if (!email) {
      return "This field is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "The input is not a valid email";
    }
    return "";
  };

  const validatePassword = (password) => {
    if (!password) {
      return "This field is required";
    }
    if (password.length < 6) {
      return "The password must be at least 6 characters";
    }
    return "";
  };
  const handleLogin = () => {
    const emailValidationError = validateEmail(email);
    const passwordValidationError = validatePassword(password);

    setEmailError(emailValidationError);
    setPasswordError(passwordValidationError);

    if (!emailValidationError && !passwordValidationError) {
      dispatch(setEmail(email));
      dispatch(setPassword(password));
      dispatch(setRememberMe(rememberMe));
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Remember Me:", rememberMe);
    }
  };
  return (
    <form action="" className="flex flex-col space-y-4 w-auto min-w-[240px]">
      <h4 className="text-text-blue-main font-semibold text-2xl self-start pt-8">
        Log In
      </h4>
      <TextField
        required
        variant="outlined"
        label="Email"
        placeholder="Your Email"
        value={email}
        onChange={(event) => dispatch(setEmail(event.target.value))}
        error={!!emailError}
        helperText={emailError}
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#455E87",
            },
            "&:hover fieldset": {
              borderColor: "#455E87",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#455E87",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#455E87",
          },
          "& .MuiInputBase-input": {
            color: "#DDDDDD",
          },
          "& .MuiInputBase-input::placeholder": {
            color: "#DDDDDD",
            opacity: 1,
          },
        }}
      />

      <TextField
        required
        variant="outlined"
        label="Password"
        placeholder="Your Password"
        type={"password"}
        value={password}
        onChange={(event) => dispatch(setPassword(event.target.value))}
        error={!!passwordError}
        helperText={passwordError}
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#455E87",
            },
            "&:hover fieldset": {
              borderColor: "#455E87",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#455E87",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#455E87",
          },
          "& .MuiInputBase-input": {
            color: "#DDDDDD",
          },
          "& .MuiInputBase-input::placeholder": {
            color: "#DDDDDD",
            opacity: 1,
          },
        }}
      />

      <div className="flex justify-between items-center w-full">
        <FormControlLabel
          control={
            <Checkbox
              checked={rememberMe}
              onChange={(event) =>
                dispatch(setRememberMe(event.target.checked))
              }
              color="primary"
            />
          }
          label="Remember Me"
          sx={{ color: "#455E87" }}
        />
        <span
          onClick={() => {
            dispatch(clearLogin());
            dispatch(setAuthState("forgotpass"));
          }}
          className="text-text-blue-main font-semibold hover:text-blue-hover cursor-pointer"
        >
          Forgot Password?
        </span>
      </div>

      <Button
        variant="contained"
        onClick={handleLogin}
        fullWidth
        sx={{
          backgroundColor: "#216CE3",
          color: "#FFFFFF",
          width: "100%",
          height: "50px",
          "&:hover": {
            backgroundColor: "#194A9E",
          },
          borderRadius: "8px",
          textTransform: "none",
        }}
      >
        <span className="font-semibold">Log In</span>
      </Button>
      <p className="signUp self-start font-normal">
        Don’t have an account yet?{" "}
        <span
          className="text-text-blue-main font-semibold hover:text-blue-hover cursor-pointer"
          onClick={() => {
            dispatch(clearLogin());
            dispatch(setAuthState("signup"));
          }}
        >
          Sign Up
        </span>
      </p>
    </form>
  );
};

export default Login;
