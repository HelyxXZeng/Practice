import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAuthState } from "../../features/authState/AuthState";
import { Button, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

const ForgotPass = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const { t } = useTranslation();

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

  const handleResetPassword = () => {
    const emailValidationError = validateEmail(email);
    setEmailError(emailValidationError);

    if (!emailValidationError) {
      console.log(t("forgot.description"), email);
    }
  };

  return (
    <form action="" className="flex flex-col space-y-4 w-auto min-w-[240px]">
      <h4 className="text-text-blue-main font-semibold text-2xl self-start pt-8">
        {t("forgot.title")}
      </h4>
      <h5 className="text-m font-light self-start -translate-y-2 text-text-gray-main">
        {t("forgot.description")}
      </h5>
      <span
        className="text-blue-400 text-m font-light self-start -translate-y-2 underline cursor-pointer hover:text-blue-hover"
        onClick={() => {
          setEmail("");
          dispatch(setAuthState("login"));
        }}
      >
        {t("forgot.goback")}
      </span>
      <TextField
        required
        variant="outlined"
        label="Email"
        placeholder={t("emailPlaceHolder")}
        value={email}
        onChange={(event) => setEmail(event.target.value)}
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

      <Button
        variant="contained"
        onClick={handleResetPassword}
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
        <span className="font-semibold">{t("forgot.btn")}</span>
      </Button>
      <p className="signUp self-start font-normal">
        {t("donthaveacc")}{" "}
        <span
          className="text-text-blue-main font-semibold hover:text-blue-hover cursor-pointer"
          onClick={() => {
            dispatch(setAuthState("signup"));
          }}
        >
          {t("signup.title")}
        </span>
      </p>
    </form>
  );
};

export default ForgotPass;
