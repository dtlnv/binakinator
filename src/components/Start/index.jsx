import React from "react";
import Button from "../Button";
import "./_index.css";

const Start = ({ max, setInitMax, maxSteps, startAction }) => {
  const rangeChangeAction = (number) => {
    setInitMax(parseInt(number));
  };

  return (
    <div className="app-start">
      <div className="start-content">
        Pick a number between 1 ... and
        <input
          type="number"
          defaultValue={max ? max : 10}
          onChange={(e) => rangeChangeAction(e.target.value, "max")}
          title="Min 10"
        />
        .
        <br />I will guess it in {maxSteps} steps maximum.
      </div>
      <Button onClick={startAction} keyCode={13} keyLabel="enter">
        Go!
      </Button>
    </div>
  );
};
export default Start;
