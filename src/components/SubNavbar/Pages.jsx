import { Link } from 'react-router-dom';
import { Page } from '../subnav';

export const Pages = ({CMenu, parentCallback}) => {
  return (
    <>
        <div className={`${CMenu}`} onMouseEnter={()=>parentCallback('block',true)}
        onMouseLeave={()=>parentCallback('hidden', false)}>
            {Page.map((data)=><Link><li onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>)}
        </div>
    </>
  )
}
