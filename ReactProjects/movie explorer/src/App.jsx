import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import './App.css'
import MovieLinks from "./pages/MovieLinks"
import MovieDetails from "./pages/MovieDetails"
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie-links" element={<MovieLinks/>}/>
        <Route path="/movie/:id" element={<MovieDetails/>}/>
      </Routes>
    </div>
  )
}

export default App