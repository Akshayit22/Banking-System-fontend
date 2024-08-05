import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: [],
    name: null,
    token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state: any, action: any) => {
            state.token = action.payload;
        },
        setUser: (state: any, action: any) => {
            state.user = action.payload;
        },
        setName: (state: any, action: any) => {
            state.name = action.payload;
        }
    },
})

export const { setToken, setUser, setName } = authSlice.actions;

export default authSlice.reducer;