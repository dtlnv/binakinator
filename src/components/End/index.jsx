import React, { useEffect, useState } from "react";
import Button from "../Button";
import "./_index.css";

const End = ({ middle, step, resetAction }) => {
  const [showResetButton, setShowResetButton] = useState(false);

  useEffect(() => {
    document.body.classList.add("firework");
    const timer = setTimeout(() => {
      setShowResetButton(true);
      document.body.classList.remove("firework");
    }, 2300);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove("firework");
    };
  }, []);

  return (
    <div className="app-end">
      <div className="end-content">
        Yeah! Your number is <strong>{middle}</strong>!
        <br />I got it in <strong>{step}</strong> {step === 1 ? "try" : "tries"}!
      </div>
      {showResetButton && (
        <Button onClick={resetAction} keyCode={13} keyLabel="enter">
          Reset
        </Button>
      )}
    </div>
  );
};
export default End;
