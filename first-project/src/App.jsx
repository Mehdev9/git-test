
import './App.css'
// const App = () => {
//   let person = { 
//     firstname: "mehdi",
//     lastname: "belkateb"
// }

// const displayName = () => {
//   return person.firstname + " " + person.lastname;

// }
// return(
//   <div>
//     <h1>Bonjour, {displayName()}</h1>
//   </div>
// )
// }

const App = () => {
  let movie = {
    name : "thor",
    releaseDate : "10.10.2020",
    time : "2 hour",
    directorName : "stan lee",
    poster : "https://m.media-amazon.com/images/I/71Qbo0tyNBL._AC_UF1000,1000_QL80_.jpg"
  }
    return (
      <div>
        <h1> titre du film : {movie.name}</h1>
        <h2> date de sortie : {movie.releaseDate}</h2>
        <h2> duree : {movie.time}</h2>
        <h2> directeur : {movie.directorName}</h2>
        <img src={movie.poster}></img>
      </div>
    )
  }



export default App;
