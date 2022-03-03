import { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";
import { getMovieDetailsById } from './utils';
import MovieDetails from "./components/MovieDetails";

function App() {
  const [movie, setMovie] = useState("");

  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = async() => {
    const requestedMovie =  await getMovieDetailsById('tt0372784');
    setMovie(requestedMovie);
  }
  return (
    <>
    <div>
      <MovieCard 
      title={movie.Title}
      type={movie.Type}
      posterUrl = {movie.Poster}  
    />
    </div>
    <div>
    <MovieDetails
      posterUrl = {movie.Poster}
      title = {movie.Title} 
      rated = {movie.Rated}
      runtime = {movie.Runtime} 
      genre = {movie.Genre} 
      plot = { movie.Plot} 
      actors = {movie.Actors} 
      rating = { movie.Rating}
    />

    </div> 
    </>
    
  );
}

export default App;
