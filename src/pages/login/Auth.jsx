import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



import ForgotPass from "../../component/forgotPass/ForgotPass";
import Login from "../../component/login/Login";
import Signup from "../../component/signup/Signup";

const Auth = () => {
  const dispatch = useDispatch();
  
  const [currentBanner, setCurrentBanner] = useState(0);
  const banners = ["/banner-0.png", "/banner-1.png", "/banner-2.png"];

 const {authState} = useSelector(
  (state) => state.authState
 );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="login bg-blue-background-1 flex h-screen justify-between">
      <div className="leftContainer md:w-1/2 w-full flex justify-center items-center p-10">
        <div className="flex bg-blue-background-2 rounded-[32px] flex-col items-center p-10 space-y-4 w-[440px] min-h-[300px]">
          <img src="/TMA-icon.png" alt="TMA logo" className="h-[60px] w-auto" />
          {authState === "login" && <Login/>}
          {authState === "forgotpass" && <ForgotPass/>}
          {authState === "signup" && <Signup/>}
          <img src="/fake-langs-button.png" alt="" className="h-10 w-40" />{" "}
          {/* change as a real radio group later */}
        </div>
      </div>
      <div className="rightContainer hidden md:float-left md:flex items-center h-full">
        <img
          src={banners[currentBanner]}
          alt="Banner"
          className="h-auto w-auto "
        />
      </div>
    </div>
  );
};

export default Auth;
