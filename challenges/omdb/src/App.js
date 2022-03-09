import { useState, useEffect } from "react";
import Header from "./components/Header";
import Spinner from "./components/Spinner";
import SearchBar from "./components/SearchBar";
import { getMoviesBySearchTerm } from './utils';
import MovieList from "./components/MovieList";

function App() {
  const [searchTerm, setSearchTerm] = useState("batman");
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [srror, setError] = useState(null);
  
  useEffect(() => {
    setIsLoading(true);
    getMoviesBySearchTerm(searchTerm).then(response => {
      if(response.setError){
        setMovies([]);
        setError(`Error occured: ${response.Error}`);
      }
      setMovies(response.Search);
      console.log('Fetched movies: ', movies);
    }).catch(err => {
      setMovies([]);
      setError(`Error occured: ${err}`);
    }).finally(() => setIsLoading(false));
     
  }, [searchTerm]);

  const onSubmitHandler = (e) => {
    console.log('called');
    e.preventDefault();
    setSearchTerm(e.target.searchInput.value);
  }

  return (
    <>
      <Header/>

      { isLoading ? (
        <Spinner />
      ) : (
        <>
          <SearchBar onSubmit={onSubmitHandler}/>
          <MovieList movies={movies}/>
        </>
      )
    }
    </>
    
  );
}

export default App;
