import { useState } from "react";
import {
  setEmail,
  setPassword,
  setFName,
  setLName,
  setConfirmPassword,
  setPhoneNumber,
  clearSignup,
} from "../../features/signup/Signup";
import { TextField, Button } from "@mui/material";
import { setAuthState } from "../../features/authState/AuthState";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Signup = () => {
  const { email, password, fname, lname, confirmPassword, phoneNumber } =
    useSelector((state) => state.signup);
  const dispatch = useDispatch();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [fnameError, setFNameError] = useState("");
  const [lnameError, setLNameError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
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

  const validatePassword = (password) => {
    if (!password) {
      return t("errors.required");
    }
    if (password.length < 6) {
      return t("errors.passlength");
    }
    return "";
  };

  const validateFName = (fname) => {
    if (!fname) {
      return t("errors.required");
    }
    return "";
  };

  const validateLName = (lname) => {
    if (!lname) {
      return t("errors.required");
    }
    return "";
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    if (!confirmPassword) {
      return t("errors.required");
    }
    if (password !== confirmPassword) {
      return t("errors.passmissmatch");
    }
    return "";
  };

  const validatePhoneNumber = (phoneNumber) => {
    if (!phoneNumber) {
      return t("errors.required");
    }
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      return t("errors.invalidPhone");
    }
    return "";
  };

  const handleSignUp = () => {
    const fnameValidationError = validateFName(fname);
    const lnameValidationError = validateLName(lname);
    const emailValidationError = validateEmail(email);
    const passwordValidationError = validatePassword(password);
    const confirmPasswordValidationError = validateConfirmPassword(
      password,
      confirmPassword
    );
    const phoneNumberValidationError = validatePhoneNumber(phoneNumber);

    setFNameError(fnameValidationError);
    setLNameError(lnameValidationError);
    setEmailError(emailValidationError);
    setPasswordError(passwordValidationError);
    setConfirmPasswordError(confirmPasswordValidationError);
    setPhoneNumberError(phoneNumberValidationError);

    if (
      !fnameValidationError &&
      !lnameValidationError &&
      !emailValidationError &&
      !passwordValidationError &&
      !confirmPasswordValidationError &&
      !phoneNumberValidationError
    ) {
      dispatch(setFName(fname));
      dispatch(setLName(lname));
      dispatch(setEmail(email));
      dispatch(setPassword(password));
      dispatch(setConfirmPassword(confirmPassword));
      dispatch(setPhoneNumber(phoneNumber));
      const userData = {
        FirstName: fname,
        LastName: lname,
        Email: email,
        Password: password,
        ConfirmPassword: confirmPassword,
        PhoneNumber: phoneNumber,
      };

      console.log("User Data:", userData);
    }
  };
  return (
    <form action="" className="flex flex-col space-y-4 w-auto min-w-[240px]">
      <h4 className="text-text-blue-main font-semibold text-2xl self-start pt-8">
        {t("signup.title")}
      </h4>
      <div className="nameInputField flex-row flex justify-between space-x-4">
        <TextField
          required
          variant="outlined"
          label={t("signup.FNLabel")}
          placeholder={t("signup.FNPlaceHolder")}
          value={fname}
          onChange={(event) => dispatch(setFName(event.target.value))}
          error={!!fnameError}
          helperText={fnameError}
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
          label={t("signup.LNLabel")}
          placeholder={t("signup.LNPlaceHolder")}
          value={lname}
          onChange={(event) => dispatch(setLName(event.target.value))}
          error={!!lnameError}
          helperText={lnameError}
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
      </div>
      <TextField
        required
        variant="outlined"
        label={t("emailPlaceHolder")}
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
      <TextField
        required
        variant="outlined"
        label={t("signup.cpassLabel")}
        placeholder={t("signup.cpassPlaceHolder")}
        value={confirmPassword}
        onChange={(event) =>
          dispatch(setConfirmPassword(event.target.value))
        }
        error={!!confirmPasswordError}
        helperText={confirmPasswordError}
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
        label={t("signup.phoneLabel")}
        placeholder={t("signup.phonePlaceHolder")}
        value={phoneNumber}
        onChange={(event) =>
          dispatch(setPhoneNumber(event.target.value))
        }
        error={!!phoneNumberError}
        helperText={phoneNumberError}
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
        onClick={handleSignUp}
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
        <span className="font-semibold">{t("signup.title")}</span>
      </Button>
      <p className="login self-start font-normal">
        {t("signup.alreadyhaveacc")}{" "}
        <span
          className="text-text-blue-main font-semibold hover:text-blue-hover cursor-pointer"
          onClick={() => {
            dispatch(setAuthState("login"));
            dispatch(clearSignup());
          }}
        >
          {t("login.title")}
        </span>
      </p>
    </form>
  );
};

export default Signup;
