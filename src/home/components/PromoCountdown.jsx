import { useState, useEffect } from "react";
const PromoCountDown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "December, 31, 2024";

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
    <ol>
      <li className="Days">
        <span> {days}</span>
        Days
      </li>
      <li className="Hours">
        <span> {hours}</span>
        Hours
      </li>
      <li className="Handle">
        <span> {minutes}</span>
        Minutes
      </li>
      <li className="Seconds">
        <span> {seconds}</span>
        Seconds
      </li>
    </ol>
  );
};

export default PromoCountDown;
