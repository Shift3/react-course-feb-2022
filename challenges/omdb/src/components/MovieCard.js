import "./MovieCard.css";

const MovieCard = ({ Title: title, Type: type, Poster: posterUrl }) => {
  const getDetails = () => {

  }

  return(
    <div className="container" onClick={getDetails}>
      <img src={posterUrl} alt={title} />
      <p>{title}</p>
      <span>{type}</span>
    </div>
  );
}

export default MovieCard;