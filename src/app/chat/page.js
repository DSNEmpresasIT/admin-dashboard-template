"use client"
import React,{useEffect, useState}  from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import('../components/sidebar'))
const Topnav = dynamic(() => import('../components/topnav'))
const Footer = dynamic(() => import('../components/footer'))
const Switcher = dynamic(() => import('../components/switcher'))

import SimpleBarReact from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';

import {MdKeyboardArrowRight} from 'react-icons/md'


export default function Chat(){
    const [open, setOpen] = useState(false)
    const[toggle, setToggle] = useState(true)

    useEffect(() => {
        document.documentElement.setAttribute("dir", "ltr");
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');

        const DropdownHandler = ()=>{
            setOpen(false)
        }
        document.addEventListener('mousedown', DropdownHandler)
    }, []);
    const userData = [
        {
            image: '/images/client/01.jpg',
            name: 'Christopher',
            lastSeen: '10 Min',
            active: true,
            msg:'Hello'
        },
        {
            image: '/images/client/02.jpg',
            name: 'Dr. Cristino',
            lastSeen: '20 Min',
            active: false,
            msg:'Hi, How are you?'
        },
        {
            image: '/images/client/03.jpg',
            name: 'Faye',
            lastSeen: '30 Min',
            active: false,
            msg:'Heyy'
        },
        {
            image: '/images/client/04.jpg',
            name: 'Ronald',
            lastSeen: '2 Hours',
            active: false,
            msg:'Hey, How are you sir?'
        },
        {
            image: '/images/client/05.jpg',
            name: 'Melissa',
            lastSeen: '3 Hours',
            active: true,
            msg:'Good Afternoon'
        },
        {
            image: '/images/client/06.jpg',
            name: 'Elsie',
            lastSeen: '10 Hours',
            active: true,
            msg:'Good Morning sir, how can i help you?'
        },
        {
            image: '/images/client/07.jpg',
            name: 'Jerry',
            lastSeen: '16 Hours',
            active: true,
            msg:'Please give me appointment'
        },
        {
            image: '/images/client/08.jpg',
            name: 'Louis',
            lastSeen: '1 Days',
            active: false,
            msg:'Hii'
        },
        {
            image: '/images/client/09.jpg',
            name: 'Randall',
            lastSeen: '2 Days',
            active: true,
            msg:'Hello Sir'
        },
        {
            image: '/images/client/10.jpg',
            name: 'Mary',
            lastSeen: '3 Days',
            active: false,
            msg:'How are you sir?'
        },
        {
            image: '/images/client/11.jpg',
            name: 'Lester',
            lastSeen: '4 Days',
            active: false,
            msg:'Hello please give me answer.'
        },
        {
            image: '/images/client/12.jpg',
            name: 'Christopher',
            lastSeen: '10 Days',
            active: true,
            msg:'Hello'
        },
    ]
    return(

    <div className={`page-wrapper  ${toggle ? "toggled" : ""}`}>
      <Sidebar/>
      <main className="page-content bg-gray-50 dark:bg-slate-800">
        <Topnav toggle={toggle} setToggle={setToggle}/>
        <div className="container-fluid relative px-3">
            <div className="layout-specing">
                <div className="md:flex justify-between items-center">
                    <h5 className="text-lg font-semibold">Chatbox</h5>

                    <ul className="tracking-[0.5px] inline-flex items-center sm:mt-0 mt-3">
                        <li className="inline-block capitalize text-[14px] font-bold duration-500 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><Link href="/">Techwind</Link></li>
                        <li className="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight/></li>
                        <li className="inline-block capitalize text-[14px] font-bold text-indigo-600 dark:text-white" aria-current="page">Chatbox</li>
                    </ul>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-6 gap-2">
                    <div className="xl:col-span-3 lg:col-span-5 md:col-span-5">
                        <div className="rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                            <div className="text-center p-6 border-b border-gray-100 dark:border-gray-800">
                                <Image src='/images/client/05.jpg' width={80} height={80} placeholder="blur" blurDataURL="/images/client/05.jpg" className="h-20 w-20 rounded-full shadow dark:shadow-gray-700 mx-auto" alt=""/>
                                <h5 className="mt-3 font-semibold text-xl mb-0">Cristina Julia</h5>
                                <p className="text-slate-400 mb-0">UI / UX Designer</p>
                            </div>
                            <SimpleBarReact className="p-2 max-h-[500px]">
                                {userData.map((item, index) => {
                                    return(
                                        <Link href="#" className="flex items-center p-2 rounded-md relative bg-gray-50 dark:bg-slate-800" key={index}>
                                        <div className="relative">
                                            <Image src={item.image} width={44} height={44} placeholder="blur" blurDataURL={item.image} className="h-11 w-11 rounded-full shadow dark:shadow-gray-700" alt=""/>
                                            {item.active === true ?  <span className="absolute top-0.5 start-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full w-2 h-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-green-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span> :
                                            <span className="absolute top-0.5 start-0.5 flex items-center justify-center bg-red-600 text-white text-[10px] font-bold rounded-full w-2 h-2"></span>
                                            }
                                           
                                        </div>
                                        <div className="overflow-hidden flex-1 ms-2">
                                            <div className="flex justify-between">
                                                <h6 className="font-semibold">{item.name}</h6>
                                                <small className="text-slate-400">{item.lastSeen}</small>
                                            </div>
                                            <div className="text-slate-400 truncate">{item.msg}</div>
                                        </div>
                                    </Link>
                                    )
                                })}
                            </SimpleBarReact>
                        </div>
                    </div>

                    <div className="xl:col-span-9 lg:col-span-7 md:col-span-7">
                        <div className="rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                            <div className="flex justify-between items-center border-b border-gray-100 dark:border-gray-800 p-4">
                                <div className="flex">
                                    <Image src='/images/client/12.jpg' width={44} height={44} placeholder="blur" blurDataURL="/images/client/12.jpg" className="h-11 w-11 rounded-full shadow dark:shadow-gray-700" alt=""/>
                                    <div className="overflow-hidden ms-3">
                                        <Link href="#" className="block font-semibold text-truncate">Calvin Carlo</Link>
                                        <span className="text-slate-400 flex items-center text-sm"><span className="bg-green-600 text-white text-[10px] font-bold rounded-full w-2 h-2 me-1"></span> Online</span>
                                    </div>
                                </div>

                                <div className="dropdown relative">
                                    <button onClick={() => setOpen(!open)} className="dropdown-toggle items-center" type="button">
                                        <span className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-full"><i className="mdi mdi-dots-vertical"></i></span>
                                    </button>
                                    <div className={`dropdown-menu absolute end-0 m-0 mt-4 z-10 w-44 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 ${open ?  '' : 'hidden'}`}>
                                        <ul className="py-2 text-start">
                                            <li>
                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-indigo-600"><i className="mdi mdi-account-outline"></i> Profile</Link>
                                            </li>
                                            <li>
                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-indigo-600"><i className="mdi mdi-cog-outline"></i> Profile Settings</Link>
                                            </li>
                                            <li>
                                                <Link href="" className="block font-medium py-1.5 px-4 hover:text-indigo-600"><i className="mdi mdi-trash-can-outline"></i> Delete</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <SimpleBarReact className="p-4 list-none mb-0 max-h-[565px] bg-no-repeat bg-center bg-cover" style={{backgroundImage:'url("/images/bg-chat.png")'}}>
                                <ul>
                                    <li>
                                        <div className="inline-block">
                                            <div className="flex mb-3">
                                                <div className="relative">
                                                    <Image src='/images/client/01.jpg' width={36} height={36} className="h-9 w-9 min-w-[36px] rounded-full shadow dark:shadow-gray-700" alt=""/>
                                                    <span className="absolute top-0.5 start-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full w-2 h-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-green-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                                                </div>
                                                    
                                                <div className="ms-2 max-w-lg">
                                                    <p className="bg-white dark:bg-slate-900 text-slate-400 text-sm shadow dark:shadow-gray-700 px-3 py-2 rounded mb-1">Hey Cristina</p>
                                                    <span className="text-slate-400 text-sm"><i className="mdi mdi-clock-outline me-1"></i>59 min ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="text-end">
                                        <div className="inline-block">
                                            <div className="flex mb-3">
                                                <div className="relative order-2">
                                                    <Image src='/images/client/05.jpg' width={36} height={36} className="h-9 w-9 min-w-[36px] rounded-full shadow dark:shadow-gray-700" alt=""/>
                                                    <span className="absolute top-0.5 end-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full w-2 h-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-green-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                                                </div>
                                                    
                                                <div className="me-2 max-w-lg">
                                                    <p className="bg-white dark:bg-slate-900 text-slate-400 text-sm shadow dark:shadow-gray-700 px-3 py-2 rounded mb-1">Hello Calvin</p>
                                                    <span className="text-slate-400 text-sm"><i className="mdi mdi-clock-outline me-1"></i>45 min ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="text-end">
                                        <div className="inline-block">
                                            <div className="flex mb-3">
                                                <div className="relative order-2">
                                                    <Image src='/images/client/05.jpg' width={36} height={36} className="h-9 w-9 min-w-[36px] rounded-full shadow dark:shadow-gray-700" alt=""/>
                                                    <span className="absolute top-0.5 end-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full w-2 h-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-green-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                                                </div>
                                                    
                                                <div className="me-2 max-w-lg">
                                                    <p className="bg-white dark:bg-slate-900 text-slate-400 text-sm shadow dark:shadow-gray-700 px-3 py-2 rounded mb-1">How can i help you?</p>
                                                    <span className="text-slate-400 text-sm"><i className="mdi mdi-clock-outline me-1"></i>44 min ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="inline-block">
                                            <div className="flex mb-3">
                                                <div className="relative">
                                                    <Image src='/images/client/01.jpg' width={36} height={36} className="h-9 w-9 min-w-[36px] rounded-full shadow dark:shadow-gray-700" alt=""/>
                                                    <span className="absolute top-0.5 start-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full w-2 h-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-green-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                                                </div>
                                                    
                                                <div className="ms-2 max-w-lg">
                                                    <p className="bg-white dark:bg-slate-900 text-slate-400 text-sm shadow dark:shadow-gray-700 px-3 py-2 rounded mb-1">Nice to meet you</p>
                                                    <span className="text-slate-400 text-sm"><i className="mdi mdi-clock-outline me-1"></i>42 min ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="inline-block">
                                            <div className="flex mb-3">
                                                <div className="relative">
                                                    <Image src='/images/client/01.jpg' width={36} height={36} className="h-9 w-9 min-w-[36px] rounded-full shadow dark:shadow-gray-700" alt=""/>
                                                    <span className="absolute top-0.5 start-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full w-2 h-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-green-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                                                </div>
                                                    
                                                <div className="ms-2 max-w-lg">
                                                    <p className="bg-white dark:bg-slate-900 text-slate-400 text-sm shadow dark:shadow-gray-700 px-3 py-2 rounded mb-1">Hope you are doing fine?</p>
                                                    <span className="text-slate-400 text-sm"><i className="mdi mdi-clock-outline me-1"></i>40 min ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="text-end">
                                        <div className="inline-block">
                                            <div className="flex mb-3">
                                                <div className="relative order-2">
                                                    <Image src='/images/client/05.jpg' width={36} height={36} className="h-9 w-9 min-w-[36px] rounded-full shadow dark:shadow-gray-700" alt=""/>
                                                    <span className="absolute top-0.5 end-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full w-2 h-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-green-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                                                </div>
                                                    
                                                <div className="me-2 max-w-lg">
                                                    <p className="bg-white dark:bg-slate-900 text-slate-400 text-sm shadow dark:shadow-gray-700 px-3 py-2 rounded mb-1">Im good thanks for asking</p>
                                                    <span className="text-slate-400 text-sm"><i className="mdi mdi-clock-outline me-1"></i>38 min ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="inline-block">
                                            <div className="flex mb-3">
                                                <div className="relative">
                                                    <Image src='/images/client/01.jpg' width={36} height={36} className="h-9 w-9 min-w-[36px] rounded-full shadow dark:shadow-gray-700" alt=""/>
                                                    <span className="absolute top-0.5 start-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full w-2 h-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-green-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                                                </div>
                                                    
                                                <div className="ms-2 max-w-lg">
                                                    <p className="bg-white dark:bg-slate-900 text-slate-400 text-sm shadow dark:shadow-gray-700 px-3 py-2 rounded mb-1">I am intrested to know more about your prices and services you offer</p>
                                                    <span className="text-slate-400 text-sm"><i className="mdi mdi-clock-outline me-1"></i>35 min ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="text-end">
                                        <div className="inline-block">
                                            <div className="flex mb-3">
                                                <div className="relative order-2">
                                                    <Image src='/images/client/01.jpg' width={36} height={36} className="h-9 w-9 min-w-[36px] rounded-full shadow dark:shadow-gray-700" alt=""/>
                                                    <span className="absolute top-0.5 end-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full w-2 h-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-green-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                                                </div>
                                                    
                                                <div className="me-2 max-w-lg">
                                                    <p className="bg-white dark:bg-slate-900 text-slate-400 text-sm shadow dark:shadow-gray-700 px-3 py-2 rounded mb-1">Sure please check below link to find more useful information <Link href="https://shreethemes.in/techwind/" target="_blank" className="text-indigo-600">https://shreethemes.in/techwind/</Link></p>
                                                    <span className="text-slate-400 text-sm"><i className="mdi mdi-clock-outline me-1"></i>29 min ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="inline-block">
                                            <div className="flex mb-3">
                                                <div className="relative">
                                                    <Image src='/images/client/01.jpg' width={36} height={36} className="h-9 w-9 min-w-[36px] rounded-full shadow dark:shadow-gray-700" alt=""/>
                                                    <span className="absolute top-0.5 start-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full w-2 h-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-green-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                                                </div>
                                                    
                                                <div className="ms-2 max-w-lg">
                                                    <p className="bg-white dark:bg-slate-900 text-slate-400 text-sm shadow dark:shadow-gray-700 px-3 py-2 rounded mb-1">Thank you 😊</p>
                                                    <span className="text-slate-400 text-sm"><i className="mdi mdi-clock-outline me-1"></i>26 min ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="text-end">
                                        <div className="inline-block">
                                            <div className="flex mb-3">
                                                <div className="relative order-2">
                                                    <Image src='/images/client/05.jpg' width={36} height={36} className="h-9 w-9 min-w-[36px] rounded-full shadow dark:shadow-gray-700" alt=""/>
                                                    <span className="absolute top-0.5 end-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full w-2 h-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-green-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                                                </div>
                                                    
                                                <div className="me-2 max-w-lg">
                                                    <p className="bg-white dark:bg-slate-900 text-slate-400 text-sm shadow dark:shadow-gray-700 px-3 py-2 rounded mb-1">Welcome</p>
                                                    <span className="text-slate-400 text-sm"><i className="mdi mdi-clock-outline me-1"></i>15 min ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="inline-block">
                                            <div className="flex items-center mb-3">
                                                <div className="relative">
                                                    <Image src='/images/client/01.jpg' width={36} height={36} className="h-9 w-9 min-w-[36px] rounded-full shadow dark:shadow-gray-700" alt=""/>
                                                    <span className="absolute top-0.5 start-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full w-2 h-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-green-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                                                </div>
                                                    
                                                <div className="ms-2 max-w-lg">
                                                    <p className="text-slate-400 text-sm rounded mb-1">Frank Williams is typing
                                                        <span className="animate-typing ms-1">
                                                            <span className="dot inline-block w-1 h-1 bg-slate-400 -mr-px opacity-60 rounded-full"></span>
                                                            <span className="dot inline-block w-1 h-1 bg-slate-400 -mr-px opacity-60 rounded-full"></span>
                                                            <span className="dot inline-block w-1 h-1 bg-slate-400 -mr-px opacity-60 rounded-full"></span>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </SimpleBarReact>

                            <div className="p-2 border-t border-gray-100 dark:border-gray-800">
                                <div className="flex ">
                                    <input type="text" className="form-input w-full py-2 px-3 h-9 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Enter Message..."/>

                                    <div className="min-w-[125px] text-end space-x-1">
                                        <Link href="#" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[16px] text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"><i className="mdi mdi-send"></i></Link>
                                        <Link href="#" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[16px] text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"><i className="mdi mdi-emoticon-happy-outline"></i></Link>
                                        <Link href="#" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[16px] text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"><i className="mdi mdi-paperclip"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        <Switcher/>
      </main>
    </div>
        
    )
}