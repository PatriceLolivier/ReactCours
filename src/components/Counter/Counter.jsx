import {useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reinitialize,
} from "../../Features/counter/CounterSlice";
import { Count } from "../Count/Count";

export function Counter() {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center dark:bg-gray-800 dark:text-white h-screen">
        <Count/>
      <div className="flex flex-row gap-3 mt-4">
        <button onClick={() => dispatch(increment())} className="border-2 border-blue-500 px-4 py-2 rounded-md">Increment</button>
        <button onClick={() => dispatch(decrement())} className="border-2 border-blue-500 px-4 py-2 rounded-md">Decrement</button>
        <button onClick={() => dispatch(reinitialize())} className="border-2 border-blue-500 px-4 py-2 rounded-md">Reinitialize</button>
      </div>
    </div>
  );
}
