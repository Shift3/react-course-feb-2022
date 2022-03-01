// const API_URL = `http://www.omdbapi.com`;
// const API_KEY = process.env.REACT_APP_API_KEY;


const getMoviesBySearchTerm = async (searchInput) => {
  const API_URL = `http://www.omdbapi.com`;
  const API_KEY = 'd71fd0c8';    
  
  const response = await fetch(`${API_URL}/?apiKey=${API_KEY}&s=${searchInput}`);
  const data = await response.json();
  
  displayResults(data.Search);
}

const displayResults = (results) => {
  const ul = document.getElementById('movies');
  results.map( movie => {
    let li = document.createElement('li');
    let poster = document.createElement('img');
    let title = document.createElement('h2');

    poster.src = `${movie.Poster}`;
    title.innerHTML = `${movie.Title}`;

    li.appendChild(poster);
    li.appendChild(title);
    ul.appendChild(li);    
  });
} 

getMoviesBySearchTerm('Batman');


