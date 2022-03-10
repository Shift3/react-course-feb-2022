import "./MovieCard.css";

const MovieCard = ({movie}) => {
  const getDetails = () => {

  }

  return(
    <div className="container" onClick={getDetails}>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Title}</p>
      <span>{movie.Type}</span>
    </div>
  );
}

export default MovieCard;