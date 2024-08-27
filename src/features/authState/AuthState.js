import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: 'authState',
    initialState: {authState:'login'},
    reducers:{
        setAuthState: (state, action) => {
            state.authState = action.payload;
        },
    }

});

export const { setAuthState } = authSlice.actions;
export default authSlice.reducer;
