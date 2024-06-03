const timerInput = ({handleStart, handleInput}) => {
  return (
    <div className="input-container">
      <div className="input-box">
        <input onChange={handleInput} id="hours" type="text" placeholder="HH" />
        <input onChange={handleInput} id="minutes" type="text" placeholder="MM" />
        <input onChange={handleInput} id="secons" type="text" placeholder="SS" />
      </div>
      <div className="action-buttons">
        <button className="timer-button" onClick={handleStart}>Star</button>
      </div>
    </div>
  );
};

export default timerInput;
