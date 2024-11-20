import { useSelector } from "react-redux";

export function Count() {
    const count = useSelector((state) => state.counter.value);
    return <div className="text-2xl font-bold mt-4">Count : {count}</div>;
}