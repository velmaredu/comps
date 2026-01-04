import Button from "../components/Button";
import useConter from "../hooks/use-counter";

function CounterPage({ initialCount}) {
    const { count, increment } = useConter(initialCount);

    return (
        <div>
            <h1>Count is {count}</h1>
            <Button onClick={increment}>Increment</Button>
        </div>
    );
}

export default CounterPage;