import React, { useState } from "react";
import "./App.css";

function App() {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("white");
  const [wins, setWins] = useState(0);
  const [totalGames, setTotalGames] = useState(0);


  const rollDice = () => {
    const newDice1 = Math.floor(Math.random() * 6) + 1;
    const newDice2 = Math.floor(Math.random() * 6) + 1;
    const sum = newDice1 + newDice2;

    setDice1(newDice1);
    setDice2(newDice2);
    setTotalGames(totalGames + 1);

    if (sum === 7 || sum === 11) {
      setMessage("Você ganhou no Tigrinho do dado🤑");
      setMessageColor("green"); 
      setWins(wins + 1);
    } else {
      setMessage("Você perdeu no Tigrinho do dado😰");
      setMessageColor("red"); 
    }
  };

  
  const backgroundStyle = {
    backgroundImage: `url("https://images.prismic.io/assert2/9b4b36bd-d165-4426-9d5c-1b9fd403a4dd_capa-jogo-do-tigrinho-pol%C3%AAmica-influenciadores+.png?auto=format,compress")`,
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div style={backgroundStyle}>
      <header className="App-header">
        <h1>Jogo de Dados</h1>
        <div className="dice-container">
          <div className="dice">{dice1}</div>
          <div className="dice">{dice2}</div>
        </div>
        <button onClick={rollDice}>Jogar</button>
        <p style={{ color: messageColor }}>{message}</p>
        <p>
          Score: {wins}/{totalGames} ={" "}
          {totalGames > 0 ? ((wins / totalGames) * 100).toFixed(2) : 0}%
        </p>
      </header>
    </div>
  );
}

export default App;
