import { useEffect, useState } from "react"
import apitmdb from "../api/apitmdb"
import "./../assets/css/home.css"
import MovieCard from "../components/MovieCard"

const HomeView = () => {

    const [movies, setMovies] = useState([])
  
  useEffect(() => {
    apitmdb.get("/discover/movie")
        .then( (response) => {
            setMovies(response.data.results)
        } )
  },[])
    
    return (
      <div>
        <h1> tout les films </h1>
        <input type="searchbar" placeholder="trouver un film"/> 
      <div id="home">
      {movies.map((movie) => {
        return  <MovieCard  key={movie.id} movie = {movie}/>
      })}
    </div>
    </div>
  )
}

export default HomeView
