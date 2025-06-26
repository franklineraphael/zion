import React, { useEffect, useState } from "react";

const Counter = ({ target = 100, duration = 2000 }) => {
  // State to hold the current count
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0; // starting point of the counter

    // Calculate how much to increase the count every interval
    const increment = target / (duration / 20);
    // Example: if target=100 and duration=2000ms, increment = 1 every 20ms

    // Set up the interval to update the count every 20ms
    const counter = setInterval(() => {
      start += increment; // increase the count

      if (start >= target) {
        // Stop counting once we reach or pass the target
        clearInterval(counter);
        setCount(target); // set to exact target to avoid overshoot
      } else {
        // Update state with the new value (rounded down to integer)
        setCount(Math.floor(start));
      }
    }, 20); // every 20 milliseconds

    // Cleanup: clear interval if the component is unmounted
    return () => clearInterval(counter);
  }, [target, duration]); // run useEffect again if target or duration changes

  return (
    <div className="text-5xl font-bold text-green-800 text-center">
      {/* Display the animated count */}
      {count}
      <span className="text-3xl font-bold text-green-600">+</span>
    </div>
  );
};

export default Counter;
