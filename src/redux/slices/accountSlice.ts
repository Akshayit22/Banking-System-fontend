import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    accounts: null,
    account: null,
}

const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        setAccounts: (state: any, action: any) => {
            state.accounts = action.payload;
        },
        setAccount: (state: any, action: any) => {
            state.account = action.payload;
        }
    },
})

export const { setAccounts, setAccount } = accountSlice.actions;

export default accountSlice.reducer;