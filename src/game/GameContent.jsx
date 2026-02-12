import { createContext, useContext, useMemo, useState } from "react";

const GameContext = createContext(null);

function getRandomHoleIndex(holeCount) {
  return Math.floor(Math.random() * holeCount);
}

export function GameProvider({ children }) {
  const HoleCount = 9;

  const [phase, setPhase] = useState("welcome"); // "welcome" | "playing"
  const [score, setScore] = useState(0);
  const [moleIndex, setMoleIndex] = useState(() => getRandomHoleIndex(HoleCount));
  const [highscore, setHighscore] = useState([])
  
  function startGame() {
    setScore(0);
    setMoleIndex(getRandomHoleIndex(HoleCount));
    setPhase("playing");
  }

  function restartGame() {
    setPhase("welcome");
  }

  function whackMole() {
    setScore((s) => s + 1);
    setMoleIndex(getRandomHoleIndex(HoleCount));
  }

  function handleHighScore(){
    setHighscore(prevHighscore=>[...prevHighscore, score])
  }

  const value = useMemo(
    () => ({
      HoleCount,
      phase,
      score,
      moleIndex,
      startGame,
      restartGame,
      whackMole,
      highscore,
      setHighscore,
      handleHighScore,
    }),
    [phase, score, moleIndex]
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function  useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error("useGame must be used inside <GameProvider>");
  return ctx;
}