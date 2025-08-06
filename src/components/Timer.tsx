import { useState, useEffect } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 1,
    minutes: 23,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset timer when it reaches 0
          return { hours: 1, minutes: 23, seconds: 45 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 text-xl font-bold text-red-600 mb-4">
      <span className="bg-red-100 px-3 py-1 rounded">
        {String(timeLeft.hours).padStart(2, '0')}
      </span>
      <span>:</span>
      <span className="bg-red-100 px-3 py-1 rounded">
        {String(timeLeft.minutes).padStart(2, '0')}
      </span>
      <span>:</span>
      <span className="bg-red-100 px-3 py-1 rounded">
        {String(timeLeft.seconds).padStart(2, '0')}
      </span>
    </div>
  );
};

export default Timer;