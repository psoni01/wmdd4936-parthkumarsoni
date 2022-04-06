import React from "react";

import "./style.css";

const GameInfo = (props) => {
  return (
    <>
      <div className="gameInfo">
        <h2> Trump Card Game</h2>
        <h3>How To Play?</h3>
        <p>
          Following are two randomly selected cards. One each for you and your
          Opponent. Select the criteria like weight, height, matches, etc in
          which you think your WWE superstar can defeat Opponent's WWE
          Superstar.
        </p>
      </div>
    </>
  );
};

export default GameInfo;
