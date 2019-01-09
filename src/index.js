import React from "react";
import ReactDOM from "react-dom";

import CharacterList from "./components/CharacterList";
import "./styles.css";

const disneyData = [
  { characterName: "Mickey Mouse" },
  { characterName: "Minnie Mouse" },
  { characterName: "Donald Duck" },
  { characterName: "Goofy" },
  { characterName: "Pluto" }
];

class App extends React.Component {
  render() {
    return <CharacterList disneyData={disneyData} />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
