/* eslint-disable react/no-unescaped-entities */
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
import { ImGoogle2 } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "./Narbar.css";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
  Switch,
} from "@headlessui/react";

function Navbar() {
  const [Menu1, setMenu1] = useState("hidden");
  const [Menu2, setMenu2] = useState("hidden");
  const [Menu3, setMenu3] = useState("hidden");
  const [Menu4, setMenu4] = useState("hidden");

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const OpenDialog = () => {
    setIsOpen(true);
    setIsOpen1(false);
  };
  const OpenDialog1 = () => {
    setIsOpen(false);
    setIsOpen1(true);
  };
  const CloseDialog = () => {
    setIsOpen(false);
    setIsOpen1(false);
  };

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
          <div className="w-[10%] grid justify-center font-bold">
            <Link to="/">LOGO</Link>
          </div>
          <div className="flex w-[50%] contentHide items-stretch">
            <Link
              className="cborder"
              onMouseEnter={() => {
                setMenu1("block");
                setShow1(true);
              }}
              onMouseLeave={() => {
                setMenu1("hidden");
                setShow1(false);
              }}
            >
              <div className="py-6 px-11">Demo</div>
            </Link>
            <Link
              className="cborder"
              onMouseEnter={() => {
                setMenu2("block");
                setShow2(true);
              }}
              onMouseLeave={() => {
                setMenu2("hidden");
                setShow2(false);
              }}
            >
              <div className="py-6 px-11">Mens</div>
            </Link>
            <Link
              className="cborder"
              onMouseEnter={() => {
                setMenu3("block");
                setShow3(true);
              }}
              onMouseLeave={() => {
                setMenu3("hidden");
                setShow3(false);
              }}
            >
              <div className="py-6 px-11">Womens</div>
            </Link>
            <Link
              className="cborder"
              onMouseEnter={() => {
                setMenu4("block");
                setShow4(true);
              }}
              onMouseLeave={() => {
                setMenu4("hidden");
                setShow4(false);
              }}
            >
              <div className="py-6 px-11">Pages</div>
            </Link>
          </div>
          <div className="w-[40%] flex justify-around items-center">
            <Dropdown />
            <div className="w-[30%] flex justify-around contentHide">
              <IconContext.Provider
                value={{ className: "shared-class", size: 25 }}
              >
                <Link>
                  <IoSearch />
                </Link>
                <button onClick={OpenDialog} className="font-semibold">
                  Sign In
                </button>
                <Link to="/cart">
                  <FiShoppingBag />
                </Link>
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>

      <Demo show={show1} CMenu={Menu1} parentCallback={callback} />
      <Mens show={show2} CMenu={Menu2} parentCallback={callback2} />
      <Womens show={show3} CMenu={Menu3} parentCallback={callback3} />
      <Pages show={show4} CMenu={Menu4} parentCallback={callback4} />

      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          open={isOpen}
          onClose={CloseDialog}
          className="fixed inset-0 z-10 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-black opacity-80" />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform scale-95"
                enterTo="opacity-100 transform scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform scale-100"
                leaveTo="opacity-0 transform scale-95"
              >
                <DialogPanel
                  style={{ width: "450px" }}
                  className="max-w-lg w-full space-y-4 border rounded-lg bg-white p-6"
                >
                  <button
                    onClick={CloseDialog}
                    className="close fixed z-10 inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-white shadow text-gray-600 transition duration-200 focus:outline-none focus:text-gray-800 focus:shadow-md hover:text-gray-800 hover:shadow-md "
                  >
                    <IoClose />
                  </button>
                  <DialogTitle className="font-bold flex justify-center text-2xl">
                    LOGO
                  </DialogTitle>
                  <Description className="flex justify-center items-center">
                    Login with your email & password
                  </Description>
                  <div className="flex flex-col space-y-3.5">
                    <div className="block">
                      <label
                        htmlFor="email"
                        className="block font-semibold text-sm leading-none mb-3 cursor-pointer text-gray-600"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="off"
                        autoCapitalize="off"
                        className="py-2 bg-white px-4 md:px-5 w-full appearance-none transition duration-150 border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 ease-in-out border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md "
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block font-semibold text-sm leading-none mb-3 cursor-pointer text-gray-600"
                      >
                        Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        className="py-2 px-4 md:px-5 w-full appearance-none text-input text-xs lg:text-sm font-body rounded-md placeholder-gray-600  transition duration-200 ease-in-out bg-white border border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                        autoComplete="off"
                        autoCapitalize="off"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center flex-shrink-0">
                        <label>
                          <Switch
                            checked={enabled}
                            onChange={setEnabled}
                            htmlFor="remember"
                            className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-[#d8d8d8] p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-black"
                          >
                            <span
                              aria-hidden="true"
                              className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
                            />
                          </Switch>
                        </label>
                        <label
                          className="flex-shrink-0 text-sm cursor-pointer text-heading ltr:pl-3 rtl:pr-3"
                          id="remember"
                        >
                          Remember Me
                        </label>
                      </div>
                      <div className="flex ltr:ml-auto rtl:mr-auto">
                        <button className="text-sm underline ltr:text-right rtl:text-left text-heading ltr:pl-3 rtl:pr-3 hover:no-underline focus:outline-none">
                          Forgot Password?
                        </button>
                      </div>
                    </div>
                    <div>
                      <button className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md  bg-heading text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-11 md:h-12 w-full mt-1.5 bg-black">
                        Login
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center relative text-sm text-heading mt-6 mb-3.5">
                    <hr className="w-full border-gray-300" />
                    <span className="absolute -top-2.5 px-2 bg-white">Or</span>
                  </div>
                  <button className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md  bg-heading text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-11 md:h-12 w-full mt-1.5 bg-black">
                    <FaFacebookSquare /> Login with Facebook
                  </button>
                  <button className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md  bg-heading text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-11 md:h-12 w-full mt-1.5 bg-black">
                    <ImGoogle2 /> Login with Google
                  </button>
                  <div className="mt-5 mb-1 text-sm text-center sm:text-base text-body">
                    Don't have any account?
                    <button
                      onClick={OpenDialog1}
                      className="text-sm font-bold underline sm:text-base text-heading hover:no-underline focus:outline-none"
                    >
                      Register
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Transition appear show={isOpen1}>
        <Dialog
          as="div"
          open={isOpen1}
          onClose={CloseDialog}
          className="fixed inset-0 z-10 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-black opacity-80" />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform scale-95"
                enterTo="opacity-100 transform scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform scale-100"
                leaveTo="opacity-0 transform scale-95"
              >
                <DialogPanel
                  style={{ width: "450px" }}
                  className="max-w-lg w-full space-y-4 border rounded-lg bg-white p-6"
                >
                  <button
                    onClick={CloseDialog}
                    className="close fixed z-10 inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-white shadow text-gray-600 transition duration-200 focus:outline-none focus:text-gray-800 focus:shadow-md hover:text-gray-800 hover:shadow-md "
                  >
                    <IoClose />
                  </button>
                  <DialogTitle className="font-bold flex justify-center text-2xl">
                    LOGO
                  </DialogTitle>
                  <Description className="flex justify-center items-center">
                    Register with your email & password
                  </Description>
                  <div className="flex flex-col space-y-3.5">
                  <div className="block">
                      <label
                        htmlFor="name"
                        className="block font-semibold text-sm leading-none mb-3 cursor-pointer text-gray-600"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        autoComplete="off"
                        autoCapitalize="off"
                        className="py-2 bg-white px-4 md:px-5 w-full appearance-none transition duration-150 border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 ease-in-out border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md "
                      />
                    </div>
                    <div className="block">
                      <label
                        htmlFor="email"
                        className="block font-semibold text-sm leading-none mb-3 cursor-pointer text-gray-600"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="off"
                        autoCapitalize="off"
                        className="py-2 bg-white px-4 md:px-5 w-full appearance-none transition duration-150 border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 ease-in-out border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md "
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block font-semibold text-sm leading-none mb-3 cursor-pointer text-gray-600"
                      >
                        Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        className="py-2 px-4 md:px-5 w-full appearance-none text-input text-xs lg:text-sm font-body rounded-md placeholder-gray-600  transition duration-200 ease-in-out bg-white border border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                        autoComplete="off"
                        autoCapitalize="off"
                      />
                    </div>
                      <div className="flex ltr:ml-auto rtl:mr-auto">
                        <button className="text-sm underline ltr:text-right rtl:text-left text-heading ltr:pl-3 rtl:pr-3 hover:no-underline focus:outline-none">
                          Forgot Password?
                        </button>
                      </div>
                    </div>
                    <div>
                      <button className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md  bg-heading text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-11 md:h-12 w-full mt-1.5 bg-black">
                        Register
                      </button>
                    </div>
                  <div className="flex flex-col items-center justify-center relative text-sm text-heading mt-6 mb-3.5">
                    <hr className="w-full border-gray-300" />
                    <span className="absolute -top-2.5 px-2 bg-white">Or</span>
                  </div>
                  <button className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md  bg-heading text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-11 md:h-12 w-full mt-1.5 bg-black">
                    <FaFacebookSquare />Login with Facebook
                  </button>
                  <button className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md  bg-heading text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-11 md:h-12 w-full mt-1.5 bg-black">
                    <ImGoogle2 /> Login with Google
                  </button>
                  <div className="mt-5 mb-1 text-sm text-center sm:text-base text-body">
                    Already have an account?
                    <button
                      onClick={OpenDialog}
                      className="text-sm font-bold underline sm:text-base text-heading hover:no-underline focus:outline-none"
                    >
                      Login
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Navbar;

