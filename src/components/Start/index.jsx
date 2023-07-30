import React from "react";
import Button from "../Button";
import "./_index.css";

const Start = ({ startAction }) => (
  <div className="app-start">
    <div className="start-content">
      Choose a number between 1 and 10,000.
      <br />I will guess it within a maximum of 14 attempts.
    </div>
    <Button onClick={startAction} keyCode={13} keyLabel="enter">
      Go!
    </Button>
  </div>
);

export default Start;
