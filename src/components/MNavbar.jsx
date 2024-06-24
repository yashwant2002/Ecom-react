import React, { useState } from "react";
import { IconContext } from "react-icons";
import { CgMenuLeft } from "react-icons/cg";
import { IoClose, IoSearch } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { FiShoppingBag } from "react-icons/fi";
import { FaFacebookSquare, FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    Description,
    Dialog,
    DialogPanel,
    DialogTitle,
    Transition,
    TransitionChild,
    Switch,
  } from "@headlessui/react";
import { ImGoogle2 } from "react-icons/im";

export const MNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

    const products = useSelector((state) => state.cart);
    const dispatch = useDispatch();

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

      function closeModal() {
        setIsOpen2(false);
      }
    
      function openModal() {
        setIsOpen2(true);
      }
      function openCartModal() {
        setIsCartOpen(true);
      }
    
      function closeCartModal() {
        setIsCartOpen(false);
      }
  return (
    <>
    <IconContext.Provider value={{ className: "shared-class", size: 25 }}>
      <div className="bg-white shadow-2xl fixed bottom-0 items-center justify-between px-5 w-full h-14 z-10 flex">
        <div>
          <button>
            <CgMenuLeft />
          </button>
        </div>
        <div>
            <button onClick={openModal}><IoSearch/></button>
        </div>
        <div>
            <Link to='/'><GoHome /></Link>
        </div>
        <div>
            <button className="relative" onClick={openCartModal}><FiShoppingBag/>
            <div className=" rounded-full bg-purple-700 w-4 h-4 -top-1 -right-1  text-white text-[10px] absolute">
                    {products.length}
                  </div></button>
        </div>
        <div>
            <button onClick={OpenDialog} ><FaRegUser /></button>
        </div>
      </div>
    </IconContext.Provider>

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
                    <IoClose/>
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
      {/* ------------------------------------------Sign Up --------------------------------------- */}
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
                    <FaFacebookSquare />
                    Login with Facebook
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
      {/* ---------------------------------------Search ------------------------------------------- */}
      <Transition appear show={isOpen2}>
        <Dialog
          as="div"
          className="fixed flex justify-center items-center inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black opacity-30" />
            </TransitionChild>
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="flex  max-w-md my-24 px-4 h-16 overflow-hidden text-left items-center transition-all transform bg-white shadow-xl rounded-xl">
                <DialogTitle
                  as="h3"
                  className="text-lg mr-4 font-medium leading-6"
                >
                  <IoSearch />
                </DialogTitle>
                <div>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full p-2 rounded-md outline-none"
                  />
                </div>
                <div>
                  <button
                    type="button"
                    className="flex justify-center px-4"
                    onClick={closeModal}
                  >
                    <IoClose />
                  </button>
                </div>
              </div>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
      {/* -------------------------------Add to Cart -------------------------------- */}
      <Transition appear show={isCartOpen}>
        <Dialog
          as="div"
          open={isCartOpen}
          onClose={closeCartModal}
          className="fixed inset-0 z-10 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-black opacity-80" />
            <div className="fixed inset-0 flex w-screen flex-row-reverse h-full p-4">
              <TransitionChild
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-x-full opacity-0"
                enterTo="translate-x-0 opacity-100"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0 opacity-100"
                leaveTo="translate-x-full opacity-0"
              >
                <DialogPanel
                  style={{ width: "550px" }}
                  className="max-w-lg w-full  border rounded-lg bg-white p-6"
                >
                  <button
                    onClick={closeCartModal}
                    className=" fixed z-10 inline-flex right-7 items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-white transition duration-200"
                  >
                    <IoClose />
                  </button>
                  <DialogTitle className="font-bold text-2xl">
                    Shopping Cart
                  </DialogTitle>
                  <hr className="my-8 border-t border-t-gray-200" />
                  <div className="w-full h-[470px] lg:h-[550px] overflow-y-scroll mt-8">
                    {products && products.length > 0 ? (
                      products.map((product) => (
                        <li
                          key={product.id}
                          className="flex flex-col justify-between space-x-5 py-7 md:flex-row"
                        >
                          <div className="flex flex-1 items-stretch">
                            <div className="flex-shrink-0">
                              <img
                                className="h-20 w-20 rounded-lg border border-gray-200 object-contain"
                                src={product.image}
                                alt={product.title}
                              />
                            </div>
                            <div className="ml-5 flex flex-col justify-between">
                              <div className="flex-1">
                                <p className="text-sm font-bold text-gray-900">
                                  {product.title}
                                </p>
                                <button onClick={()=>handleRemoveCart(product.id)}><IoClose/></button>
                              </div>
                            </div>
                          </div>
                          <div className="ml-auto flex flex-col items-end justify-between">
                            <p className="text-right text-sm pr-5 font-bold text-gray-900">
                              ${product.price}
                            </p>
                          </div>
                        </li>
                      ))
                    ) : (
                      <div className="grid justify-center">
                        <svg
                          width="180"
                          height="309.722"
                          viewBox="0 0 180 309.722"
                        >
                          <g
                            id="no_cart_in_bag"
                            data-name="no cart in bag"
                            transform="translate(-988 -7673)"
                          >
                            <g
                              id="no_cart"
                              data-name="no cart"
                              transform="translate(988 7673)"
                            >
                              <g
                                id="Group_5970"
                                data-name="Group 5970"
                                transform="translate(0 0)"
                              >
                                <g
                                  id="Group_5967"
                                  data-name="Group 5967"
                                  transform="translate(17.408 92.119)"
                                >
                                  <path
                                    id="Path_17743"
                                    data-name="Path 17743"
                                    d="M405.506,794.581l63.621-36.762L418.2,724.274Z"
                                    transform="translate(-323.428 -576.978)"
                                    fill="#ba8064"
                                  ></path>
                                  <path
                                    id="Path_17744"
                                    data-name="Path 17744"
                                    d="M135.711,140.727l32.918-.12,1.287-20.225,79.451,45.843-34.42,1.084v19.165Z"
                                    transform="translate(-118.988 -119.373)"
                                    fill="#dba480"
                                  ></path>
                                  <path
                                    id="Path_17745"
                                    data-name="Path 17745"
                                    d="M314.4,206.341,272,124.761l-2.279,22.008,1.4,59.572Z"
                                    transform="translate(-220.537 -122.691)"
                                    fill="#460100"
                                    opacity="0.1"
                                  ></path>
                                  <path
                                    id="Path_17746"
                                    data-name="Path 17746"
                                    d="M141.237,253.056l-10.26-47.388,34.59-.126v37.243Z"
                                    transform="translate(-115.402 -183.904)"
                                    fill="#995b47"
                                  ></path>
                                  <path
                                    id="Path_17747"
                                    data-name="Path 17747"
                                    d="M511.029,445.295l-49.136-22.179L460.8,385.489l1.089-72.515,35.954-1.133Z"
                                    transform="translate(-365.33 -264.454)"
                                    fill="#a96e56"
                                  ></path>
                                  <path
                                    id="Path_17748"
                                    data-name="Path 17748"
                                    d="M148.755,398.756l9.58-70.307,4.9-79.149L81.161,201.911,66.677,351.368Z"
                                    transform="translate(-66.677 -181.153)"
                                    fill="#dba480"
                                  ></path>
                                  <path
                                    id="Path_17749"
                                    data-name="Path 17749"
                                    d="M349.459,429.379c-.415,1.942-2.182,2.6-3.948,1.46a5.753,5.753,0,0,1-2.446-5.572c.414-1.942,2.182-2.6,3.948-1.46A5.753,5.753,0,0,1,349.459,429.379Z"
                                    transform="translate(-276.046 -348.874)"
                                    fill="#67251d"
                                  ></path>
                                  <path
                                    id="Path_17750"
                                    data-name="Path 17750"
                                    d="M209.819,348.753c-.415,1.942-2.182,2.6-3.948,1.46a5.753,5.753,0,0,1-2.446-5.572c.415-1.942,2.182-2.6,3.948-1.46A5.753,5.753,0,0,1,209.819,348.753Z"
                                    transform="translate(-170.233 -287.779)"
                                    fill="#67251d"
                                  ></path>
                                  <g
                                    id="Group_5965"
                                    data-name="Group 5965"
                                    transform="translate(31.503 60.166)"
                                    opacity="0.2"
                                  >
                                    <path
                                      id="Path_17751"
                                      data-name="Path 17751"
                                      d="M219.35,441.507a16.861,16.861,0,0,1-8.439-2.272A28.35,28.35,0,0,1,196.858,412l4.383-45.226a2.414,2.414,0,0,1,4.806.467l-4.383,45.226a23.483,23.483,0,0,0,11.608,22.554,12.055,12.055,0,0,0,18.081-9.247l3.819-39.41a2.414,2.414,0,0,1,4.806.467l-3.819,39.41a16.912,16.912,0,0,1-16.809,15.266Z"
                                      transform="translate(-196.727 -364.591)"
                                      fill="#460100"
                                    ></path>
                                  </g>
                                  <path
                                    id="Path_17752"
                                    data-name="Path 17752"
                                    d="M162.373,116.218,161.06,136.85l-34.59.126,82.078,47.388V164.738l35.954-1.132Zm44.968,47.351v18.7l-76.395-44.106,31.247-.113,1.261-19.819,76.774,44.3Z"
                                    transform="translate(-111.986 -116.218)"
                                    fill="#fcc89d"
                                  ></path>
                                  <g
                                    id="Group_5966"
                                    data-name="Group 5966"
                                    transform="translate(29.24 57.45)"
                                  >
                                    <path
                                      id="Path_17753"
                                      data-name="Path 17753"
                                      d="M210.007,430.3a16.864,16.864,0,0,1-8.438-2.271,28.35,28.35,0,0,1-14.054-27.235l4.383-45.226a2.414,2.414,0,0,1,4.806.467l-4.383,45.226a23.483,23.483,0,0,0,11.608,22.554,12.055,12.055,0,0,0,18.081-9.247l3.819-39.41a2.414,2.414,0,0,1,4.806.467l-3.819,39.41A16.912,16.912,0,0,1,210.007,430.3Z"
                                      transform="translate(-187.384 -353.38)"
                                      fill="#995b47"
                                    ></path>
                                  </g>
                                  <path
                                    id="Path_17754"
                                    data-name="Path 17754"
                                    d="M405.506,546.991,419.99,488.05V397.534Z"
                                    transform="translate(-323.428 -329.388)"
                                    fill="#995b47"
                                  ></path>
                                </g>
                                <g
                                  id="Group_5968"
                                  data-name="Group 5968"
                                  transform="translate(0 0)"
                                >
                                  <path
                                    id="Path_17755"
                                    data-name="Path 17755"
                                    d="M394.573,120.6c-.142-.5.244-.855.5-1.088a1.4,1.4,0,0,0,.271-.293,0,0,0,0,0,0,0,1.39,1.39,0,0,0-.384-.107c-.34-.065-.853-.162-1-.665s.244-.855.5-1.088a1.39,1.39,0,0,0,.271-.293,0,0,0,0,0,0,0,1.4,1.4,0,0,0-.384-.107c-.34-.064-.853-.162-1-.664s.244-.855.5-1.088l.009-.008a.9.9,0,0,0,.259-.482.391.391,0,0,1,.276-.292.41.41,0,0,1,.5.316,1.122,1.122,0,0,1-.51,1.046,1.4,1.4,0,0,0-.271.292,0,0,0,0,0,0,0,1.4,1.4,0,0,0,.384.107c.34.065.853.162,1,.665s-.244.855-.5,1.088a1.4,1.4,0,0,0-.271.293,0,0,0,0,0,0,0,1.391,1.391,0,0,0,.384.107c.34.065.853.162,1,.665s-.244.855-.5,1.088a1.257,1.257,0,0,0-.273.3,0,0,0,0,0,0,0,1.641,1.641,0,0,0,.387.1c.331.063.826.157.983.625a.416.416,0,0,1-.21.507.392.392,0,0,1-.456-.109.789.789,0,0,0-.464-.253h0C395.229,121.2,394.716,121.1,394.573,120.6Z"
                                    transform="translate(-349.075 -37.518)"
                                    fill="#212121"
                                    opacity="0.3"
                                  ></path>
                                  <path
                                    id="Path_17765"
                                    data-name="Path 17765"
                                    d="M395.468,120.6c.142-.5-.244-.855-.5-1.088a1.4,1.4,0,0,1-.271-.293,0,0,0,0,1,0,0,1.39,1.39,0,0,1,.384-.107c.34-.065.853-.162,1-.665s-.244-.855-.5-1.088a1.389,1.389,0,0,1-.271-.293,0,0,0,0,1,0,0,1.4,1.4,0,0,1,.384-.107c.34-.064.853-.162,1-.664s-.244-.855-.5-1.088l-.009-.008a.9.9,0,0,1-.259-.482.391.391,0,0,0-.276-.292.41.41,0,0,0-.5.316,1.122,1.122,0,0,0,.51,1.046,1.4,1.4,0,0,1,.271.292,0,0,0,0,1,0,0,1.4,1.4,0,0,1-.384.107c-.34.065-.853.162-1,.664s.244.855.5,1.088a1.4,1.4,0,0,1,.271.293,0,0,0,0,1,0,0,1.39,1.39,0,0,1-.384.107c-.34.065-.853.162-1,.665s.244.855.5,1.088a1.257,1.257,0,0,1,.273.3,0,0,0,0,1,0,0,1.641,1.641,0,0,1-.387.1c-.331.063-.826.157-.983.625a.416.416,0,0,0,.21.507.392.392,0,0,0,.456-.109.789.789,0,0,1,.464-.253h0C394.812,121.2,395.326,121.1,395.468,120.6Z"
                                    transform="translate(-262.76 -23.736)"
                                    fill="#212121"
                                    opacity="0.3"
                                  ></path>
                                  <path
                                    id="Path_17756"
                                    data-name="Path 17756"
                                    d="M375.447,179.277a2.539,2.539,0,1,1,3.346,1.3A2.542,2.542,0,0,1,375.447,179.277Zm3.737-1.643a1.543,1.543,0,1,0-.791,2.034A1.545,1.545,0,0,0,379.184,177.634Z"
                                    transform="translate(-375.232 -52.408)"
                                    fill="#212121"
                                    opacity="0.3"
                                  ></path>
                                  <path
                                    id="Path_17764"
                                    data-name="Path 17764"
                                    d="M375.447,179.277a2.539,2.539,0,1,1,3.346,1.3A2.542,2.542,0,0,1,375.447,179.277Zm3.737-1.643a1.543,1.543,0,1,0-.791,2.034A1.545,1.545,0,0,0,379.184,177.634Z"
                                    transform="translate(-333.888 -175.716)"
                                    fill="#212121"
                                    opacity="0.3"
                                  ></path>
                                  <path
                                    id="Path_17757"
                                    data-name="Path 17757"
                                    d="M350.086,264.8a1.852,1.852,0,0,1-2.682-2.547l-.868-.823a3.047,3.047,0,0,0,4.417,4.194Z"
                                    transform="translate(-253.642 -206.302)"
                                    fill="#212121"
                                    opacity="0.3"
                                  ></path>
                                  <path
                                    id="Path_17766"
                                    data-name="Path 17766"
                                    d="M346.628,264.8a1.852,1.852,0,0,0,2.682-2.547l.867-.823a3.047,3.047,0,0,1-4.417,4.194Z"
                                    transform="translate(-170.953 -110.557)"
                                    fill="#212121"
                                    opacity="0.15"
                                  ></path>
                                  <path
                                    id="Union_11"
                                    data-name="Union 11"
                                    d="M2.059,6.97l.989-3.048L0,2.933.283,2.06l3.049.989L4.321,0,5.2.284l-.99,3.048,3.047.989L6.97,5.2l-3.048-.99-.99,3.049Z"
                                    transform="translate(6.528 48.598)"
                                    fill="#212121"
                                    stroke="rgba(0,0,0,0)"
                                    strokeMiterlimit="10"
                                    strokeWidth="1"
                                    opacity="0.3"
                                  ></path>
                                  <path
                                    id="Union_13"
                                    data-name="Union 13"
                                    d="M2.059,6.97l.989-3.048L0,2.933.283,2.06l3.049.989L4.321,0,5.2.284l-.99,3.048,3.047.989L6.97,5.2l-3.048-.99-.99,3.049Z"
                                    transform="translate(94.294 121.132)"
                                    fill="#212121"
                                    stroke="rgba(0,0,0,0)"
                                    strokeMiterlimit="10"
                                    strokeWidth="1"
                                    opacity="0.3"
                                  ></path>
                                  <path
                                    id="Union_12"
                                    data-name="Union 12"
                                    d="M1.235,4.182l.593-1.829L0,1.759l.17-.524L2,1.829,2.592,0l.525.17L2.523,2l1.828.594-.17.523L2.353,2.523,1.759,4.352Z"
                                    transform="translate(107.351 6.528)"
                                    fill="#212121"
                                    stroke="rgba(0,0,0,0)"
                                    strokeMiterlimit="10"
                                    strokeWidth="1"
                                    opacity="0.3"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                        <p className=" font-bold text-2xl">
                          Your cart is empty
                        </p>
                      </div>
                    )}
                    <hr className="my-8 border-t border-t-gray-200" />
                  </div>
                  <div>
                    <button className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-between border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md  bg-heading text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-11 md:h-12 w-full mt-2 bg-black">
                      Proceed To Checkout
                      <span className="pl-7 border-l-2">${products.reduce((total, product) => total + product.price, 0)}</span>
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
};
