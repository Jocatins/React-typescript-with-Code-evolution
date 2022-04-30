import React, { useEffect, useRef, useState } from "react";

export const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | null>(null);
  // or pass in undefined in null

  const stopTimer = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
  };
  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 2);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, []);
  return (
    <div>
      MutableRef Timer {timer}
      <button onClick={() => stopTimer()}>stopTimer</button>
    </div>
  );
};
