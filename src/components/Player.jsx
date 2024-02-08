import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GetPlayer } from "../API"
import RenderPlayer from "./RenderPlayer"


export default function Player() {
    let {playerId} = useParams()

    const [playerData, setPlayerData] = useState(null)

    useEffect(() => {
        GetPlayer(playerId, setPlayerData)
    }, [])
    return (
        <div>
            {playerData && <RenderPlayer playerData={playerData} />}
        </div>
    )
}