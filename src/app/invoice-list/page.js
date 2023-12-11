"use client"
import React,{useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import('../components/sidebar'))
const Topnav = dynamic(() => import('../components/topnav'))
const Footer = dynamic(() => import('../components/footer'))
const Switcher = dynamic(() => import('../components/switcher'))

import {MdKeyboardArrowRight} from 'react-icons/md'

export default function InvoiceList() {

  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
  }, []);

  let [toggle, setToggle] = useState(true)

  const invoiceData = [
    {
        no:'#tw001',
        image:'/images/client/01.jpg',
        name:'Howard Tanner',
        phoneNo:'(+12)85-4521-7568',
        amount:'$253',
        date:'29th Nov 2023',
        status:'unpaid'
    },
    {
        no:'#tw002',
        image:'/images/client/02.jpg',
        name:'Howard Tanner',
        phoneNo:'(+12)85-4521-7568',
        amount:'$482',
        date:'31st Dec 2023',
        status:'Paid'
    },
    {
        no:'#tw003',
        image:'/images/client/03.jpg',
        name:'Faye Bridger',
        phoneNo:'(+12)85-4521-7568',
        amount:'$546',
        date:'13th March 2023',
        status:'unpaid'
    },
    {
        no:'#tw004',
        image:'/images/client/04.jpg',
        name:'Ronald Curtis',
        phoneNo:'(+12)85-4521-7568',
        amount:'$154',
        date:'6th May 2023',
        status:'Paid'
    },
    {
        no:'#tw005',
        image:'/images/client/05.jpg',
        name:'Melissa Hibner',
        phoneNo:'(+12)85-4521-7568',
        amount:'$458',
        date:'19th June 2023',
        status:'unpaid'
    },
    {
        no:'#tw006',
        image:'/images/client/06.jpg',
        name:'Randall Case',
        phoneNo:'(+12)85-4521-7568',
        amount:'$548',
        date:'20th June 2023',
        status:'Paid'
    },
    {
        no:'#tw007',
        image:'/images/client/07.jpg',
        name:'Jerry Morena',
        phoneNo:'(+12)85-4521-7568',
        amount:'$658',
        date:'31st Aug 2023',
        status:'Paid'
    },
    {
        no:'#tw008',
        image:'/images/client/08.jpg',
        name:'Lester McNally',
        phoneNo:'(+12)85-4521-7568',
        amount:'$457',
        date:'1st Sep 2023',
        status:'Paid'
    },
]

  return (
    <div className={`page-wrapper  ${toggle ? "toggled" : ""}`}>
      <Sidebar/>
      <main className="page-content bg-gray-50 dark:bg-slate-800">
        <Topnav toggle={toggle} setToggle={setToggle}/>
        <div className="container-fluid relative px-3">
            <div className="layout-specing">
                <div className="md:flex justify-between items-center">
                    <h5 className="text-lg font-semibold">Invoice List</h5>

                    <ul className="tracking-[0.5px] inline-flex items-center sm:mt-0 mt-3">
                        <li className="inline-block capitalize text-[14px] font-bold duration-500 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><Link href="/">Techwind</Link></li>
                        <li className="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight/></li>
                        <li className="inline-block capitalize text-[14px] font-bold text-indigo-600 dark:text-white" aria-current="page">Invoice List</li>
                    </ul>
                </div>

                <div className="grid grid-cols-1 mt-6">
                    <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                        <table className="w-full text-start">
                            <thead className="text-base">
                                <tr>
                                    <th className="text-start p-4 min-w-[128px]">Invoice No.</th>
                                    <th className="text-start p-4 min-w-[192px]">Client Name</th>
                                    <th className="text-center p-4 min-w-[200px]">Phone</th>
                                    <th className="text-center p-4">Amount</th>
                                    <th className="text-center p-4 min-w-[150px]">Generate(Dt.)</th>
                                    <th className="text-center p-4">Status</th>
                                    <th className="text-end p-4 min-w-[200px]"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {invoiceData.map((item, index) => {
                                    return(
                                        <tr key={index}>
                                            <th className="text-start border-t border-gray-100 dark:border-gray-800 p-4" >#tw001</th>
                                            <td className="text-start border-t border-gray-100 dark:border-gray-800 p-4">
                                                <Link href="#" className="hover:text-indigo-600">
                                                    <div className="flex items-center">
                                                        <Image src={item.image} width={40} height={40} className="h-10 w-10 rounded-full shadow dark:shadow-gray-700" alt=""/>
                                                        <span className="ms-2 font-medium">{item.name}</span>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td className="text-center border-t border-gray-100 dark:border-gray-800 p-4">
                                                <span className="text-slate-400">{item.phoneNo}</span>
                                            </td>
                                            <td className="text-center border-t border-gray-100 dark:border-gray-800 p-4">
                                                <span className="text-slate-400">{item.amount}</span>
                                            </td>
                                            <td className="text-center border-t border-gray-100 dark:border-gray-800 p-4">
                                                <span className="text-slate-400">{item.date}</span>
                                            </td>
                                            <td className="text-center border-t border-gray-100 dark:border-gray-800 p-4">
                                                <span className={`${item.status === 'Paid' ? 'bg-emerald-600/10 dark:bg-emerald-600/20 text-emerald-600' : 'bg-red-600/10 dark:bg-red-600/20 text-red-600 '}  text-[12px] font-bold px-2.5 py-0.5 rounded h-5 ms-1`}>{item.status}</span>
                                            </td>
                                            <td className="text-end border-t border-gray-100 dark:border-gray-800 p-4">
                                                <Link href="/invoice" className="py-1 px-4 inline-block font-semibold tracking-wide border align-middle duration-500 text-sm text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Preview</Link>
                                                <Link href="#" className="py-1 px-4 inline-block font-semibold tracking-wide border align-middle duration-500 text-sm text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md ms-2">Print</Link>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-5 flex items-center justify-between">
                        <div>
                            <Link href="#" className="h-8 w-8 inline-flex items-center justify-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 border-gray-100 dark:border-gray-700 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-full"><i className="mdi mdi-arrow-left"></i></Link>
                            <Link href="#" className="h-8 w-8 inline-flex items-center justify-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 border-gray-100 dark:border-gray-700 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-full"><i className="mdi mdi-arrow-right"></i></Link>
                        </div>

                        <span className="text-slate-400">Showing 1 - 8 out of 45</span>
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
