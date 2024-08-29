import { useState } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { email, password, rememberMe } = useSelector(
    (state) => state.login
  );

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email) => {
    if (!email) {
      return t("errors.required");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return t("errors.invalidEmail");
    }
    return "";
  };

  const validatePassword = (password) => {
    if (!password) {
      return t("errors.required");
    }
    if (password.length < 6) {
      return t("errors.passlength");
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
        {t("login.title")}
      </h4>
      <TextField
        required
        variant="outlined"
        label="Email"
        placeholder={t("emailPlaceHolder")}
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
            "& .MuiInputBase-input": {
              height: "42px",
              padding: "0 14px", 
            },
            "& .MuiFormLabel-root": {
              top: "-6px",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#455E87",
            top: "-6px",
          },
          "& .MuiInputBase-input": {
            color: "#DDDDDD",
          },
          "& .MuiInputBase-input::placeholder": {
            color: "#DDDDDD",
            opacity: 1,
            top: "-6px",
          },
        }}
      />

      <TextField
        required
        variant="outlined"
        label={t("passLabel")}
        placeholder={t("passPlaceHolder")}
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
            "& .MuiInputBase-input": {
              height: "42px",
              padding: "0 14px", 
            },
            "& .MuiFormLabel-root": {
              top: "-6px",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#455E87",
            top: "-6px",
          },
          "& .MuiInputBase-input": {
            color: "#DDDDDD",
          },
          "& .MuiInputBase-input::placeholder": {
            color: "#DDDDDD",
            opacity: 1,
            top: "-6px",
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
          label={t("login.rememe")}
          sx={{ color: "#455E87" }}
        />
        <span
          onClick={() => {
            dispatch(clearLogin());
            dispatch(setAuthState("forgotpass"));
          }}
          className="text-text-blue-main font-semibold hover:text-blue-hover cursor-pointer"
        >
          {t("forgot.title")}
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
          height: "42px",
          "&:hover": {
            backgroundColor: "#194A9E",
          },
          borderRadius: "8px",
          textTransform: "none",
        }}
      >
        <span className="font-semibold">{t("login.title")}</span>
      </Button>
      <p className="signUp self-start font-normal">
        {t("donthaveacc")}{" "}
        <span
          className="text-text-blue-main font-semibold hover:text-blue-hover cursor-pointer"
          onClick={() => {
            dispatch(clearLogin());
            dispatch(setAuthState("signup"));
          }}
        >
          {t("signup.title")}
        </span>
      </p>
    </form>
  );
};

export default Login;
