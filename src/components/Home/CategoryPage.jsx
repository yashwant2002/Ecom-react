import React from 'react';
import { useParams } from 'react-router-dom';
import bags from '../Image/bags.jpg';
import kid from '../Image/kid.jpg';
import woman from '../Image/woman.jpg';
import man from '../Image/man.jpg';
import sports from '../Image/sports.jpg';
import sunglass from '../Image/sunglass.jpg';
import watch from '../Image/watch.jpg';
import sneakers from '../Image/sneakers.jpg';

const categoryData = {
    Man: man,
    Woman: woman,
    Kids: kid,
    Watch: watch,
    Sports: sports,
    Sunglasses: sunglass,
    Bags: bags,
    Sneakers: sneakers
};

const CategoryPage = () => {
    const { category } = useParams();
    const image = categoryData[category];

    return (
        <div className='w-full flex flex-col items-center mt-10'>
            <h1 className='text-3xl font-bold mb-5'>{category}</h1>
            <img src={image} alt={category} className='w-64 h-64 object-cover rounded-md mb-5' />
            <p className='text-lg text-center'>This is the {category} category page.</p>
        </div>
    );
};

export default CategoryPage;
