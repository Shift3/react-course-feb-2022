import axios from 'axios';
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

function getPosts(){
  axios.get(apiUrl)
        .then(response => console.log('response using axios: ', response.data))
        .catch(error => console.log('Error: ', error));
}

getPosts();