import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface AccountState {
    accounts: any,
    account: any,
}
const initialState: AccountState = {
    accounts: null,
    account: null,
}

const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        setAccounts: (state: any, action: PayloadAction<any>) => {
            state.accounts = action.payload;
        },
        setAccount: (state: any, action: PayloadAction<any>) => {
            state.account = action.payload;
        }
    },
})

export const { setAccounts, setAccount } = accountSlice.actions;

export const selectAccount = (state: RootState) => state.account.account;

export default accountSlice.reducer;