import { useDispatch, useSelector } from "react-redux"
import { increamentCounter, decreamentCounter } from "../redux/slices/counterSlice";
function Sample() {

    const dispatch = useDispatch();

    const { counter } = useSelector((state: any) => state.counter);

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