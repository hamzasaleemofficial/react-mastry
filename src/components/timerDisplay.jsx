const timerDisplay = ({
  handleReset,
  handlePaused,
  isPaused,
  handleResume,
  hours,
  minutes,
  seconds,
}) => {
  return (
    <div className="show-container">
      <div className="timer-box">
        <div>{hours < 10 ? `0${hours}` : hours}</div>
        <span>:</span>
        <div>{minutes < 10 ? `0${minutes}` : minutes}</div>
        <span>:</span>
        <div>{seconds < 10 ? `0${seconds}` : seconds}</div>
      </div>
      <div className="action-buttons">
        {!isPaused &&  <button onClick={handlePaused} className="timer-button">
        Pause
      </button>
          }

        {
          isPaused && <button onClick={handleResume} className="timer-button">Resume</button>
        }

        <button className="timer-button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default timerDisplay;
