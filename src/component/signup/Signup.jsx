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
import { TextField, Checkbox, Button, FormControlLabel } from "@mui/material";

import { setAuthState } from "../../features/authState/AuthState";
import { useDispatch, useSelector } from "react-redux";
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

  const validateFName = (fname) => {
    console.log(fname);
    if (!fname) {
      return "This field is required";
    }
    return "";
  };

  const validateLName = (lname) => {
    console.log(lname);
    if (!lname) {
      return "This field is required";
    }
    return "";
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    if (!confirmPassword) {
      return "This field is required";
    }
    if (password !== confirmPassword) {
      return "The passwords do not match";
    }
    return "";
  };

  const validatePhoneNumber = (phoneNumber) => {
    if (!phoneNumber) {
      return "This field is required";
    }
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      return "The phone number is not valid";
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
    console.log(!fnameValidationError, !lnameValidationError);
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
        Sign Up
      </h4>
      <div className="nameInputField flex-row flex justify-between space-x-4">
        <TextField
          required
          variant="outlined"
          label="First Name"
          placeholder="Your First Name"
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
          label="Last Name"
          placeholder="Your Last Name"
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
      </div>
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
      <TextField
        required
        variant="outlined"
        label="Confirm Password"
        placeholder="Confirm Your Password"
        type={"password"}
        value={confirmPassword}
        onChange={(event) => dispatch(setConfirmPassword(event.target.value))}
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
        label="Phone Number"
        placeholder="Your Phone Number"
        value={phoneNumber}
        onChange={(event) => dispatch(setPhoneNumber(event.target.value))}
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

      <Button
        variant="contained"
        onClick={handleSignUp}
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
        <span className="font-semibold">Sign Up</span>
      </Button>
      <p className="signUp self-start font-normal">
        Already have an account?{" "}
        <span
          className="text-text-blue-main font-semibold hover:text-blue-hover cursor-pointer"
          onClick={() => {
            dispatch(clearSignup());
            dispatch(setAuthState("login"));
          }}
        >
          Log In
        </span>
      </p>
    </form>
  );
};

export default Signup;
