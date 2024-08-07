import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    accounts: null,
    account: null,
    updateAccount: null
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
        },
        setUpdateAccount: (state: any, action: any) => {
            state.updateAccount = action.payload;
        }
    },
})

export const { setAccounts, setAccount, setUpdateAccount } = accountSlice.actions;

export default accountSlice.reducer;