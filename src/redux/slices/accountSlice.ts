import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    accounts: null,
    account: null,
    accountNumber: null,
    nominees: null,
    loans: null,
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
        setNominees: (state: any, action: any) => {
            state.nominees = action.payload;
        },
        setLoans: (state: any, action: any) => {
            state.loans = action.payload;
        },
        setUpdateAccount: (state: any, action: any) => {
            state.updateAccount = action.payload;
        },
        clearAccountSlice: (state: any) => {
            state.accounts = null;
            state.account = null;
            state.accountNumber = null;
            state.nominees = null;
            state.loans = null;
            state.updateAccount = null;
        }
    },
})

export const { setAccounts, setAccount, setNominees, setLoans, setUpdateAccount, clearAccountSlice } = accountSlice.actions;

export default accountSlice.reducer;