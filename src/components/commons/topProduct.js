import React from "react"
import Link from "next/link";

import {HiArrowTrendingDown,HiArrowTrendingUp,} from 'react-icons/hi2'

import SimpleBarReact from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';

export default function TopProduct(){
    const productData = [
        {
            title:'Techwind',
            earnings:'$4120',
            Progress:'5.5%'
        },
        {
            title:'Landrick',
            earnings:'$5648',
            loss:'15.8%'
        },
        {
            title:'Hously',
            earnings:'$456',
            Progress:'1.3%'
        },
        {
            title:'Jobstack',
            earnings:'$546',
            loss:'1.54%'
        },
        {
            title:'Techwind',
            earnings:'$124',
            loss:'8.5%'
        },
        {
            title:'Upwind',
            earnings:'$1545',
            Progress:'6.4%'
        },
        {
            title:'Fronter',
            earnings:'$1215',
            loss:'4.8%'
        },
        {
            title:'Doctris',
            earnings:'$2321',
            Progress:'4.1%'
        },
    ]
    return(
        <div className="xl:col-span-3 lg:col-span-6">
            <div className="rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                <div className="p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                    <h6 className="text-lg font-semibold">Top Products / Items</h6>

                    <Link href="#" className="text-slate-400 hover:text-indigo-600 dark:text-white/70 dark:hover:text-white text-[20px]"><i className="mdi mdi-swap-vertical"></i></Link>
                </div>
                <SimpleBarReact className="relative overflow-x-auto block w-full max-h-[400px]">
                    <div>
                        <table className="w-full text-start">
                            <thead className="text-base">
                                <tr>
                                    <th className="text-start font-semibold text-[15px] p-4 min-w-[150px]">Products</th>
                                    <th className="text-start font-semibold text-[15px] p-4 min-w-[100px]">Earnings</th>
                                    <th className="text-end font-semibold text-[15px] p-4 min-w-[80px]">Progress</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productData.map((item, index) => {
                                    return(
                                        <tr key={index}>
                                            <th className="text-start border-t border-gray-100 dark:border-gray-800 p-4 font-semibold">{item.title}</th>
                                            <td className="text-start border-t border-gray-100 dark:border-gray-800 p-4">{item.earnings}</td>
                                            <td className="text-end border-t border-gray-100 dark:border-gray-800 p-4">
                                                {item?.Progress ?<span className="text-emerald-600 text-sm ms-1 font-semibold flex items-center"><HiArrowTrendingUp className="me-1"/> {item.Progress}</span> :'' }
                                                {item?.loss ?<span className="text-red-600 text-sm ms-1 font-semibold flex items-center"><HiArrowTrendingDown className="me-1"/> {item.loss}</span> :'' }
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </SimpleBarReact>
            </div>
        </div> 
    )
}