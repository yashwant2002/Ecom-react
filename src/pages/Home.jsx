import axios from 'axios';
import { HeroSection } from '../components/Home/HeroSection';
import { useEffect, useState } from 'react';

import '../components/Home/Home.css'
import { Link } from 'react-router-dom';


function Home() {
  const [product, setProduct] = useState([]);

  const getProducts = async()=>{
    try{
      await fetch('https://api.escuelajs.co/api/v1/products')
      .then(res=> res.json())
      .then(json => setProduct(json))
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getProducts()
  },[])
  return (
    <div className=''>
      <HeroSection/>
      <div className=' m-2 my-8 px-5 py-6 sale rounded-lg'>
        <h1 className=' text-3xl sm:text-xl font-bold'>Flash Sale</h1>
        <div className='product-sale rounded-lg mt-5'>
        {
          product.slice(0,10).map((data)=>{
            return (
              <Link key={data.id}>
              <div className='transition-transform duration-500 ease-in-out transform hover:scale-110 img-hover-border' >
                <div  >
                  <img className='rounded-lg ' src={data.images}/>
                </div>
                <div>
                  <h3 className=' font-bold text-xl md:text-lg '>{data.title}</h3>

                  <h3 className=' font-semibold text-lg'>${data.price }</h3>
                </div>
              </div>
              </Link>
            )
          })
        }
        </div>
      </div>
    </div>
  )
}

export default Home