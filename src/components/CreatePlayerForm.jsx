export default function CreatePlayerForm() {
    return (
        <div>
            <form method="post">
                <label>
                    Name:
                    <input type="text" placeholder="Mococo"></input>
                </label>
                <label>
                    Breed: 
                    <input type="text" placeholder="Guard Dog"></input>
                </label>
                <label>
                    Status: 
                    <select>
                        <option value="bench">Bench</option>
                        <option value="field">Field</option>
                    </select>
                </label>
                <label>
                    Image: 
                    <input type="url" placeholder="https://static.wikia.nocookie.net/virtualyoutuber/images/3/3e/Mococo_Abyssgard_Portrait.png"></input>
                </label>
                <label>
                    Team ID: 
                    <input type="number" min="1" placeholder="1"></input>
                </label>
                <input type="button" value="Create Player"></input>
            </form>
        </div>
    )
}