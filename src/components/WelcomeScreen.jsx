import { useGame } from "../game/GameContent";

export function WelcomeScreen() {
  const { startGame, highscore } = useGame();

  return (
    <>
      <div className="screen">
        <h1> Wack a Mole</h1>
        <p>
          Click the mole to score points. Each time you wack it, it moves to a
          random hole!!
        </p>
        <button className="btn" onClick={startGame}>
          Play
        </button>
        <h2>High Score</h2>
        <p>{highscore}</p>
      </div>
    </>
  );
}
