import React from "react";
import { useDispatch, useSelector } from "react-redux";

import ForgotPass from "../../component/forgotPass/ForgotPass";
import Login from "../../component/login/Login";
import Signup from "../../component/signup/Signup";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { setLangState } from "../../features/langState/LangState";
import i18n from "../../utils/i18n";
import Carousel from "react-material-ui-carousel";
import { useTranslation } from "react-i18next";

const Auth = () => {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const banners = [
    {
      image: "/banner-0.png",
      title: t("banner0.title"),
      description: t("banner0.description"),
      className: "pb-[200px]",
    },
    {
      image: "/banner-1.png",
      title: t("banner1.title"),
      description: t("banner1.description"),
      className: "pt-[10%] pb-[200px]",
    },
    {
      image: "/banner-2.png",
      title: t("banner2.title"),
      description: t("banner2.description"),
      className: "pb-[100px]",
    },
  ];

  const { authState } = useSelector((state) => state.authState);
  const { langState } = useSelector((state) => state.langState);

  const handleLangChange = (event, newLang) => {
    if (newLang !== null && newLang !== langState) {
      dispatch(setLangState(newLang));
      i18n.changeLanguage(newLang.toLowerCase());
      console.log("đã đổi ngôn ngữ sang", newLang.toLowerCase());
    }
  };

  return (
    <div className="login bg-blue-background-1 flex h-screen justify-between">
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
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ToggleButton
              value="VN"
              key={"VN"}
              sx={{
                width: "84px",
                height: "32px",
                padding: "0 15px",
                border: "none",
                borderRadius: "8px",
                "&.Mui-selected": {
                  backgroundColor: "#77a5ee",
                  color: "#ffffff",
                },
                "&.MuiToggleButtonGroup-firstButton": {
                  borderTopRightRadius: "8px",
                  borderBottomRightRadius: "8px",
                },
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
                border: "none",
                borderRadius: "8px",
                "&.Mui-selected": {
                  backgroundColor: "#77a5ee",
                  color: "#ffffff",
                },
                "&.MuiToggleButtonGroup-middleButton": {
                  borderRadius: "8px",
                },
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
                border: "none",
                borderRadius: "8px",
                "&.Mui-selected": {
                  backgroundColor: "#77a5ee",
                  color: "#ffffff",
                },
                "&.MuiToggleButtonGroup-lastButton": {
                  borderTopLeftRadius: "8px",
                  borderBottomLeftRadius: "8px",
                },
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
      <div className="rightContainer hidden md:flex justify-center items-center h-full max-h-screen overflow-hidden w-1/2 bg-text-blue-main rounded-l-[120px]">
        <Carousel
          autoPlay
          interval={3000}
          // indicators={false} 
          animation="slide"
          navButtonsAlwaysVisible={false}
          className="w-full p-6 max-h-screen"
        >
          {banners.map((banner, index) => (
            <div
              key={index}
              className="relative w-full h-full inline-block p-6"
            >
              <div className="relative inline-block">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className={`w-full h-auto p-6 max-h-screen block align-middle rounded-xl ${
                    banner.className || ""
                  }`}
                  style={{
                    overflowClipMargin: "content-box",
                    overflow: "clip",
                  }}
                />
              </div>
              <div className=" flex absolute bottom-[100px] items-center flex-col justify-center left-0 px-[60px] z-50 text-white p-8 w-full">
                <h3 className="text-2xl font-bold">{banner.title}</h3>
                <p className="mt-2 text-lg">{banner.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Auth;
