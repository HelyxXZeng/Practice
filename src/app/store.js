// store.js
import { configureStore } from "@reduxjs/toolkit";
import loginReducer from '../features/login/Login'; 
import signupReducer from '../features/signup/Signup'; 
import authReducer from '../features/authState/AuthState'
import langReducer from '../features/langState/LangState'
const store = configureStore({
    reducer: {
        login: loginReducer,
        signup: signupReducer,
        authState: authReducer,
        langState: langReducer,
    }
});

export default store;
