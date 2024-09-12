import React, { useState, useEffect } from "react";

interface TimerProps {
  initialTime: number; // Начальное время в секундах
  className?: string;
}

interface FormattedTime {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const Timer: React.FC<TimerProps> = ({ initialTime, className }) => {
  const [time, setTime] = useState<number>(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        }
        clearInterval(interval);
        return 0;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (timeInSeconds: number): FormattedTime => {
    const days = Math.floor(timeInSeconds / (3600 * 24));
    const hours = Math.floor((timeInSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return {
      days: String(days).padStart(2, "0"),
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  };

  const formattedTime = formatTime(time);

  return (
    <div className={`flex items-center text-BodyXXL font-regular ${className}`}>
      <div className="relative flex flex-col items-center">
        <div>{formattedTime.days}</div>
        <div className="text-BodyTiny">DAYS</div>
      </div>
      <div className="relative mx-[22px] flex items-center">
        <div className="absolute -bottom-[10px]">{":"}</div>
      </div>
      <div className="relative flex flex-col items-center">
        <div>{formattedTime.hours}</div>
        <div className="m text-BodyTiny">HOURS</div>
      </div>
      <div className="relative mx-[22px] flex items-center">
        <div className="absolute -bottom-[10px]">{":"}</div>
      </div>
      <div className="relative flex flex-col items-center">
        <div>{formattedTime.minutes}</div>
        <div className="text-BodyTiny">MINS</div>
      </div>
      <div className="relative mx-[22px] flex items-center">
        <div className="absolute -bottom-[10px]">{":"}</div>
      </div>
      <div className="relative flex flex-col items-center">
        <div>{formattedTime.seconds}</div>
        <div className="text-BodyTiny">SECS</div>
      </div>
    </div>
  );
};

export default Timer;
