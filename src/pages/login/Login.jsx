import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Checkbox, Button, FormControlLabel } from "@mui/material";
import { Link } from "react-router-dom";
import { setEmail, setPassword, setRememberMe } from "../../features/login/Login"; 

const Login = () => {
  const dispatch = useDispatch();
  const { email, password, rememberMe } = useSelector((state) => state.login);

  const [currentBanner, setCurrentBanner] = useState(0);
  const banners = ["/banner-0.png", "/banner-1.png", "/banner-2.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const handleLogin = () => {
    dispatch(setEmail(email));
    dispatch(setPassword(password));
    dispatch(setRememberMe(rememberMe));

    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };

  return (
    <div className="login bg-blue-background-1 flex h-screen">
      <div className="leftContainer md:w-1/2 w-full flex justify-center items-center p-10">
        <form
          action=""
          className="flex bg-blue-background-2 rounded-[32px] flex-col items-center p-8 space-y-4  w-[440px] h-[615px]"
        >
          <img src="/TMA-icon.png" alt="TMA logo" className="h-[60px] w-auto" />
          <h4 className="text-text-blue-main font-semibold text-2xl self-start pt-8">Log In</h4>
          <TextField
            variant="outlined"
            label="Email"
            placeholder="Your Email"
            value={email}
            onChange={(event) => dispatch(setEmail(event.target.value))}
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
              "& .MuiInputBase-input::placeholder": {
                color: "#DDDDDD",
                opacity: 1,
              },
            }}
          />
          <TextField
            variant="outlined"
            label="Password"
            placeholder="Your Password"
            type={"password"}
            value={password}
            onChange={(event) => dispatch(setPassword(event.target.value))}
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
                  onChange={(event) => dispatch(setRememberMe(event.target.checked))}
                  color="primary"
                />
              }
              label="Remember Me"
              sx={{ color: "#455E87" }}
            />
            <Link to={'/forgotPassword'} className="text-text-blue-main font-semibold">
              Forgot Password?
            </Link>
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
          <p className="signUp self-start font-normal">Don’t have an account yet? <Link className="text-text-blue-main font-semibold" to={'signup'}>Sign Up</Link></p>
          <img src="/fake-langs-button.png" alt="" className="h-10 w-40" />
        </form>
      </div>
      <div className="rightContainer hidden md:flex">
        <img src={banners[currentBanner]} alt="Banner" className="h-full w-auto" />
      </div>
    </div>
  );
};

export default Login;
