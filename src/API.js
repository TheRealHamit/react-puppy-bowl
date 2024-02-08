const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2308-acc-pt-web-pt-b"

export async function GetPlayers(setter) {
    try{
        const response = await fetch(API_URL + "/players",
        {
            method: "GET",
            headers: {}
        })
        const result = await response.json()
        setter(result.data.players)
    } catch (error) {
        console.error(error)
    }
}

export async function GetPlayer(playerId, setter) {
    try{
        const response = await fetch(API_URL + `/players/${playerId}`,
        {
            method: "GET",
            headers:{}
        })
        const result = await response.json()
        setter(result.data.player)
    } catch (error) {
        console.error(error)
    }
}

export async function CreatePlayer(playerObj) {

    try{
        const response = await fetch(API_URL + "/players",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(playerObj),
        })
        const result = await response.json()
        if (result.success) {
            alert(`Successfully added player: ${result.data.newPlayer.name}`)
        } else {
            alert(`Failed to add player.\n${result.error.message}`)
        }
    } catch(error) {
        console.error(error)
    }
}

export async function DeletePlayer(playerId) {
    try{
        const response = await fetch(API_URL + `/players/${playerId}`,
        {
            method: "DELETE"
        })
        const result = await response.json()
        if (result.success) {
            alert(`Successfully removed player with id: ${playerId}`)
        } else {
            alert(`Failed to remove player.\n${result.error.message}`)
        }
    } catch (error) {
        console.error(error)
    }
}