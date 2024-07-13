import React, { useState, useEffect } from "react";

const Timer = () => {
  const calculateTimeUntilNext5MinuteMark = () => {
    const now = new Date();
    const minutes = now.getMinutes();
    const next5MinuteMark = Math.ceil((minutes + 1) / 5) * 5;
    const next5Minute = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      now.getHours(),
      next5MinuteMark,
    );
    const timeUntilNext5Minute = Math.round(
      Math.max(0, (next5Minute - now) / 1000),
    ); // time in seconds

    return timeUntilNext5Minute;
  };

  const [time, setTime] = useState(calculateTimeUntilNext5MinuteMark());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(interval);
          return calculateTimeUntilNext5MinuteMark();
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (time === 0) {
      setTime(calculateTimeUntilNext5MinuteMark());
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
