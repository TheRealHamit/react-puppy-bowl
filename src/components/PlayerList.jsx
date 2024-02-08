import { useEffect, useState } from "react"
import { GetPlayers } from "../API"

import RenderPlayerList from "./RenderPlayerList"

export default function PlayerList({ navigate }) {
    const [players, setPlayers] = useState(null)

    useEffect(() => {
        GetPlayers(setPlayers)
    }, [])

    return (
        <div>
            {players && <RenderPlayerList navigate={navigate} players={players} />}
        </div>
    )
}