import { useGame } from "../game/GameContent";
import Hole from "./Hole";

export default function GameBoard(){

const { score, restartGame, HoleCount, moleIndex, whackMole, handleHighScore} = useGame ();

const holes = Array.from({ length: HoleCount }, (_, i) => i);

return (
    <div className="screen">
        <div className="topbar">
            <div className= "score">Score: {score}</div>
            <button className= "btn" onClick={()=>{restartGame();handleHighScore();}}>
                Restart
                
            </button>
        </div>
        <div className="grid">
            {holes.map((i) => (
                <Hole key={i} hasMole={ i ===moleIndex} onWhack ={whackMole} />
))}
 </div>
 </div>
 );
}
