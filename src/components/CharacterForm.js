import React from "react";

function CharacterForm(props) {
  return (
    <form>
      <input
        value={props.inputText}
        type="text"
        placeholder="Add new Character"
        onChange={props.handleChanges}
      />
    </form>
  );
}

export default CharacterForm;
