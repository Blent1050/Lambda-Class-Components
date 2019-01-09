import React from "react";

function CharacterForm(props) {
  return (
    <form>
      <input
        value={props.characterName}
        type="text"
        name="characterName"
        onChange={props.handleChanges}
      />
      <input
        value={props.characterMovie}
        type="text"
        name="characterMovie"
        onChange={props.handleChanges}
      />
      <button onClick={props.addNewCharacter}>Add Character</button>
    </form>
  );
}

export default CharacterForm;
