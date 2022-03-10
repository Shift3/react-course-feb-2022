import styled from 'styled-components';
import MovieCard from '../components/MovieCard';

const MovieList = ({movies}) => {
  return (
    <MovieListContainer>
      {
        movies.map(movie => (<MovieCard movie={movie} key={movie.imdbID}/>))
      }
    </MovieListContainer>
  );
}

const MovieListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(min-content, 1fr));
  grid-template-rows: auto;
  grid-gap: 2rem;
`;
export default MovieList;