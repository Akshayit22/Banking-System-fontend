import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { increamentCounter, decreamentCounter } from "../redux/slices/counterSlice";
function Sample() {

    const dispatch = useAppDispatch();

    const { counter } = useAppSelector(state => state.count);

    return (
        <div>
            <h1 className="text-4xl">{counter}</h1>

            <button onClick={() => dispatch(increamentCounter(2))}>Increament</button>
            <button onClick={() => dispatch(decreamentCounter())}>Decreament</button>

        </div>
    )
}

export default Sample

/*




*/