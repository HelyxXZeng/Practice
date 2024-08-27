// store.js
import { configureStore } from "@reduxjs/toolkit";
import loginReducer from '../features/login/Login'; 
import signupReducer from '../features/signup/Signup'; 
import authReducer from '../features/authState/AuthState'
const store = configureStore({
    reducer: {
        login: loginReducer,
        signup: signupReducer,
        authState: authReducer,
    }
});

export default store;
