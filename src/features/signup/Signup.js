import { createSlice } from "@reduxjs/toolkit";

const signupSlice = createSlice({
  name: "signup",
  initialState: {
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  },
  reducers: {
    setFName: (state, action) => {
      state.fname = action.payload;
    },
    setLName: (state, action) => {
      state.lname = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    clearSignup: (state) => {
      state.fname = "";
      state.lname = "";
      state.email = "";
      state.password = "";
      state.confirmPassword = "";
      state.phoneNumber = "";
    },
  },
});

export const {
  setFName,
  setLName,
  setEmail,
  setPassword,
  setConfirmPassword,
  setPhoneNumber,
  clearSignup,
} = signupSlice.actions;

export default signupSlice.reducer;
