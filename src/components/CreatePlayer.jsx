import CreatePlayerForm from "./CreatePlayerForm";

export default function CreatePlayer({navigate}) {
    return (
        <div>
            <h1>Create Player</h1>
            <CreatePlayerForm navigate={navigate} />
        </div>
    )
}