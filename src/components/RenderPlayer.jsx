import { DeletePlayer } from "../API"

export default function RenderPlayer({ playerData, navigate }) {
    function buttonClicked() {
        DeletePlayer(playerData.id)
        navigate("/player-list")
    }
    return (
        <div className="player-container">
            <h1>{playerData.name}</h1>
            <img className="player-image" src={playerData.imageUrl}></img>
            <p>Breed: {playerData.breed}</p>
            <p>Status: {playerData.status}</p>
            <button onClick={buttonClicked}>Delete Player</button>
        </div>
    )
}