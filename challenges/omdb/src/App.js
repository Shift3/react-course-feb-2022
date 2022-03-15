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
  const [pageNum, setPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  
  useEffect(() => {
    if(searchTerm === '') return;
    setIsLoading(true);
    getMoviesBySearchTerm(searchTerm, pageNum).then(response => {
      if(response.setError){
        setMovies([]);
        setError(`Error occured: ${response.Error}`);
        setTotalPages(null);
      }
      setMovies(response.Search);
      setTotalPages(Math.ceil(response.totalResults / 10));
    }).catch(err => {
      setMovies([]);
      setError(`Error occured: ${err}`);
      console.log('Error: ', error);
      setTotalPages(null);
    }).finally(() => setIsLoading(false));
     
  }, [searchTerm, pageNum]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setSearchTerm(prev => e.target.searchInput.value);
  }

  const nextPage = () => {
    if(movies && pageNum < totalPages){
      setPageNum(pageNum + 1);
    }
  }

  const previousPage = () => {
    if(movies && pageNum !== 1){
      setPageNum(pageNum - 1);
    }
  }

  return (
    <>
      <Header/>

      { isLoading ? (
        <Spinner />
      ) : (
        <div className={classes.main}>
          <SearchBar onSubmit={onSubmitHandler}/>
          
          <MovieList 
            movies={movies} 
            nextPage={nextPage} 
            previousPage={previousPage}
            pageNum={pageNum}
            totalPages={totalPages} />
        </div>
      )
    }
    </>
    
  );
}

export default App;
