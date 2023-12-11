"use client"
import React,{useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import('../../../components/commons/sidebar'))
const Topnav = dynamic(() => import('../../../components/commons/topnav'))
const Footer = dynamic(() => import('../../../components/commons/footer'))
const Switcher = dynamic(() => import('../../../components/commons/switcher'))

import * as Icon from 'react-feather'
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md'

import { blogData } from "@/utils/data/data";
 
export default function BlogDetails(props) {
    const data  = blogData.find((blog) => blog.id === parseInt(props.params.id));

  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
  }, []);

  let [toggle, setToggle] = useState(true)
  let commentsData = [
    {
        image:'/images/client/01.jpg',
        name:'Calvin Carlo',
        time:'13th March 2023 at 01:00 pm',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour '
    },
    {
        image:'/images/client/02.jpg',
        name:'Tiffany Betancourt',
        time:'6th May 2023 at 10:05 am',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour '
    },
    {
        image:'/images/client/03.jpg',
        name:'Mari Harrington',
        time:'19th June 2023 at 09:15 am',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour '
    },
    {
        image:'/images/client/04.jpg',
        name:'Donna Schultz',
        time:'20th june 2024 at 01:00 pm',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour '
    },
]
let recentPost = [
    {
        image:'/images/blog/05.jpg',    
        title:'Consultant Business',
        time:'13th Sep 2023'
    },
    {
        image:'/images/blog/06.jpg',    
        title:'Grow Your Business',
        time:'29th Nov 2023'
    },
    {
        image:'/images/blog/07.jpg',    
        title:'Look On The Glorious Balance',
        time:'29th Dec 2023'
    }
]

  return (
    <div className={`page-wrapper  ${toggle ? "toggled" : ""}`}>
      <Sidebar/>
      <main className="page-content bg-gray-50 dark:bg-slate-800">
        <Topnav toggle={toggle} setToggle={setToggle}/>
        <div className="container-fluid relative px-3">
            <div className="layout-specing">
                <div className="md:flex justify-between items-center">
                    <h5 className="text-lg font-semibold">{data?.title ? data?.title : 'My Very Minimal Interior Design Ideas'}</h5>

                    <ul className="tracking-[0.5px] inline-flex items-center sm:mt-0 mt-3">
                        <li className="inline-block capitalize text-[14px] font-bold duration-500 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><Link href="/">Techwind</Link></li>
                        <li className="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight/></li>
                        <li className="inline-block capitalize text-[14px] font-bold text-indigo-600 dark:text-white" aria-current="page">Blog Detail</li>
                    </ul>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-6 gap-6">
                    <div className="lg:col-span-8 md:col-span-6">
                        <div className="p-6 rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">

                            <Image src={data?.image ? data?.image : '/images/blog/bg.jpg'} width={0} height={0} sizes="100vw" placeholder="blur" blurDataURL={data?.image ? data?.image : '/images/blog/bg.jpg'} style={{width:'100%', height:'auto'}} className="rounded-md" alt=""/>

                            <div className="mt-6">
                                <p className="text-slate-400">The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to proper Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script.</p>
                                <p className="text-slate-400 italic border-x-4 border-indigo-600 rounded-ss-xl rounded-ee-xl mt-3 p-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</p>
                                <p className="text-slate-400 mt-3">The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers attention from the layout.</p>
                            </div>
                        </div>

                        <div className="p-6 rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 mt-6">
                            <h5 className="text-lg font-semibold">Comments:</h5>
                            {commentsData.map((item, index)=>{
                                return(
                                    <div className="mt-6" key={index}>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <Image src={item.image} width={44} height={44} placeholder="blur" blurDataURL={item.image} className="h-11 w-11 rounded-full shadow" alt=""/>
            
                                                <div className="ms-3 flex-1">
                                                    <Link href="" className="text-lg font-semibold hover:text-indigo-600 duration-500">{item.name}</Link>
                                                    <p className="text-sm text-slate-400">{item.time}</p>
                                                </div>
                                            </div>
        
                                            <Link href="" className="text-slate-400 hover:text-indigo-600 duration-500 ms-5"><i className="mdi mdi-reply"></i> Reply</Link>
                                        </div>
                                        <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-700 mt-6">
                                            <p className="text-slate-400 italic">{item.comment}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="p-6 rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 mt-6">
                            <h5 className="text-lg font-semibold">Leave A Comment:</h5>

                            <form className="mt-6">
                                <div className="grid lg:grid-cols-12 lg:gap-6">
                                    <div className="lg:col-span-6 mb-5">
                                        <div className="text-start">
                                            <label htmlFor="name" className="font-semibold">Your Name:</label>
                                            <div className="form-icon relative mt-2">
                                                <Icon.User className="w-4 h-4 absolute top-3 start-4"/>
                                                <input name="name" id="name" type="text" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Name :"/>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="lg:col-span-6 mb-5">
                                        <div className="text-start">
                                            <label htmlFor="email" className="font-semibold">Your Email:</label>
                                            <div className="form-icon relative mt-2">
                                                <Icon.Mail className="w-4 h-4 absolute top-3 start-4"/>
                                                <input name="email" id="email" type="email" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Email :"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1">
                                    <div className="mb-5">
                                        <div className="text-start">
                                            <label htmlFor="comments" className="font-semibold">Your Comment:</label>
                                            <div className="form-icon relative mt-2">
                                                <Icon.MessageCircle className="w-4 h-4 absolute top-3 start-4"/>
                                                <textarea name="comments" id="comments" className="form-input ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Message :"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" id="submit" name="send" className="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full">Send Message</button>
                            </form>
                        </div>
                    </div>

                    <div className="lg:col-span-4 md:col-span-6">
                        <div className="p-6 rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                            <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-700 rounded-md p-2 text-center">Author</h5>
                            <div className="text-center mt-6">
                                <Image src='/images/client/05.jpg' width={96} height={96} placeholder="blur" blurDataURL="/images/client/05.jpg" className="h-24 w-24 mx-auto rounded-full shadow mb-4" alt=""/>

                                <Link href="" className="text-lg font-semibold hover:text-indigo-600 duration-500">Cristina Romsey</Link>
                                <p className="text-slate-400">Content Writer</p>
                            </div>

                            <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-700 rounded-md p-2 text-center mt-6">Recent post</h5>
                            {recentPost.map((item, index) => {
                                return(
                                    <div className="flex items-center mt-6" key={index}>
                                        <Image src={item.image} width={96} height={64} placeholder="blur" blurDataURL={item.image} className="h-16 rounded-md shadow dark:shadow-gray-700" alt=""/>

                                        <div className="ms-3">
                                            <Link href="" className="font-semibold hover:text-indigo-600">{item.title}</Link>
                                            <p className="text-sm text-slate-400">{item.time}</p>
                                        </div>
                                    </div>
                                )
                            })}
                            <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-700 rounded-md p-2 text-center mt-6">Social sites</h5>
                            <ul className="list-none text-center mt-6 space-x-1">
                                <li className="inline"><Link href="" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Facebook className="h-4 w-4"/></Link></li>
                                <li className="inline"><Link href="" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Instagram className="h-4 w-4"/></Link></li>
                                <li className="inline"><Link href="" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Twitter className="h-4 w-4"/></Link></li>
                                <li className="inline"><Link href="" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Linkedin className="h-4 w-4"/></Link></li>
                                <li className="inline"><Link href="" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.GitHub className="h-4 w-4"/></Link></li>
                                <li className="inline"><Link href="" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Youtube className="h-4 w-4"/></Link></li>
                                <li className="inline"><Link href="" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Icon.Gitlab className="h-4 w-4"/></Link></li>
                            </ul>

                            <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-700 rounded-md p-2 text-center mt-6">Tagscloud</h5>
                            <ul className="list-none text-center mt-6 space-x-2">
                                <li className="inline-block my-2"><Link href="" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-700 duration-500">Business</Link></li>
                                <li className="inline-block my-2"><Link href="" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-700 duration-500">Finance</Link></li>
                                <li className="inline-block my-2"><Link href="" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-700 duration-500">Marketing</Link></li>
                                <li className="inline-block my-2"><Link href="" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-700 duration-500">Fashion</Link></li>
                                <li className="inline-block my-2"><Link href="" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-700 duration-500">Bride</Link></li>
                                <li className="inline-block my-2"><Link href="" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-700 duration-500">Lifestyle</Link></li>
                                <li className="inline-block my-2"><Link href="" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-700 duration-500">Travel</Link></li>
                                <li className="inline-block my-2"><Link href="" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-700 duration-500">Beauty</Link></li>
                                <li className="inline-block my-2"><Link href="" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-700 duration-500">Video</Link></li>
                                <li className="inline-block my-2"><Link href="" className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-700 duration-500">Audio</Link></li>
                            </ul>
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
