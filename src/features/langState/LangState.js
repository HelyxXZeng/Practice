import { createSlice } from "@reduxjs/toolkit";


const langSlice = createSlice({
    name: 'langState',
    initialState: {langState:'UK'},
    reducers:{
        setLangState: (state, action) => {
            state.langState = action.payload;
        },
    }

});

export const { setLangState } = langSlice.actions;
export default langSlice.reducer;
