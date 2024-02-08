import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect} from 'react'
import Home from "./components/Home"
import PlayerList from "./components/PlayerList"
import CreatePlayer from './components/CreatePlayer'
import Player from './components/Player'
import './App.css'

export default function App() {

  const navigate = useNavigate()
  let playerId = useParams()

  return (
    <>
    <div id="container">
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/player-list">Player List</Link>
        <Link to="/create-player">Create Player</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/player-list" element={<PlayerList navigate={navigate} />} />
          <Route path="/create-player" element={<CreatePlayer />} />
          <Route path="/player/:playerId" element={<Player />} />
        </Routes>
      </div>
    </div>
    </>
  )
}