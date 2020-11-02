import React, { useState, useEffect } from "react";
import Start from "../Start";
import Game from "../Game";
import End from "../End";
import "./_index.css";

const initialRange = [1, 10000];

const getMaxSteps = (initMin, initMax) => {
  const steps = [];

  const rand = (min, max) => Math.floor(min - 0.5 + Math.random() * (max - min + 1));

  const binar = (min, max, find, iteration) => {
    steps[iteration]++;
    const middle = Math.floor((min + max) / 2);

    if (find === middle) {
      return true;
    }
    if (min === max) {
      return true;
    }
    if (find < middle && min < find) {
      binar(min, middle, find, iteration);
    }
    if (find > middle && max > find) {
      binar(middle, max, find, iteration);
    }
  };

  for (let i = 0; i <= 100; i++) {
    steps[i] = 0;
    binar(initMin, initMax, rand(1, initMax), i);
  }

  return Math.max(...steps);
};

const App = () => {
  const [initMax, setInitMax] = useState(initialRange[1]);
  const [[min, max], setRange] = useState([]);
  const [maxSteps, setMaxSteps] = useState(0);
  const [step, setStep] = useState(0);
  const [state, setState] = useState("start");
  const [middle, setMiddle] = useState(0);

  useEffect(() => {
    if (max - min <= 2) {
      setState("end");
    }
    setMiddle(Math.floor((min + max) / 2));
  }, [min, max, step, state]);

  useEffect(() => {
    if (initMax > 10) {
      setMaxSteps(getMaxSteps(1, parseInt(initMax) + 1));
    }
  }, [initMax]);

  const lessAction = () => {
    setRange((prev) => [prev[0], middle]);
    setStep((prev) => prev + 1);
  };

  const moreAction = () => {
    setRange((prev) => [middle, prev[1]]);
    setStep((prev) => prev + 1);
  };

  const resetAction = () => {
    setState("start");
    setRange(initialRange);
    setStep(0);
  };

  const startGameAction = () => {
    setRange([1, initMax]);
    setState("game");
  };

  return (
    <div id="app-container">
      {state === "start" && (
        <Start
          max={initMax}
          setInitMax={setInitMax}
          maxSteps={maxSteps}
          startAction={startGameAction}
        />
      )}

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
