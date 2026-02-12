import { useGame } from "./game/GameContent";
import {WelcomeScreen} from "./components/WelcomeScreen";
import GameBoard from "./components/GameBoard";

function AppInner() {
  const { phase } = useGame();
  return (
    phase === "welcome" ? <WelcomeScreen /> : <GameBoard />
  )
}

export default function App() {
  return (
    <>
      <AppInner />
    </>
  )
}