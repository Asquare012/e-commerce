import { useState, useEffect } from "react";
const FlashCountDown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "April, 31, 2025";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ul>
      <li className="Days">
        <span className="Title">Days</span>
        {days}
      </li>
      <li>:</li>
      <li className="Hours">
        <span className="Title">Hours</span>
        {hours}
      </li>
      <li>:</li>
      <li className="Minutes">
        <span className="Title">Minutes</span>
        {minutes}
      </li>
      <li>:</li>
      <li className="Seconds">
        <span className="Title">Seconds</span>
        {seconds}
      </li>
    </ul>
  );
};

export default FlashCountDown;
