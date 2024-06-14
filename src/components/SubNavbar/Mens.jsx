import { Link } from "react-router-dom";
import {
  FootWear,
  Gadgets,
  Jewellers,
  Lingerie,
  More,
  Sports,
  Top_wears,
  Western_wears,
} from "../subnav";
import { useTransition, animated } from "react-spring";

export const Mens = ({ show, CMenu, parentCallback }) => {
  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 300,
  });
  return (
    <>
      <div className={`${CMenu} bg-[#f9f9f9] ml-36 fixed top-20 h-[50%] z-10`}>
        {transitions(
          (styles, items) =>
            items && (
              <animated.div style={styles}>
                <div
                  className={` flex ${CMenu}`}
                  onMouseEnter={() => parentCallback("block", true)}
                  onMouseLeave={() => parentCallback("hidden", false)}
                >
                  <div>
                    <strong className=" font-semibold pl-11 pr-36 py-3 hover:bg-slate-200 px-11">Top Wears</strong>
                    <div>
                      {Top_wears.map((data) => (
                        <Link>
                          <li
                            className="list-none px-11 py-2 font-thin hover:bg-slate-200"
                            onClick={() => parentCallback("hidden", false)}
                          >
                            {data.title}
                          </li>
                        </Link>
                      ))}
                    </div>
                    <strong className=" font-semibold px-11 py-3 hover:bg-slate-200">Belt, Scarves & More</strong>
                    <br /><br/>
                    <strong className=" font-semibold px-11 py-3 hover:bg-slate-200">Watches & Wearables</strong>
                  </div>
                  <div className="bg-[#f4f4f4]">
                    <strong className=" font-semibold px-11 pr-40 py-3 hover:bg-slate-200">Western Wears</strong>
                    <div >
                      {Western_wears.map((data) => (
                        <Link>
                          <li
                            className="list-none px-11 py-2 w-[100%] font-thin hover:bg-slate-200"
                            onClick={() => parentCallback("hidden", false)}
                          >
                            {data.title}
                          </li>
                        </Link>
                      ))}
                    </div>
                    <strong  className=" font-semibold px-11 pr-52 py-3 hover:bg-slate-200">Plus Size</strong>
                    <br /><br/>
                    <strong  className=" font-semibold px-11 py-3 pr-28 hover:bg-slate-200">Sunglasses & Frames</strong>
                  </div>
                  <div>
                    <strong  className=" font-semibold px-11 py-3  pr-36 hover:bg-slate-200">FootWear</strong>
                    <div>
                      {FootWear.map((data) => (
                        <Link>
                          <li
                            className="list-none px-11 py-2 w-[100%] font-thin hover:bg-slate-200"
                            onClick={() => parentCallback("hidden", false)}
                          >
                            {data.title}
                          </li>
                        </Link>
                      ))}
                    </div>
                    <strong  className=" font-semibold px-12 py-3 hover:bg-slate-200">Sports & Active Wears</strong>
                    <div>
                      {Sports.map((data) => (
                        <Link>
                          <li
                            className="list-none px-11 py-2 w-[100%] font-thin hover:bg-slate-200"
                            onClick={() => parentCallback("hidden", false)}
                          >
                            {data.title}
                          </li>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className=" bg-[#f4f4f4]">
                    <strong  className=" font-semibold px-12 py-3 hover:bg-slate-200">Lingerie & Sleepwear</strong>
                    <div>
                      {Lingerie.map((data) => (
                        <Link>
                          <li
                            className="list-none px-11 py-2 w-[100%] font-thin hover:bg-slate-200"
                            onClick={() => parentCallback("hidden", false)}
                          >
                            {data.title}
                          </li>
                        </Link>
                      ))}
                    </div>
                    <strong  className=" font-semibold px-12 py-3 hover:bg-slate-200">Belt, Scarves & More</strong>
                    <div>
                      {More.map((data) => (
                        <Link>
                          <li
                            className="list-none px-11 py-2 w-[100%] font-thin hover:bg-slate-200"
                            onClick={() => parentCallback("hidden", false)}
                          >
                            {data.title}
                          </li>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <strong  className=" font-semibold px-12 py-3 pr-36 hover:bg-slate-200">Gadgets</strong>
                    <div>
                      {Gadgets.map((data) => (
                        <Link>
                          <li
                            className="list-none px-11 py-2 w-[100%] font-thin hover:bg-slate-200"
                            onClick={() => parentCallback("hidden", false)}
                          >
                            {data.title}
                          </li>
                        </Link>
                      ))}
                    </div>
                    <strong className=" font-semibold px-12 pr-36 py-3 hover:bg-slate-200">Jewellers</strong>
                    <div>
                      {Jewellers.map((data) => (
                        <Link>
                          <li
                            className="list-none px-11 py-2 w-[100%] font-thin hover:bg-slate-200"
                            onClick={() => parentCallback("hidden", false)}
                          >
                            {data.title}
                          </li>
                        </Link>
                      ))}
                    </div>
                    <strong  className=" font-semibold px-12 pr-36 py-3 hover:bg-slate-200">Backpacks</strong>
                    <br /><br/>
                    <strong className=" font-semibold px-12 pr-20 py-3 hover:bg-slate-200" >Handbags & Wallet</strong>
                  </div>
                </div>
              </animated.div>
            )
        )}
      </div>
    </>
  );
};
