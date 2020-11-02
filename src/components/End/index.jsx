import React, { useEffect } from "react";
import Button from "../Button";
import "./_index.css";

const End = ({ middle, step, resetAction }) => {
  useEffect(() => {
    document.body.classList.add("firework");
    const timer = setTimeout(() => {
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
        <br />I did it in <strong>{step}</strong> steps!
      </div>
      <Button onClick={resetAction} keyCode={27} keyLabel="esc">
        Reset
      </Button>
    </div>
  );
};
export default End;
