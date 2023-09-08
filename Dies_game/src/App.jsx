import styled from "styled-components";
import StartGame from "./components/StartGame";
import { useState } from "react";
import GamePlay from "./components/GamePlay";
const Button = styled.button`
  background-color: black;
  color: white;
  paddinng: 10px;
`;
function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGamePaly = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>{isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePaly} />}</>
  );
}

export default App;
