import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import CharacterList from "./components/CharacterList";
import CharacterForm from "./components/CharacterForm";

const disneyData = [
  { characterName: "Mickey Mouse" },
  { characterName: "Minnie Mouse" },
  { characterName: "Donald Duck" },
  { characterName: "Goofy" },
  { characterName: "Pluto" }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characterList: disneyData,
      inputText: "hey, i'm in state!"
    };
  }

  render() {
    return (
      <div className="App">
        <CharacterList disneyData={this.state.characterList} />
        <CharacterForm inputText={this.state.inputText} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
