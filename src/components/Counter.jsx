import { useEffect, useState } from "react";

const Counter = ({ target, duration, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    if (start === end) return;

    let totalMilSecDur = parseInt(duration);
    let incrementTime = Math.abs(Math.floor(totalMilSecDur / end));

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-yellow-500 shadow-md rounded-lg pl-15 pr-15">
      <h2 className="text-4xl font-bold text-white ">{count}+</h2>
      <p className="mt-2 text-gray-700 font-bold">{label}</p>
    </div>
  );
};

export default Counter;
