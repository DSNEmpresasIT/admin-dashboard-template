"use client"
import React,{useState, useEffect} from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const SidebarColored = dynamic(() => import('../components/sidebar'))
const Topnav = dynamic(() => import('../components/topnav'))
const DataStates = dynamic(() => import('../components/dataStates'))
const Analytics = dynamic(() => import('../components/analytics'))
const Order = dynamic(() => import('../components/order'))
const Chat = dynamic(() => import('../components/chat'))
const TopProduct = dynamic(() => import('../components/topProduct'))
const Footer = dynamic(() => import('../components/footer'))
const Switcher = dynamic(() => import('../components/switcher'))

import {BiExport} from 'react-icons/bi'

export default function IndexSidebarColored() {

    useEffect(() => {
        document.documentElement.setAttribute("dir", "ltr");
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
    }, []);

  const[toggle, setToggle] = useState(true)

  return (
    <div className={`page-wrapper  ${toggle ? "toggled" : ""}`}>
      <SidebarColored/>
      <main className="page-content bg-gray-50 dark:bg-slate-800">
        <Topnav toggle={toggle} setToggle={setToggle}/>
        <div className="container-fluid relative px-3">
            <div className="layout-specing">
                <div className="flex justify-between items-center">
                    <div>
                        <h5 className="text-xl font-bold">Hello, Cristina</h5>
                        <h6 className="text-slate-400 font-semibold">Welcome!</h6>
                    </div>

                    <div className="flex items-center">
                        <div className="position-relative">
                            <select className="form-select form-input w-full py-2 h-10 bg-white dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 focus:border-gray-200 dark:border-gray-800 dark:focus:border-gray-700 focus:ring-0" id="yearchart">
                                <option value="Y" defaultValue >Yearly</option>
                                <option value="M">Monthly</option>
                                <option value="W">Weekly</option>
                                <option value="T">Today</option>
                            </select>
                        </div>

                        <Link href="#" className="ms-1">
                            <span className="py-[7px] px-6 font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md sm:inline-block hidden"><BiExport className="inline"/> Export</span>

                            <span className="h-10 w-10 items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white sm:hidden inline-flex"><BiExport/> </span>
                        </Link>
                    </div>
                </div>
                <DataStates/>
                <Analytics/>

                <div className="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-6">
                    <Order/>
                    <Chat/>
                    <TopProduct/>
                </div>
            </div>
        </div>
        <Footer/>
        <Switcher/>
      </main>
    </div>
  )
}
