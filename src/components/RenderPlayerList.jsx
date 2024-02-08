import { Navigate } from "react-router-dom"

export default function RenderPlayerList({ players, navigate }) {
    console.log(players)
    return(
        <div className="player-list">
            {players.map((player) => {
                return (
                    <div onClick={() => {navigate(`/player/${player.id}`)}} key={player.id} className="player-container">
                        <h1>{player.name}</h1>
                        <img className="player-image" src={player.imageUrl}></img>
                        <p>Breed: {player.breed}</p>
                        <p>Status: {player.status}</p>
                    </div>
                )
            })}
        </div>
    )
}