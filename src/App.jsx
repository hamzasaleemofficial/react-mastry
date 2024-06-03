import { Fragment, useEffect, useState } from "react";
import "./App.css";
import InputTimer from "./components/timerInput";
import TimerDisplay from "./components/timerDisplay";

const App = () => {
  const [isStart, setIsStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerId, setTimerId] = useState(0);

  const handleStart = () => {
    if (hours < 0 || minutes < 0 || seconds <= 0) {
      alert("Please enter a valid time");
    } else {
      setIsStart(true);
    }
  };
  const handleReset = () => {
    setIsStart(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    clearInterval(timerId);
  };

  const handlePaused = () => {
    setIsPaused(true);
    clearInterval(timerId);
  };

  const handleResume = () => {
    setIsPaused(false);
    runTimer(seconds, minutes, hours);
  };

  const handleInput = (e) => {
    const value = parseInt(e.target.value);
    const id = e.target.id;
    if (id === "hours") {
      setHours(value);
    } else if (id === "minutes") {
      setMinutes(value);
    } else {
      setSeconds(value);
    }
  };

  const runTimer = (sec, min, hr, tId) => {
    if (sec > 0) {
      setSeconds((s) => s - 1);
    } else if (sec === 0 && min > 0) {
      setMinutes((m) => m - 1);
      setSeconds(59);
    } else if (min === 0) {
      setHours((h) => h - 1);
      setMinutes(59);
      setSeconds(59);
    }
    if (hr === 0 && min === 0 && sec === 0) {
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      clearInterval(tId);
      alert("Timer is finished");
    }
  };

  useEffect(() => {
    let tId;
    if (isStart) {
      tId = setInterval(() => {
        runTimer(seconds, minutes, hours, tId);
      }, 1000);
      setTimerId(tId);
    }

    return () => {
      clearInterval(tId);
    };
  }, [isStart, hours, minutes, seconds]);
  // console.log(hours,minutes,seconds);
  return (
    <Fragment>
      <h2>Countdown Timer</h2>
      {isStart ? (
        <TimerDisplay
          handleReset={handleReset}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          handlePaused={handlePaused}
          isPaused={isPaused}
          handleResume={handleResume}
        />
      ) : (
        <InputTimer handleStart={handleStart} handleInput={handleInput} />
      )}
    </Fragment>
  );
};

export default App;
