import React from 'react'
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.escuelajs.co/api/v1/products',
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

function Home() {
  return (
    <div>Home</div>
  )
}

export default Home