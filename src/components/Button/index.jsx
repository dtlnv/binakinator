import React, { useEffect, useState } from "react";
import "./_index.css";

const Button = ({ children, keyLabel, keyCode, ...props }) => {
  const [showKeyLabel, setShowKeyLabel] = useState(true);

  useEffect(() => {
    setShowKeyLabel(window.innerWidth > 768);
  }, []);

  useEffect(() => {
    function keyClick(e) {
      if (e.keyCode === keyCode) {
        if (props.onClick && typeof props.onClick === "function") {
          props.onClick();
        }
      }
    }

    window.addEventListener("keydown", keyClick);

    return () => {
      window.removeEventListener("keydown", keyClick);
    };
  }, [keyCode, props]);

  return (
    <div className="app-button">
      <button {...props}>{children}</button>
      {showKeyLabel && keyLabel ? <span className="button-label">{keyLabel}</span> : null}
    </div>
  );
};

export default Button;
