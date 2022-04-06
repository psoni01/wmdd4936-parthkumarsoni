import "./style.css";
import React from "react";

const Card2 = (props) => {
  return (
    <>
      <div className="cardContainer">
        <div className="cardTitle">
          <h3>{props.card.title}</h3>
        </div>
        <div className="cardInfo">
          <div>Weight :{props.card.weight} {((props.card.weight!="?")?<span>kg</span>:<></>)}</div>
          <div>Height :{props.card.height} {((props.card.weight!="?")?<span>m</span>:<></>)}</div>
          <div>Matches :{props.card.matches}</div>
          <div>Wins :{props.card.wins}</div>
          <div>Defeats :{props.card.defeats}</div>
          <div>Wins Percent :{props.card.winPercentage}</div>
        </div>
      </div>
    </>
  );
};

export default Card2;
