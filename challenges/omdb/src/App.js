import { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";
import { getMovieDetailsById } from './utils';

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
    <MovieCard 
      title={movie.Title}
      type={movie.Type}
      posterUrl = {movie.Poster}  
    />
  );
}

export default App;
