import { Link } from "react-router-dom"
import { FootWear, Gadgets, Jewellers, Lingerie, More, Sports, Top_wears, Western_wears } from "../subnav"
import { data } from "autoprefixer"

export const Mens = ({CMenu, parentCallback}) => {
  return (
    <>
        <div className={` flex w-auto ${CMenu}`} onMouseEnter={()=> parentCallback('block', true)} onMouseLeave={()=> parentCallback('hidden', false)}>
            <div>
                <strong>Top Wears</strong>
                <div>
                    {Top_wears.map((data)=><Link><li onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>)}
                </div>
                <strong>Belt, Scarves & More</strong><br/>
                <strong>Watches & Wearables</strong>
            </div>
            <div>
                <strong>Western Wears</strong>
                <div>
                    {Western_wears.map((data)=><Link><li onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>)}
                </div>
                <strong>Plus Size</strong><br/>
                <strong>Sunglasses & Frames</strong>
            </div>
            <div>
                <strong>FootWear</strong>
                <div>
                    {FootWear.map((data)=><Link><li onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>)}
                </div>
                <strong>Sports & Active Wears</strong>
                <div>
                    {Sports.map((data)=><Link><li onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>)}
                </div>
            </div>
            <div>
                <strong>Lingerie & Sleepwear</strong>
                <div>
                    {Lingerie.map((data)=><Link><li onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>)}
                </div>
                <strong>Belt, Scarves & More</strong>
                <div>
                    {More.map((data)=><Link><li onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>)}
                </div>
            </div>
            <div>
                <strong>Gadgets</strong>
                <div>
                    {Gadgets.map((data)=><Link><li onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>)}
                </div>
                <strong>Jewellers</strong>
                <div>
                    {Jewellers.map((data)=><Link><li onClick={()=> parentCallback('hidden', false)}>{data.title}</li></Link>)}
                </div>
                <strong>Backpacks</strong><br/>
                <strong>Handbags & Wallet</strong>
            </div>
        </div>
    </>
  )
}
