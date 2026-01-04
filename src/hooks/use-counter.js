import { useEffect, useState } from "react";

function useConter(initialCount) {
  const [count, setCount] = useState(initialCount);

    useEffect(() => {
        console.log("Count changed:", count);
    }, [count]);

    const increment = () => {
        setCount(count + 1);
    };

    return {
        count,
        increment
    };
}

export default useConter;