"use client"
import React,{useState, useEffect} from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import('../components/commons/sidebar'))
const Topnav = dynamic(() => import('../components/commons/topnav'))
const Footer = dynamic(() => import('../components/commons/footer'))
const Switcher = dynamic(() => import('../components/commons/switcher'))
const DataStates = dynamic(() => import('../components/commons/dataStates'))
const Analytics = dynamic(() => import('../components/commons/analytics'))
const Order = dynamic(() => import('../components/commons/order'))
const Chat = dynamic(() => import('../components/commons/chat'))
const TopProduct = dynamic(() => import('../components/commons/topProduct'))

import {BiExport} from 'react-icons/bi'

export default function Index() {

  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    // document.documentElement.classList.add('light');
    // document.documentElement.classList.remove('dark');
  }, []);

  const[toggle, setToggle] = useState(true)

  return (
    <div className={`page-wrapper  ${toggle ? "toggled" : ""}`}>
      <Sidebar/>
      <main className="page-content bg-gray-50 dark:bg-slate-800">
        <Topnav toggle={toggle} setToggle={setToggle}/>
        <div className="container-fluid relative px-3">
            <div className="layout-specing">
                <div className="flex justify-between items-center">
                    <div>
                        <h5 className="text-xl font-bold">Hola, Aluplast</h5>
                        <h6 className="text-slate-400 font-semibold">Bienvenido!</h6>
                    </div>
                </div>
                <DataStates/>
                {/* <Analytics/> */}
                
                  <div className="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-6">
                      <Order/>
                      {/* <Chat/> */}
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
