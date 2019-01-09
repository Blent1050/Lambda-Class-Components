import React from "react";

function CharacterList(props) {
  return (
    <div>
      {props.disneyData.map(character => {
        return <div>{character.characterName}</div>;
      })}
    </div>
  );
}

export default CharacterList;
