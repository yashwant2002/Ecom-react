import React from 'react'
import './Home.css'
import banner_1 from '../Image/banner-1.jpg'
import banner_2 from '../Image/banner-2.jpg'
import banner_3 from '../Image/banner-3.jpg'
import banner_4 from '../Image/banner-4.jpg'
import banner_5 from '../Image/banner-5.jpg'
import banner_6 from '../Image/banner-6.jpg'

export const HeroSection = () => {
  return (
    <div className='  grid-container'>
        <div className='item-1'><img src={banner_1}/></div>
        <div className='item-2'><img src={banner_2}/></div>
        <div className='item-3'><img src={banner_3}/></div>
        <div className='item-4'><img src={banner_4}/></div>
        <div className='item-5'><img src={banner_5}/></div>
        <div className='item-6'><img src={banner_6}/></div>
    </div>
  )
}
