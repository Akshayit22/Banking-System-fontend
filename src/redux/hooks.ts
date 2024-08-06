import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export const useAppSelector = useSelector.withTypes<RootState>()

/*
export interface CounterState{
    value:number
}
const initialState:CounterState= {
    value:0
}
reducers:{
    incrementByValue:(state,action:PayloadAction<number>)=>{
        state.value += action.payload
    }
}

export const selectCount = (state:RootState) => state.counter.value;

*/