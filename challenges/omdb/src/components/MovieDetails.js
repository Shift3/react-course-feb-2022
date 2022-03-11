import { useEffect, useState } from "react";
import "./movieDetails.css";
import {getMovieDetailsById} from "../utils"

const MovieDetails = ({movieId})=>{
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovieDetailsById(movieId).then( data =>{ 
      setMovie({...data})
    }).catch( err => {
      console.error("An error occured: ", err)
      setMovie({});
    });
  }, [movieId])

  return(
    <div className="movie">
      <img src={movie.Poster} alt={movie.Title} style={{paddingRight:'2rem'}} />
      
      <div className="movieDetail">
        <h2>{movie.Title}</h2>
        <h1 style={{color: 'blue'}}>{movie.imdbRating}</h1>
        <div>
          <span>{movie.Rated}</span>
          <span>{movie.Runtime}</span>
        </div>

        <div>
          <span>{movie.Genre}</span>
        </div>

        <div>
          <h4>Plot</h4>
          <p>{movie.Plot}</p>
        </div>

        <div>
          <h4>Actors</h4>
          <p>{movie.Actors}</p>
        </div>
      </div>
  
    </div>
  )
}

export default MovieDetails;