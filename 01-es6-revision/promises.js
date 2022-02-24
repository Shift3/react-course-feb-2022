import axios from 'axios';
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

function getPosts(){
  axios.get(apiUrl)
        .then(response => console.log('response using axios: ', response.data))
        .catch(error => console.log('Error: ', error));
}

getPosts();

async function getPostsAsync(){
  try{
    const response = await axios.get(apiUrl);
    console.log('Results using async await: ', response.data);
  }catch(error){
    console.log('Failed: ', error);
  }
  
}

getPostsAsync();