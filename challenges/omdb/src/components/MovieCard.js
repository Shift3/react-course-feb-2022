import "./MovieCard.css";

const MovieCard = ({ title, type, posterUrl }) => {
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