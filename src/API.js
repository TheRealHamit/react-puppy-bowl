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