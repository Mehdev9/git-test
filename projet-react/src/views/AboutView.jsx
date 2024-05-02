import { useEffect, useState } from "react"
import apitmdb from "../api/apitmdb"
import { useParams } from "react-router-dom";


const AboutView = () => {

  let { id } = useParams();

  const [movie, setMovie] = useState({})

  useEffect(() => {
    apitmdb.get ( `/movie/${id}` )
        .then( (response) => {
            setMovie(response.data)
            
        } )
  },[id])

  return (
    <div id="detail">
      <h1>detail id</h1>
      <h1>{movie.title}</h1>
      <img src={"https://image.tmdb.org/t/p/original" + movie.poster_path} alt="img" />
    </div>
  )
}

export default AboutView
