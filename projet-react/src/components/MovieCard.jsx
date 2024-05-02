import { Link } from "react-router-dom";

const MovieCard = ({movie}) => {
  console.log(movie.id)
  
    return (
      <div>
        <Link to= {{ pathname:`/about/${movie.id}`}}>
          <p style={{fontSize: "15px"}}>{movie.title}</p>
          <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.title}/>
          </Link>
      </div>
    );
  };
  
  export default MovieCard;