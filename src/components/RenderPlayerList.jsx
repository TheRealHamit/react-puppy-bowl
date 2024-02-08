export default function RenderPlayerList({ players, navigate, filter }) {
    return(
        <div className="player-list">
            {players.filter((player) => player.name.toUpperCase().includes(filter.toUpperCase())).map((player) => {
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