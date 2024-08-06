import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface UserState {
    counter: number
}
const initialState: UserState = {
    counter: 0
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        increamentCounter: (state: any, action: PayloadAction<number>) => {
            state.counter += action.payload;
        },
        decreamentCounter: (state: any) => {
            state.counter -= 1;
        }
    },
})

export const { increamentCounter, decreamentCounter } = userSlice.actions;

export const selectToken = (state: RootState) => state.counter.counter;

export default userSlice.reducer;