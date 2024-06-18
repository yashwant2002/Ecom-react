import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import slide_1 from '../Image/slide-1.jpg'
import slide_2 from '../Image/slide-2.jpg'
import slide_3 from '../Image/slide-3.jpg'

export const SlideImageBar = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <div className='w-[95%]  my-0 mx-auto'>
       <Carousel  infinite={true}
         transitionDuration={500}
         ssr={true} 
         autoPlaySpeed={1000}
        draggable={false}
       showDots={true}
       keyBoardControl={true}
        customTransition="all .5"
       containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
        responsive={responsive}>
        <div><img className='w-[100%] h-13 lg:h-72 round' src={slide_1}/></div>
        <div><img className='w-[100%] h-13 lg:h-72 round' src={slide_3}/></div>
        <div><img className='w-[100%] h-13 lg:h-72 round' src={slide_1}/></div>
        <div><img className='w-[100%] h-13 lg:h-72 round' src={slide_3}/></div>
       </Carousel>
    </div>
  )
}
