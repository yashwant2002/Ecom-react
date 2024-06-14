import axios from 'axios';
import { HeroSection } from '../components/Home/HeroSection';

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
    <div className=''>
      <HeroSection/>
    </div>
  )
}

export default Home