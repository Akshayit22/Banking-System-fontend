import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface authState {
    user: unknown,
    name: string | null,
    token: string | null,
}

const initialState: authState = {
    user: [],
    name: null,
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
        }
    },
})

export const { setToken, setUser, setName } = authSlice.actions;

export const selectToken = (state: RootState) => state.auth.token;
export const selectUser = (state: RootState) => state.auth.user;
export const selectName = (state: RootState) => state.auth.name;

export default authSlice.reducer;