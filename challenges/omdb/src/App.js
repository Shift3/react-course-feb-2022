import { useState, useEffect } from "react";
import Header from "./components/Header";
import Spinner from "./components/Spinner";
import SearchBar from "./components/SearchBar";
import { getMoviesBySearchTerm } from './utils';
import MovieList from "./components/MovieList";
import classes from './App.module.css';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    if(searchTerm === '') return;
    setIsLoading(true);
    getMoviesBySearchTerm(searchTerm).then(response => {
      if(response.setError){
        setMovies([]);
        setError(`Error occured: ${response.Error}`);
      }
      setMovies(response.Search);
    }).catch(err => {
      setMovies([]);
      setError(`Error occured: ${err}`);
      console.log('Error: ', error);
    }).finally(() => setIsLoading(false));
     
  }, [searchTerm]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setSearchTerm(prev => e.target.searchInput.value);
  }

  return (
    <>
      <Header/>

      { isLoading ? (
        <Spinner />
      ) : (
        <div className={classes.main}>
          <SearchBar onSubmit={onSubmitHandler}/>
          <MovieList movies={movies}/>
        </div>
      )
    }
    </>
    
  );
}

export default App;
