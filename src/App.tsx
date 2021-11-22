import { useEffect, useRef, useState } from "react";

export default function OldNewTime() {
  // const countRef = useRef(0);
  const newTimeRef = useRef(null);
  const prevTimeRef = useRef(null);
  const [time, setTime] = useState(0);
  const [color, setColor] = useState("");

  const timePast = () => {
    if (prevTimeRef.current) {
      const timeDiff = Math.floor((time - prevTimeRef.current) / 1000);
      console.log(timeDiff);
      return timeDiff;
    }
  };

  // const checkTtimeNow = () => {
  //   newTimeRef.current = Date.now();
  //   setTime(newTimeRef.current);
  //   console.log(newTimeRef.current);
  // };

  const checkTimeNow = () => {
    let today = new Date();
    let sec = today.getSeconds();
    setTime(newTimeRef.current);
    console.log(sec);
  };

  const checkColor = () => {
    let timeD = timePast();
    console.log(`in the check color, time is ${timeD}`);
    if (timeD > 2) {
      console.log("time is > 2");
      setColor("yello");
    } else {
      console.log("time is less than 2");
      setColor("green");
    }
  };

  useEffect(() => {
    prevTimeRef.current = time;
    checkColor();
  });

  return (
    <div>
      <div>
        <div>Time was {prevTimeRef.current}</div>
        <div>Time past {timePast()} </div>
        <div style={{ color: color }}> color </div>
        <div>just update time is {time}</div>
        <button onClick={checkTimeNow}>Click</button>;
      </div>
    </div>
  );
}
