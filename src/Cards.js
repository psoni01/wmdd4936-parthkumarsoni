import axios from "axios";
import "./style.css";
import React from "react";
import { useState, useEffect } from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";

const Cards = (props) => {
  const hiddenCard = {
    title: "?",
    weight: "?",
    height: "?",
    matches: "?",
    wins: "?",
    defeats: "?",
    winPercentage: "?",
  };
  const [card1, setCard1] = useState();
  const [card2, setCard2] = useState();
  const [showCard, setShowCard] = useState(false);
  const [win, setWin] = useState();

  useEffect(function fetchCards() {
    axios
      .get("/api/v1/stars/2")
      .then((results) => {
        setCard1(results.data[0]);
        setCard2(results.data[1]);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleClick = (a) => {
    setShowCard(true);
    switch (a) {
      case "weight":

      case "height":

      case "matches":
      case "wins":
      case "winPercentage": {
        if (card1[a] >= card2[a]) {
          setWin("win");
        } else {
          setWin("lose");
        }
        break;
      }
      case "defeats": {
        if (card1.defeats <= card2.defeats) {
          setWin("win");
        } else {
          setWin("lose");
        }
      }
    }
  };

  const handleReplay = () => {
    axios
      .get("/api/v1/stars/2")
      .then((results) => {
        setCard1(results.data[0]);
        setCard2(results.data[1]);
      })
      .catch((error) => console.log(error));
    setWin();
    setShowCard(false);
  };

  return (
    <div className="gameContainer">
      <h1>Two random cards</h1>

      <div className="cards">
        {card1 ? (
          <div>
            <h2>Your Card</h2>
            {showCard ? (
              <Card2 card={card1} />
            ) : (
              <Card1 card={card1} handleClick={handleClick} />
            )}
          </div>
        ) : (
          <></>
        )}

        <div>
          <h2>Opponent's Card</h2>

          {showCard ? <Card2 card={card2} /> : <Card2 card={hiddenCard} />}
        </div>
      </div>
      {win ? (
        <div className="model">
          <div className="modelDiv">
            <h1>You {win}</h1>
            <button onClick={(event) => handleReplay()}>Play Again</button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Cards;
