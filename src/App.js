import "./style.css";
import React from "react";
import StarForm from "./StarForm";
import Cards from "./Cards";
import GameInfo from "./GameInfo";

const App = (props) => {
  return (
    <>
      <StarForm />
      <GameInfo />
      <Cards />
    </>
  );
};

export default App;
