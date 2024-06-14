import { Demos } from '../subnav';
import { useTransition, animated } from 'react-spring'
import { Link } from "react-router-dom";

  const Demo = ({show,CMenu, parentCallback}) => {
    const transitions = useTransition(show, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      delay: 300,
      
    })
  return (
    <>
        <div className={`${CMenu} w-[17%] bg-[#f9f9f9] ml-36 fixed top-20 z-10`}>
          {
            transitions((styles, items)=> items && <animated.div style={styles}>
            <div className={` container max-w-[100%]  w-[100%]  h-[50%] ${CMenu}`}
          onMouseEnter={() => parentCallback('block', true)} onMouseLeave={() => parentCallback('hidden', false)}>
            <div className='w-[100%]  py-3'>
                {Demos.map((data)=><Link to={data.url}><li className=' px-7 list-none py-2 w-[100%] font-thin hover:bg-slate-200' onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>
                )}
            </div>
          </div>
            </animated.div>)
          }
        </div>
    </>
  )
}

export default Demo;