import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increamentCounter: (state: any, action: any) => {
            state.counter += action.payload;
        },
        decreamentCounter: (state: any) => {
            state.counter -= 1;
        }
    },
})

export const { increamentCounter, decreamentCounter } = counterSlice.actions;

export default counterSlice.reducer;