import { useState } from "react";

function Player({ defaultName, symbol, isActive, onPlayerNameChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayer1Name] = useState(defaultName);

  const clickEdit = () => {
    // this could work but not recommended by React.
    // What this atcually does is to 'Schedual a state update to true, won't update the state immediately
    // setIsEditing(!isEditing)

    // Use a function is recommended
    setIsEditing((isEditing) => !isEditing);
    if (isEditing) {
      onPlayerNameChange(symbol, playerName);
    }
  };

  const handleChange = (event) => {
    console.log(event);
    setPlayer1Name(event.target.value);
  };

  let displayName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    displayName = (
      <input
        required={true}
        type="text"
        value={playerName}
        onChange={handleChange}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {displayName}
        <span className="player-symbole">{symbol}</span>
      </span>
      <button onClick={clickEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
