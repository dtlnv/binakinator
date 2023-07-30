import React, { useState, useEffect } from "react";
import Start from "../Start";
import Game from "../Game";
import End from "../End";
import "./_index.css";

const initialRange = [0, 10001];

const App = () => {
  const [[min, max], setRange] = useState(initialRange);
  const [step, setStep] = useState(1);
  const [state, setState] = useState("start");
  const [middle, setMiddle] = useState(0);

  useEffect(() => {
    if (max - min <= 2) {
      setState("end");
    }
    setMiddle(Math.floor((min + max) / 2));
  }, [min, max, step, state]);

  const lessAction = () => {
    setRange((prev) => [prev[0], middle]);
    setStep((prev) => prev + 1);
  };

  const moreAction = () => {
    setRange((prev) => [middle, prev[1]]);
    setStep((prev) => prev + 1);
  };

  const resetAction = () => {
    setRange(initialRange);
    setStep(1);
    setState("start");
  };

  return (
    <div id="app-container">
      {state === "start" && <Start startAction={() => setState("game")} />}

      {state === "game" && (
        <Game
          middle={middle}
          actions={{ lessAction, moreAction }}
          step={step}
          endGameAction={() => setState("end")}
        />
      )}

      {state === "end" && <End middle={middle} step={step} resetAction={resetAction} />}
    </div>
  );
};

export default App;
