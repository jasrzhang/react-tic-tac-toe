import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  function handleSelectSqure() {
    setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
  }

  return (
    <main>
      <header>
        <img src="game-logo.png" alt="Hand-drawn tic tac toe game board" />
        <h1>Tic-Tac-Toe</h1>
      </header>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            defaultName="player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            defaultName="player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSqure={handleSelectSqure}
          activePlayerSymbol={activePlayer}
        />
      </div>
    </main>
  );
}

export default App;
