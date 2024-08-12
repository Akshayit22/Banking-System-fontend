import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface UserState {
    userName: string | null,
    userDto: any;
    address: any,
    userDetails: any,
}
const initialState: UserState = {
    userName: null,
    userDto: null,
    address: null,
    userDetails: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserName: (state: any, action: any) => {
            state.userName = action.payload;
        },
        setUserDto: (state: any, action: any) => {
            state.userDto = action.payload;
        },
        setUserDetails: (state: any, action: any) => {
            state.userDetails = action.payload;
        },
        setAddress: (state: any, action: any) => {
            state.address = action.payload;
        },
        clearUserSlice: (state: any) => {
            state.userName = null;
            state.userDto = null;
            state.userDetails = null;
            state.address = null;
        }
    },
})

export const { setUserName, setUserDto, setAddress, setUserDetails, clearUserSlice } = userSlice.actions;

export const selectUserDetails = (state: RootState) => state.user.userDetails;

export const selectAddress = (state: RootState) => state.user.address;

export default userSlice.reducer;