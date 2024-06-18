import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { IconContext } from "react-icons";
import Dropdown from "./Dropdown";
import Demo from "./SubNavbar/Demo";
import { Mens } from "./SubNavbar/Mens";
import { Womens } from "./SubNavbar/Womens";
import { Pages } from "./SubNavbar/Pages";
import "./Narbar.css";

function Navbar() {
  const [Menu1, setMenu1] = useState('hidden');
  const [Menu2, setMenu2] = useState('hidden');
  const [Menu3, setMenu3] = useState('hidden');
  const [Menu4, setMenu4] = useState('hidden');

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  const callback = useCallback((Menu, v) => {
    setMenu1(Menu);
    setShow1(v);
  }, []);

  const callback2 = useCallback((Menu, v) => {
    setMenu2(Menu);
    setShow2(v);
  }, []);

  const callback3 = useCallback((Menu, v) => {
    setMenu3(Menu);
    setShow3(v);
  }, []);

  const callback4 = useCallback((Menu, v) => {
    setMenu4(Menu);
    setShow4(v);
  }, []);

  return (
    <>
      <div>
        <div className="bg-white w-full h-[80px] flex justify-around sticky items-center z-10 shadow-lg">
          <div className="w-[10%] grid justify-center font-bold">LOGO</div>
          <div className="flex w-[50%] contentHide items-stretch">
            <Link
              className="cborder"
              onMouseEnter={() => { setMenu1('block'); setShow1(true); }}
              onMouseLeave={() => { setMenu1('hidden'); setShow1(false); }}
            >
              <div className="py-6 px-11">Demo</div>
            </Link>
            <Link
              className="cborder"
              onMouseEnter={() => { setMenu2('block'); setShow2(true); }}
              onMouseLeave={() => { setMenu2('hidden'); setShow2(false); }}
            >
              <div className="py-6 px-11">Mens</div>
            </Link>
            <Link
              className="cborder"
              onMouseEnter={() => { setMenu3('block'); setShow3(true); }}
              onMouseLeave={() => { setMenu3('hidden'); setShow3(false); }}
            >
              <div className="py-6 px-11">Womans</div>
            </Link>
            <Link
              className="cborder"
              onMouseEnter={() => { setMenu4('block'); setShow4(true); }}
              onMouseLeave={() => { setMenu4('hidden'); setShow4(false); }}
            >
              <div className="py-6 px-11">Pages</div>
            </Link>
          </div>
          <div className="w-[40%] flex justify-around items-center">
            <Dropdown />
            <div className="w-[30%] flex justify-around contentHide">
              <IconContext.Provider value={{ className: "shared-class", size: 25 }}>
                <Link><IoSearch /></Link>
                <Link className="font-semibold">Sign In</Link>
                <Link ><FiShoppingBag /></Link>
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>

      <Demo show={show1} CMenu={Menu1} parentCallback={callback} />
      <Mens show={show2} CMenu={Menu2} parentCallback={callback2} />
      <Womens show={show3} CMenu={Menu3} parentCallback={callback3} />
      <Pages show={show4} CMenu={Menu4} parentCallback={callback4} />
    </>
  );
}

export default Navbar;
