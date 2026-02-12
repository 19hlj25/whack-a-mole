import { useGame } from "../game/GameContent";

export function WelcomeScreen (){
    const { startGame } = useGame();

    return (
        <>
        <div className="screen">
            <h1> Wack a Mole</h1>
            <p>
                Click the mole to score points. Each time you wack it, it moves to a random hole!!;
            </p>
            <buttons className="btn" onClick={startGame}>
                Play 
                </buttons>
        </div>
        </>
    )
}