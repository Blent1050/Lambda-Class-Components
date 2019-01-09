import React from "react";

function CharacterForm(props) {
  return (
    <form>
      <input
        value={props.inputText}
        type="text"
        placeholder="Add new Character"
        onChange={event => {
          console.log(event);
        }}
      />
    </form>
  );
}

export default CharacterForm;
