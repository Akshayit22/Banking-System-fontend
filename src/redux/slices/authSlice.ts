import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface authState {
    user: any,
    name: string | null,
    token: string | null,
    accountNumber: number | null,
}

const initialState: authState = {
    user: [],
    name: null,
    accountNumber: null,
    token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state: any, action: PayloadAction<string | null>) => {
            state.token = action.payload;
        },
        setUser: (state: any, action: PayloadAction<object | null>) => {
            state.user = action.payload;
        },
        setName: (state: any, action: PayloadAction<string | null>) => {
            state.name = action.payload;
        },
        setAccountNumber: (state: any, action: PayloadAction<number | null>) => {
            state.accountNumber = action.payload;
        },
        clearAuthSlice: (state: any) => {
            state.user = null;
            state.name = null;
            state.token = null;
            state.accountNumber = null;
        }
    },
})

export const { setToken, setUser, setName, setAccountNumber, clearAuthSlice } = authSlice.actions;

export const selectToken = (state: RootState) => state.auth.token;
export const selectUser = (state: RootState) => state.auth.user;
export const selectName = (state: RootState) => state.auth.name;

export default authSlice.reducer;