import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const disneyData = [
  { characterName: "Mickey Mouse" },
  { characterName: "Minnie Mouse" },
  { characterName: "Donald Duck" },
  { characterName: "Goofy" },
  { characterName: "Pluto" }
];

function App() {
  const mappedData = disneyData.map(character => {
    return <div>{character.characterName}</div>;
  });
  return <div className="App">{mappedData}</div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
