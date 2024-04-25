import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'

import {AiOutlineDashboard,AiOutlineCreditCard} from 'react-icons/ai'
import {TbNotebook} from 'react-icons/tb'
import {FaRecycle} from 'react-icons/fa'
import {LuBellRing} from 'react-icons/lu'
import {BiCog} from 'react-icons/bi'
import {CgLogOff} from 'react-icons/cg'

export default function UserProfileTab(){
    const pathname = usePathname()

    let [uploadFile , setUpoadFile] = useState('/images/client/05.jpg')
   
    function handleChange(event) {
            if(event.target.files && event.target.files.length !== 0){
                setUpoadFile(URL.createObjectURL(event.target.files[0]))
        }
    }
    return(
        <>
        <div className="xl:col-span-3 lg:col-span-4 md:col-span-4 mx-6">
            <div className="p-6 relative rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 -mt-48">
                <div className="profile-pic text-center mb-5">
                    <input id="pro-img" name="profile-image" type="file" className="hidden" onChange={(e) => handleChange(e)} />
                    <div>
                        <div className="relative h-24 w-24 mx-auto">
                            <Image src={uploadFile} width={96} height={96} placeholder="blur" blurDataURL={uploadFile} className="rounded-full shadow dark:shadow-gray-700 ring-4 ring-slate-50 dark:ring-slate-800" id="profile-image" alt=""/>
                            <label className="absolute inset-0 cursor-pointer" htmlFor="pro-img"></label>
                        </div>

                        <div className="mt-4">
                            <h5 className="text-lg font-semibold">Cristina Murfy</h5>
                            <p className="text-slate-400">cristina@hotmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}