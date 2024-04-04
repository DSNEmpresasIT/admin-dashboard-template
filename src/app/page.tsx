"use client"
import React,{useState, useEffect} from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import('@/components/commons/footer'))
const Switcher = dynamic(() => import('@/components/commons/switcher'))
const DataStates = dynamic(() => import('@/components/commons/dataStates'))
const Analytics = dynamic(() => import('@/components/commons/analytics'))
const Order = dynamic(() => import('@/components/commons/order'))
const Chat = dynamic(() => import('@/components/commons/chat'))
const TopProduct = dynamic(() => import('@/components/commons/topProduct'))

import {BiExport} from 'react-icons/bi'
import Sidebar from "@/components/commons/sidebar";
import Topnav from "@/components/commons/topnav";
import { useAuthContext } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import { PAGES_PATH } from "@/utils/types/pages";
import Image from "next/image";
import UserProfileTab from "@/components/commons/userProfileTab";


export default function Index() {
  const {state} = useAuthContext();
  const router = useRouter();

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
          <div className="grid grid-cols-1">
            <div className="profile-banner relative text-transparent rounded-md shadow dark:shadow-gray-700 overflow-hidden">
                <div className="relative shrink-0">
                <Image src='/images/blog/bg.jpg' width={0} height={0} sizes="100vw" placeholder="blur" blurDataURL="/images/blog/bg.jpg" style={{width:"100%", height:"auto"}} className="h-80 w-full object-cover" id="profile-banner" alt=""/>
                    <div className="absolute inset-0 bg-black/70"></div>
                    <label className="absolute inset-0 cursor-pointer" htmlFor="pro-banner"></label>
                </div>
            </div>
            <div className="grid md:grid-cols-12 grid-cols-1">
              <UserProfileTab />
              <div className="py-5 col-span-8">
                  <div className="flex justify-between items-center">
                      <div>
                          <h6 className="text-slate-400 font-semibold">Bienvenido!</h6>
                      </div>
                  </div>
                  <div className="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-6">
                      <Order/>
                      <Order/>
                      <Order/>
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
