import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ForgotPass from "../../component/forgotPass/ForgotPass";
import Login from "../../component/login/Login";
import Signup from "../../component/signup/Signup";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { setLangState } from "../../features/langState/LangState";
import i18n from "../../utils/i18n";

const Auth = () => {
  const dispatch = useDispatch();

  const [currentBanner, setCurrentBanner] = useState(0);
  const banners = ["/banner-0.png", "/banner-1.png", "/banner-2.png"];

  const { authState } = useSelector((state) => state.authState);
  const { langState } = useSelector((state) => state.langState);

  const handleLangChange = (event, newLang) => {
    if (newLang !== null && newLang !== langState) {
      dispatch(setLangState(newLang));
      i18n.changeLanguage(newLang.toLowerCase());
      console.log('đã đổi ngôn ngữ sang', newLang.toLowerCase())
    }
};


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="login bg-blue-background-1 flex h-screen justify-between flex-row">
      <div className="leftContainer md:w-1/2 w-full flex justify-center items-center p-10">
        <div className="flex bg-blue-background-2 rounded-[32px] flex-col items-center p-10 space-y-4 w-[440px] min-h-[300px]">
          <img src="/TMA-icon.png" alt="TMA logo" className="h-[60px] w-auto" />
          {authState === "login" && <Login />}
          {authState === "forgotpass" && <ForgotPass />}
          {authState === "signup" && <Signup />}
          {/* <img src="/fake-langs-button.png" alt="" className="h-10 w-40" />{" "} */}
          <ToggleButtonGroup
            value={langState}
            exclusive
            onChange={handleLangChange}
            sx={{
              backgroundColor: "#adc9f5",
              height: "40px",
              padding: "0 5px",
              marginTop: "20px",
              borderRadius: "8px",
              display: 'flex',  
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <ToggleButton
              value="VN"
              key={"VN"}
              sx={{
                width: "84px",
                height: "32px",
                padding: "0 15px",
                border: 'none',  
                borderRadius: '8px', 
                "&.Mui-selected": {
                  backgroundColor: "#77a5ee",
                  color: "#ffffff",
                },
                "&.MuiToggleButtonGroup-firstButton": {
                  borderTopRightRadius: '8px',
                  borderBottomRightRadius: '8px',
                }
              }}
            >
              <img
                src="/VN-flag.png"
                alt=""
                style={{ width: "25px", height: "20px", marginRight: "5px" }}
              />
              VN
            </ToggleButton>
            <ToggleButton
              value="EN"
              key={"EN"}
              sx={{
                width: "84px",
                height: "32px",
                padding: "0 15px",
                border: 'none',  
                borderRadius: '8px', 
                "&.Mui-selected": {
                  backgroundColor: "#77a5ee",
                  color: "#ffffff",
                },
                "&.MuiToggleButtonGroup-middleButton": {
                  borderRadius: "8px"
                }
              }}
            >
              <img
                src="/UK-flag.png"
                alt=""
                style={{ width: "25px", height: "20px", marginRight: "5px" }}
              />
              ENG
            </ToggleButton>
            <ToggleButton
              value="JP"
              key={"JP"}
              sx={{
                width: "84px",
                height: "32px",
                padding: "0 15px",
                border: 'none',  
                borderRadius: '8px', 
                "&.Mui-selected": {
                  backgroundColor: "#77a5ee",
                  color: "#ffffff",
                },
                "&.MuiToggleButtonGroup-lastButton": {
                  borderTopLeftRadius: '8px',
                  borderBottomLeftRadius: '8px',
                }
              }}
            >
              <img
                src="/JP-flag.png"
                alt=""
                style={{ width: "25px", height: "20px", marginRight: "5px" }}
              />
              JP
            </ToggleButton>
          </ToggleButtonGroup>
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
