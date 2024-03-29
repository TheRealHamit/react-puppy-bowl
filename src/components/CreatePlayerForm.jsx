import { CreatePlayer } from "../API";

export default function CreatePlayerForm({navigate}) {
    function formSubmitted(e) {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const formJson = Object.fromEntries(formData.entries());
        CreatePlayer(formJson)
        navigate("/player-list")
    }
    return (
        <div className="create-player-form-container">
            <form className="create-player-form" method="POST" onSubmit={formSubmitted}>
                <label>
                    Name: 
                    <input className="create-player-form-item" name="name" type="text" placeholder="Mococo"></input>
                </label>
                <label>
                    Breed: 
                    <input className="create-player-form-item" name="breed" type="text" placeholder="Guard Dog"></input>
                </label>
                <label>
                    Status: 
                    <select className="create-player-form-item" name="status">
                        <option value="bench">Bench</option>
                        <option value="field">Field</option>
                    </select>
                </label>
                <label>
                    Image: 
                    <input className="create-player-form-item" name="image-url" type="url" placeholder="https://static.wikia.nocookie.net/virtualyoutuber/images/3/3e/Mococo_Abyssgard_Portrait.png"></input>
                </label>
                <label>
                    Team ID: 
                    <input className="create-player-form-item" name="team-id" type="number" min="1" placeholder="1"></input>
                </label>
                <input className="create-player-form-submit-button" type="submit" value="Create Player"></input>
            </form>
        </div>
    )
}