import React from "react";
import Button from "../Button";
import "./_index.css";

const Start = ({ startAction }) => (
  <div className="app-start">
    <div className="start-content">
      Pick a number between 1... and a 10 000.
      <br />I will guess it in 13 steps maximum.
    </div>
    <Button onClick={startAction} keyCode={13} keyLabel="enter">
      Go!
    </Button>
  </div>
);

export default Start;
