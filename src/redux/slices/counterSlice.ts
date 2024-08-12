import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

export default counterSlice.reducer;