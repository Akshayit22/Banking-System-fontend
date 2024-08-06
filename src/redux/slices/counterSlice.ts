import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface CounterState {
    counter: number
}
const initialState: CounterState = {
    counter: 0
}

const counterSlice = createSlice({
    name: "counter",
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

export const { increamentCounter, decreamentCounter } = counterSlice.actions;

export const selectToken = (state: RootState) => state.counter.counter;

export default counterSlice.reducer;