import { useEffect, useState } from "react"
import { GetPlayers } from "../API"

import RenderPlayerList from "./RenderPlayerList"

export default function PlayerList({ navigate }) {
    const [players, setPlayers] = useState(null)
    const [filter, setFilter] = useState("")

    useEffect(() => {
        GetPlayers(setPlayers)
    }, [])

    function searchChanged(e) {
        setFilter(e.target.value)
    }

    return (
        <div>
            <h1>Player List</h1>
            <label>Search: 
                <input type="search" onChange={searchChanged}></input>
            </label>
            {players && <RenderPlayerList navigate={navigate} players={players} filter={filter} />}
        </div>
    )
}