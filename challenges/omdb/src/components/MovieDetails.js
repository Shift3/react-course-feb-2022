const MovieDetails = ({ posterUrl, title, rated, runtime, genre, plot, actors, rating}) => {
  return (
    <div className="container">
      <img src={posterUrl} alt={title} />
      <div className="movie-details">
        <div>
          <h3>{title}</h3>
          <span>{rating}</span>
        </div>

        <div>
          <span>{rated}</span>
          <span>{runtime}</span>
          <span>{genre}</span>
        </div>

        <div>
          <h5>Plot</h5>
          <p>{plot}</p>
        </div>

        <div>
          <h5>Actors</h5>
          <p>{actors}</p>  
        </div>        
      </div>
    </div>
  );
}

export default MovieDetails;