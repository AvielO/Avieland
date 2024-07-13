import React, { useState, useEffect } from "react";
import { calculateTimeUntilNextFiveMinute } from "../../utils/helpers";

const Timer = () => {
  const [time, setTime] = useState(calculateTimeUntilNextFiveMinute());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(interval);
          return calculateTimeUntilNextFiveMinute();
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (time === 0) {
      setTime(calculateTimeUntilNextFiveMinute());
    }
  }, [time]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="rounded-full bg-sky-50 px-4 py-2">
      <div className="text-2xl">{formatTime(time)}</div>
    </div>
  );
};

export default Timer;
