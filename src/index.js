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
      characterName: "",
      characterMovie: ""
    };
  }

  handleChanges = event => {
    //name has to match property on state
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.name);
  };

  render() {
    return (
      <div className="App">
        <CharacterList disneyData={this.state.characterList} />
        <CharacterForm
          handleChanges={this.handleChanges}
          characterName={this.state.characterName}
          characterMovie={this.state.characterMovie}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
