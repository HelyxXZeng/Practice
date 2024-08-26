// store.js
import { configureStore } from "@reduxjs/toolkit";
import loginReducer from '../features/login/Login'; // Đảm bảo đường dẫn đúng với file slice

const store = configureStore({
    reducer: {
        login: loginReducer
    }
});

export default store;
