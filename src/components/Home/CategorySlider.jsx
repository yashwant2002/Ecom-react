import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import bags from '../Image/bags.jpg';
import kid from '../Image/kid.jpg';
import woman from '../Image/woman.jpg';
import man from '../Image/man.jpg';
import sports from '../Image/sports.jpg';
import sunglass from '../Image/sunglass.jpg';
import watch from '../Image/watch.jpg';
import sneakers from '../Image/sneakers.jpg';

const CategorySlider = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3
        }
    };

    const category = [
        {
            title: 'Man',
            url: '/category/Man',
            image: man
        },
        {
            title: 'Woman',
            url: '/category/Woman',
            image: woman
        },
        {
            title: 'Kids',
            url: '/category/Kids',
            image: kid
        },
        {
            title: 'Watch',
            url: '/category/Watch',
            image: watch
        },
        {
            title: 'Sports',
            url: '/category/Sports',
            image: sports
        },
        {
            title: 'Sunglasses',
            url: '/category/Sunglasses',
            image: sunglass
        },
        {
            title: 'Bags',
            url: '/category/Bags',
            image: bags
        },
        {
            title: 'Sneakers',
            url: '/category/Sneakers',
            image: sneakers
        },
    ];

    return (
        <div className='w-[90%] mx-auto'>
            <h1 className='font-bold text-xl mb-5 lg:text-3xl'>Shop By Category</h1>
            <Carousel responsive={responsive} ssr={true} infinite={true}>
                {category.map((data, index) => (
                    <div key={index} className='flex flex-col items-center p-2 transition-transform duration-500 ease-in-out transform hover:scale-110'>
                        <Link to={data.url} className='block'>
                            <img src={data.image} alt={data.title} className='lg:w-36 lg:h-36 w-[120px] h-[120px] object-cover rounded-md' />
                        </Link>
                        <p className='text-center mt-2'>{data.title}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default CategorySlider;
