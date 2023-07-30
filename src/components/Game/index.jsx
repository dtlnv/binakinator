import React from "react";
import Button from "../Button";
import "./_index.css";

const Game = ({ middle, actions, step, endGameAction }) => (
  <div className="app-game">
    <div className="game-content">
      <div className="game-step">Attempt #{step}</div>
      Your number is <strong>{middle}</strong>?
    </div>
    <div className="game-buttons">
      <Button onClick={actions.lessAction} keyCode={37} keyLabel="←">
        Lower
      </Button>
      <Button onClick={endGameAction} keyCode={13} keyLabel="enter">
        Exactly!
      </Button>
      <Button onClick={actions.moreAction} keyCode={39} keyLabel="→">
        Higher
      </Button>
    </div>
  </div>
);

export default Game;
