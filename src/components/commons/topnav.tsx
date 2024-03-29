import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import * as Icon from "react-feather";
import { IoMdLogOut } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import { AiOutlineUser, AiOutlineSetting } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { BiLockAlt } from "react-icons/bi";

import SimpleBarReact from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { useAuthContext } from "@/context/auth-context";
import { AuthContextTypes } from "@/utils/types/types";
import toast from "react-hot-toast";

export default function Topnav({ setToggle, toggle }) {
  const [country, setCountry] = useState(false);
  const [cart, setCart] = useState(false);
  const [notification, setNotification] = useState(false);
  const [user, setUser] = useState(false);
  const { state, dispatch } = useAuthContext();

  // useEffect(() => {
  //   let countries = () => {
  //     setCountry(false);
  //   };
  //   let shopingCart = () => {
  //     setCart(false);
  //   };
  //   let notificationToggle = () => {
  //     setNotification(false);
  //   };
  //   let userData = () => {
  //     setUser(false);
  //   };
  //   document.addEventListener("mousedown", countries);
  //   document.addEventListener("mousedown", shopingCart);
  //   document.addEventListener("mousedown", notificationToggle);
  //   document.addEventListener("mousedown", userData);
  // }, []);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const handleLogout = () => {
    toast.success('Sesion cerrada correctamente!')
    dispatch({
      type: AuthContextTypes.LOGOUT
    })
    window.localStorage.removeItem('auth-token')
    window.sessionStorage.removeItem('auth-token')
  }
  return (
    <>
      <div className="top-header">
        <div className="header-bar flex justify-between">
          <div className="flex items-center space-x-1">
            <a
              id="close-sidebar"
              className="h-8 w-8 cursor-pointer inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-full"
              type="button"
            >
              <Icon.Menu className="h-4 w-4" onClick={toggleHandler} />
            </a>

            {/* <div className="ps-1.5">
                            <div className="form-icon relative sm:block hidden">
                                <LuSearch className="absolute top-1/2 -translate-y-1/2 start-3"/>
                                <input type="text" className="form-input w-56 ps-9 py-2 px-3 h-8 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-3xl outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 bg-white" name="s" id="searchItem" placeholder="Search..."/>
                            </div>
                        </div> */}
          </div>

          <ul className="list-none mb-0 space-x-1">
            {/* <li className="dropdown inline-block relative">
                            <button onClick={() => setCountry(!country)} className="dropdown-toggle h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-full" type="button">
                                <Image src='/images/flags/usa.png' width={30} height={30} alt=""/>
                            </button>
                            <div className={`dropdown-menu absolute start-0 m-0 mt-4 z-10 w-36 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 ${country ? "" : 'hidden'}`}>
                                <ul className="list-none py-2 text-start">
                                    <li className="my-1">
                                        <Link href="" className="flex items-center text-[15px] font-semibold py-1.5 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><Image src='/images/flags/germany.png'  width={24} height={24} className="h-6 w-6 rounded-full me-2 shadow dark:shadow-gray-700" alt=""/> German</Link>
                                    </li>
                                    <li className="my-1">
                                        <Link href="" className="flex items-center text-[15px] font-semibold py-1.5 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><Image src='/images/flags/italy.png' width={24} height={24} className="h-6 w-6 rounded-full me-2 shadow dark:shadow-gray-700" alt=""/> Italian</Link>
                                    </li>
                                    <li className="my-1">
                                        <Link href="" className="flex items-center text-[15px] font-semibold py-1.5 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><Image src='/images/flags/russia.png' width={24} height={24} className="h-6 w-6 rounded-full me-2 shadow dark:shadow-gray-700" alt=""/> Russian</Link>
                                    </li>
                                    <li className="my-1">
                                        <Link href="" className="flex items-center text-[15px] font-semibold py-1.5 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><Image src='/images/flags/spain.png' width={24} height={24} className="h-6 w-6 rounded-full me-2 shadow dark:shadow-gray-700" alt=""/> Spanish</Link>
                                    </li>
                                </ul>
                            </div>
                        </li> */}

            {/* <li className="dropdown inline-block relative">
                            <button onClick = {()=> setCart(!cart)} className="dropdown-toggle h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-full" type="button">
                                <Icon.ShoppingCart className="h-4 w-4"/>
                                <span className="absolute top-0 end-0 flex items-center justify-center bg-emerald-600 text-white text-[10px] font-bold rounded-full w-2 h-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-emerald-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                            </button>
                        
                            <div className={`dropdown-menu absolute end-0 m-0 mt-4 z-10 w-60 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-700  ${cart ? "" : 'hidden'}`}>
                                <ul className="py-3 text-start">
                                    <li>
                                        <Link href="#" className="flex items-center justify-between py-1.5 px-4">
                                            <span className="flex items-center">
                                                <Image src='/images/shop/items/s1.jpg' width={36} height={45} className="rounded shadow dark:shadow-gray-700 w-9" alt=""/>
                                                <span className="ms-3">
                                                    <span className="block font-semibold">T-shirt (M)</span>
                                                    <span className="block text-sm text-slate-400">$320 X 2</span>
                                                </span>
                                            </span>

                                            <span className="font-semibold">$640</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="#" className="flex items-center justify-between py-1.5 px-4">
                                            <span className="flex items-center">
                                                <Image src='/images/shop/items/s2.jpg' width={36} height={45} className="rounded shadow dark:shadow-gray-700 w-9" alt=""/>
                                                <span className="ms-3">
                                                    <span className="block font-semibold">Bag</span>
                                                    <span className="block text-sm text-slate-400">$50 X 5</span>
                                                </span>
                                            </span>

                                            <span className="font-semibold">$250</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="#" className="flex items-center justify-between py-1.5 px-4">
                                            <span className="flex items-center">
                                                <Image src='/images/shop/items/s3.jpg' width={36} height={45} className="rounded shadow dark:shadow-gray-700 w-9" alt=""/>
                                                <span className="ms-3">
                                                    <span className="block font-semibold">Watch (Men)</span>
                                                    <span className="block text-sm text-slate-400">$800 X 1</span>
                                                </span>
                                            </span>

                                            <span className="font-semibold">$800</span>
                                        </Link>
                                    </li>

                                    <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>

                                    <li className="flex items-center justify-between py-1.5 px-4">
                                        <h6 className="font-semibold mb-0">Total($):</h6>
                                        <h6 className="font-semibold mb-0">$1690</h6>
                                    </li>

                                    <li className="py-1.5 px-4 space-x-1">
                                        <Link href="#" className="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-md bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white">View Cart</Link>
                                        <Link href="#" className="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-md bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white">Checkout</Link>
                                        <p className="text-sm text-slate-400 mt-1">*T&C Apply</p>
                                    </li>
            
                                </ul>
                            </div>
                        </li> */}

            {/* <li className="dropdown inline-block relative">
                            <button onClick={()=>setNotification(!notification)} className="dropdown-toggle h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-full" type="button">
                                <Icon.Bell className="h-4 w-4"/>
                                <span className="absolute top-0 end-0 flex items-center justify-center bg-red-600 text-white text-[10px] font-bold rounded-full w-2 h-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-red-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                            </button>
                        
                            <div className={`dropdown-menu absolute end-0 m-0 mt-4 z-10 w-64 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 ${notification ? '' : 'hidden'}`} >
                                <span className="px-4 py-4 flex justify-between">
                                    <span className="font-semibold">Notifications</span>
                                    <span className="flex items-center justify-center bg-red-600/20 text-red-600 text-[10px] font-bold rounded-full w-5 max-h-5 ms-1">3</span>
                                </span>
                                <SimpleBarReact className="h-64">
                                    <ul className="py-2 text-start h-64 border-t border-gray-100 dark:border-gray-800" >
                                        <li>
                                            <Link href="#!" className="block font-medium py-1.5 px-4">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 rounded-md shadow shadow-indigo-600/10 dark:shadow-gray-700 bg-indigo-600/10 dark:bg-slate-800 text-indigo-600 dark:text-white flex items-center justify-center">
                                                        <Icon.ShoppingCart className="h-4 w-4"/>
                                                    </div>
                                                    <div className="ms-2">
                                                        <span className="text-[15px] font-semibold block">Order Complete</span>
                                                        <small className="text-slate-400">15 min ago</small>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#!" className="block font-medium py-1.5 px-4">
                                                <div className="flex items-center">
                                                    <Image src='/images/client/01.jpg' width={30} height={30} className="h-10 w-10 rounded-md shadow dark:shadow-gray-700" alt=""/>
                                                    <div className="ms-2">
                                                        <span className="text-[15px] font-semibold block"><span className="font-bold">Message</span> from Luis</span>
                                                        <small className="text-slate-400">1 hour ago</small>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#!" className="block font-medium py-1.5 px-4">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 rounded-md shadow shadow-indigo-600/10 dark:shadow-gray-700 bg-indigo-600/10 dark:bg-slate-800 text-indigo-600 dark:text-white flex items-center justify-center">
                                                        <Icon.DollarSign className="h-4 w-4"/>
                                                    </div>
                                                    <div className="ms-2">
                                                        <span className="text-[15px] font-semibold block"><span className="font-bold">One Refund Request</span></span>
                                                        <small className="text-slate-400">2 hour ago</small>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#!" className="block font-medium py-1.5 px-4">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 rounded-md shadow shadow-indigo-600/10 dark:shadow-gray-700 bg-indigo-600/10 dark:bg-slate-800 text-indigo-600 dark:text-white flex items-center justify-center">
                                                        <Icon.Truck className="h-4 w-4"/>
                                                    </div>
                                                    <div className="ms-2">
                                                        <span className="text-[15px] font-semibold block">Deliverd your Order</span>
                                                        <small className="text-slate-400">Yesterday</small>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#!" className="block font-medium py-1.5 px-4">
                                                <div className="flex items-center">
                                                    <Image src='/images/client/02.jpg' width={30} height={30} className="h-10 w-10 rounded-md shadow dark:shadow-gray-700" alt=""/>
                                                    <div className="ms-2">
                                                        <span className="text-[15px] font-semibold block"><span className="font-bold">Cally</span> started following you</span>
                                                        <small className="text-slate-400">2 days ago</small>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </SimpleBarReact>
                            </div>
                        </li>
         */}

            <li className="dropdown inline-block relative">
              <button
                onClick={() => setUser(!user)}
                className="dropdown-toggle items-center"
                type="button"
              >
                <span className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-full">
                  <Image
                    src="/images/client/placeholder.png"
                    width={30}
                    height={30}
                    className="rounded-full"
                    alt=""
                  />
                </span>
                <span className="font-semibold text-[16px] ms-1 sm:inline-block hidden">
                  {state.user.userName}
                </span>
              </button>
              <div
                className={`dropdown-menu absolute end-0 m-0 mt-4 z-10 w-44 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 ${
                  user ? "" : "hidden"
                }`}
              >
                <ul className="py-2 text-start">
                  {/* <li>
                    <Link
                      href="/profile"
                      className="flex items-center font-medium py-1 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"
                    >
                      <AiOutlineUser className="me-2" />
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/chat"
                      className="flex items-center font-medium py-1 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"
                    >
                      <FaRegComment className="me-2" />
                      Chat
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/email"
                      className="flex items-center font-medium py-1 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"
                    >
                      <MdMailOutline className="me-2" />
                      Email
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/profile-setting"
                      className="flex items-center font-medium py-1 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"
                    >
                      <AiOutlineSetting className="me-2" />
                      Settings
                    </Link>
                  </li> */}
                  <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                  {/* <li>
                    <Link
                      href="/lock-screen"
                      className="flex items-center font-medium py-1 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"
                    >
                      <BiLockAlt className="me-2" />
                      Lockscreen
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      onClick={() => (handleLogout())}
                      href="/login"
                      className="flex items-center font-medium py-1 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"
                    >
                      <IoMdLogOut className="me-2" />
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
