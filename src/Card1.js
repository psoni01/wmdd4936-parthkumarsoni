import "./style.css";
import React from "react";

const Card1 = (props) => {
  return (
    <>
      <div className="cardContainer">
        <div className="cardTitle">
          <h3>{props.card.title}</h3>
        </div>
        <div className="cardInfo cardClickable">
          {" "}
          <div onClick={(event) => props.handleClick("weight")}>
            Weight :{props.card.weight} kg
          </div>
          <div onClick={(event) => props.handleClick("height")}>
            Height :{props.card.height} m
          </div>
          <div onClick={(event) => props.handleClick("matches")}>
            Matches :{props.card.matches}
          </div>
          <div onClick={(event) => props.handleClick("wins")}>
            Wins :{props.card.wins}
          </div>
          <div onClick={(event) => props.handleClick("defeats")}>
            Defeats :{props.card.defeats}
          </div>
          <div onClick={(event) => props.handleClick("winPercentage")}>
            Wins Percent :{props.card.winPercentage}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card1;