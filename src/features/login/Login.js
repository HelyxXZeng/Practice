import { createSlice } from "@reduxjs/toolkit";


const loginSlice = createSlice({
    name: 'login',
    initialState: {email: '',
    password: '',
    rememberMe: false},
    reducers:{
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setRememberMe: (state, action) => {
            state.rememberMe = action.payload;
        },
        clearLogin: (state) => {
            state.email = '';
            state.password = '';
            state.rememberMe = false;
        }
    }

});

export const { setEmail, setPassword, setRememberMe, clearLogin } = loginSlice.actions;
export default loginSlice.reducer;
