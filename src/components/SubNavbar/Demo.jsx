import { Demos } from '../subnav';
// import { useTransition, animated } from 'react-spring'
import { Link } from "react-router-dom";

  const Demo = ({CMenu, parentCallback}) => {
  return (
    <>
                <div className={`container max-w-[90%] w-[90%] mx-auto h-[480px] ${CMenu} bg-white `}
          onMouseEnter={() => parentCallback('block', true)} onMouseLeave={() => parentCallback('hidden', false)}>
            <div className='w-[418px]'>
                {Demos.map((data)=><Link to={data.url}><li className=' list-none py-0.5 font-thin hover:font-semibold' onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
                )}
            </div>
          </div>
    </>
  )
}

export default Demo;