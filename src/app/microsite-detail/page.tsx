"use client"
import React,{useEffect, useState}  from "react";
import Link from "next/link";
import Image from "next/image";

import * as Icon from 'react-feather'
import {AiOutlineCamera} from 'react-icons/ai'

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"
import UserProfileTab from "@/components/commons/userProfileTab";

export default function Profile(){
    const[toggle, setToggle] = useState(true)
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isOpen, setisOpen] = useState(false);

    const images = ['images/portfolio/1.jpg', 'images/portfolio/2.jpg', 'images/portfolio/3.jpg', 'images/portfolio/4.jpg', 'images/portfolio/1.jpg', '/images/portfolio/6.jpg']

    const handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + images.length - 1) % images.length);
    };

    const handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setisOpen(true);
    };
    const currentImage = images[currentImageIndex];

    const experienceData = [
        {
            image:'/images/client/circle-logo.png',
            title :'Senior Web Developer',
            experience :'3 Years Experience',
            company:'CircleCi',
            location:'@London, UK'
        },
        {
            image:'/images/client/facebook-logo-2019.png',
            title :'Web Designer',
            experience :'2 Years Experience',
            company:'Facebook',
            location:'@Washington D.C, USA'
        },
        {
            image:'/images/client/spotify.png',
            title :'UI Designer',
            experience :'2 Years Experience',
            company:'Spotify',
            location:'@Perth, Australia'
        },
    ]

    const portfolioData = [
        {
            id:0,
            image:'/images/portfolio/1.jpg',
            title1:'Mockup Collection',
            title2:'Abstract'
        },
        {
            id:1,
            image:'/images/portfolio/2.jpg',
            title1:'Mockup Collection',
            title2:'Abstract'
        },
        {
            id:2,
            image:'/images/portfolio/3.jpg',
            title1:'Mockup Collection',
            title2:'Abstract'
        },
        {
            id:3,
            image:'/images/portfolio/4.jpg',
            title1:'Mockup Collection',
            title2:'Abstract'
        },
        {
            id:4,
            image:'/images/portfolio/5.jpg',
            title1:'Mockup Collection',
            title2:'Abstract'
        },
        {
            id:5,
            image:'/images/portfolio/6.jpg',
            title1:'Mockup Collection',
            title2:'Abstract'
        },
    ]

    return(
        <div className="container-fluid relative px-3">
            <div className="pb-[10vh]">
                <div className="grid md:grid-cols-12 grid-cols-1">
                    <div className="xl:col-span-9 lg:col-span-8 md:col-span-8 mt-6">
                        <div className="grid grid-cols-1 gap-6">
                            <div className="p-6 relative rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                <h5 className="text-xl font-semibold">Cristina Murfy</h5>
                                <p className="text-slate-400 mt-3">I have started my career as a trainee and prove my self and achieve all the milestone with good guidance and reach up to the project manager. In this journey, I understand all the procedure which make me a good developer, team leader, and a project manager.</p>
                            </div>

                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                                <div className="p-6 relative rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 h-fit">
                                    <h5 className="text-xl font-semibold">Personal Details :</h5>
                                    <div className="mt-6">
                                        <div className="flex items-center">
                                            <Icon.Mail className="fea icon-ex-md text-slate-400 me-3"/>
                                            <div className="flex-1">
                                                <h6 className="text-indigo-600 dark:text-white font-medium mb-0">Email :</h6>
                                                <Link href="" className="text-slate-400">cristina@hotmail.com</Link>
                                            </div>
                                        </div>
                                        <div className="flex items-center mt-3">
                                            <Icon.Bookmark className="fea icon-ex-md text-slate-400 me-3"/>
                                            <div className="flex-1">
                                                <h6 className="text-indigo-600 dark:text-white font-medium mb-0">Skills :</h6>
                                                <Link href="" className="text-slate-400">html</Link>, <Link href="" className="text-slate-400">css</Link>, <Link href="" className="text-slate-400">js</Link>, <Link href="" className="text-slate-400">mysql</Link>
                                            </div>
                                        </div>
                                        <div className="flex items-center mt-3">
                                            <Icon.Italic className="fea icon-ex-md text-slate-400 me-3"/>
                                            <div className="flex-1">
                                                <h6 className="text-indigo-600 dark:text-white font-medium mb-0">Language :</h6>
                                                <Link href="" className="text-slate-400">English</Link>, <Link href="" className="text-slate-400">Japanese</Link>, <Link href="" className="text-slate-400">Chinese</Link>
                                            </div>
                                        </div>
                                        <div className="flex items-center mt-3">
                                            <Icon.Globe className="fea icon-ex-md text-slate-400 me-3"/>
                                            <div className="flex-1">
                                                <h6 className="text-indigo-600 dark:text-white font-medium mb-0">Website :</h6>
                                                <Link href="" className="text-slate-400">www.cristina.com</Link>
                                            </div>
                                        </div>
                                        <div className="flex items-center mt-3">
                                            <Icon.Gift className="fea icon-ex-md text-slate-400 me-3"/>
                                            <div className="flex-1">
                                                <h6 className="text-indigo-600 dark:text-white font-medium mb-0">Birthday :</h6>
                                                <p className="text-slate-400 mb-0">2nd March, 1996</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center mt-3">
                                            <Icon.MapPin className="fea icon-ex-md text-slate-400 me-3"/>
                                            <div className="flex-1">
                                                <h6 className="text-indigo-600 dark:text-white font-medium mb-0">Location :</h6>
                                                <Link href="" className="text-slate-400">Beijing, China</Link>
                                            </div>
                                        </div>
                                        <div className="flex items-center mt-3">
                                            <Icon.Phone className="fea icon-ex-md text-slate-400 me-3"/>
                                            <div className="flex-1">
                                                <h6 className="text-indigo-600 dark:text-white font-medium mb-0">Cell No :</h6>
                                                <Link href="" className="text-slate-400">(+12) 1254-56-4896</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 relative rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 h-fit">
                                    <h5 className="text-xl font-semibold">Experience :</h5>
                                    {experienceData.map((item, index) =>{
                                        return(
                                            <div key={index} className="flex duration-500 hover:scale-105 shadow dark:shadow-gray-700 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-4 rounded-md bg-white dark:bg-slate-900 mt-6">
                                                <Image src={item.image} width={64} height={64} placeholder="blur" blurDataURL={item.image} className="h-16 w-16 p-4 bg-slate-50 dark:bg-slate-800 shadow dark:shadow-gray-700 rounded-md" alt=""/>
                                                <div className="flex-1 content ms-4">
                                                    <h4 className="text-lg text-medium">{item.title}</h4>
                                                    <p className="text-slate-400 mb-0">{item.experience}</p>
                                                    <p className="text-slate-400 mb-0"><Link href="" className="text-indigo-600">{item.company}</Link> {item.location}</p>    
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="p-6 relative rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                <h5 className="text-xl font-semibold">Portfolio :</h5>
            
                                <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-6 gap-6">
                                    {portfolioData.map((item,index) => {
                                        return(
                                            <div className="group relative block overflow-hidden rounded-md duration-500" key={index}>
                                                <Image src={item.image} width={0} height={0} sizes="100vw" placeholder="blur" blurDataURL="{item.image}" style={{width:'100%', height:'auto'}} className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 duration-500" alt=""/>
                                                <div className="absolute inset-2 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90 duration-500 z-0 rounded-md"></div>
                    
                                                <div className="content duration-500">
                                                    <div className="icon absolute z-10 opacity-0 group-hover:opacity-100 top-6 end-6 duration-500">
                                                        <Link href="#" onClick={() => handleImageClick(item.id)} className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full lightbox"><AiOutlineCamera/></Link>
                                                    </div>
                    
                                                    <div className="absolute z-10 opacity-0 group-hover:opacity-100 bottom-6 start-6 duration-500">
                                                        <Link href="/portfolio-detail-three" className="h6 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">{item.title1}</Link>
                                                        <p className="text-slate-400 mb-0">{item.title2}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    {isOpen && (
                                        <Lightbox
                                            mainSrc={currentImage}
                                            prevSrc={images[(currentImageIndex + images.length - 1) % images.length]}
                                            nextSrc={images[(currentImageIndex + 1) % images.length]}

                                            onCloseRequest={() => setisOpen(false)}
                                            onMovePrevRequest={handleMovePrev}
                                            onMoveNextRequest={handleMoveNext}
                                        />
                                     )}
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}