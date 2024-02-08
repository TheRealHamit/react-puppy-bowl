export default function RenderPlayer({ playerData }) {
    console.log(playerData)
    return (
        <div>
            <h1>{playerData.name}</h1>
            <img className="player-image" src={playerData.imageUrl}></img>
            <p>Breed: {playerData.breed}</p>
            <p>Status: {playerData.status}</p>
        </div>
    )
}