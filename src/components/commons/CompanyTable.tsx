import React from "react";
import Link from "next/link";


import SimpleBarReact from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';

import {FiArrowRight} from 'react-icons/fi'
import { CompanyTableInterface } from "@/utils/types/types";

interface CompanyTableProps {
    className?: string;
}

export default function CompanyTable({ className }: CompanyTableProps){
    const companyData: CompanyTableInterface[] = [
        {
          logo: '',
          companyName: 'DSN Empresas',
          microsites: true,
          projects: 5,
          users: 7
        },
        {
          logo: '',
          companyName: 'Felis memendez',
          microsites: false,
          projects: 10,
          users: 8
        },
        {
          logo: '',
          companyName: 'DSN Empresas',
          microsites: false,
          projects: 15,
          users: 27
        },
        {
          logo: '',
          companyName: 'DSN Empresas',
          microsites: true,
          projects: 5,
          users: 7
        },
    ]
    return(
        <>
            <div className={`xl:col-span-12 lg:col-span-12 ${className}`}>
                <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                    <div className="p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                        <h6 className="text-lg font-semibold">Companias</h6>
                        
                        <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white after:bg-indigo-600 dark:after:bg-white duration-500">Ver todas las companías <FiArrowRight className="ms-1 text-sm"/></Link>
                    </div>
                    <SimpleBarReact className="max-h-[600px]"> 
                        <div className="relative overflow-x-auto block w-full">
                            <table className="w-full text-start">
                                <thead className="text-base">
                                    <tr>
                                        <th className="text-center font-semibold text-[15px] p-4 min-w-[128px]"></th>
                                        <th className="text-center font-semibold text-[15px] p-4 min-w-[128px]">Nombre</th>
                                        <th className="text-center font-semibold text-[15px] p-4 min-w-[128px]">Usuarios</th>
                                        <th className="text-center font-semibold text-[15px] p-4 min-w-[128px]">Micrositio</th>
                                        <th className="text-center font-semibold text-[15px] p-4 min-w-[128px]">Proyectos</th>
                                        <th className="text-center font-semibold text-[15px] p-4 min-w-[128px]"></th>
                                        <th className="text-center font-semibold text-[15px] p-4 min-w-[128px]"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {companyData.map((item, index) => {
                                        return(
                                            <tr key={index}>
                                                <td className="text-center border-t border-gray-100 dark:border-gray-800 p-4">{item.logo}</td>
                                                <td className="text-center border-t border-gray-100 dark:border-gray-800 p-4">
                                                    <span className="text-slate-400">{item.companyName}</span>
                                                </td>
                                                <td className="text-center border-t border-gray-100 dark:border-gray-800 p-4">{item.users}</td>
                                                <td className="text-center border-t border-gray-100 dark:border-gray-800 p-4">
                                                    {item.microsites ?  <span className="bg-emerald-600/10 dark:bg-emerald-600/20 border border-emerald-600/10 dark:border-emerald-600/20 text-emerald-600 text-[12px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Creado</span> : <span className="bg-red-600/10 dark:bg-red-600/20 border border-red-600/10 dark:border-red-600/20 text-red-600 text-[12px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">No creado</span> }
                                                </td>
                                                <td className="text-center border-t border-gray-100 dark:border-gray-800 p-4">{item.projects}</td>
                                                <td className="text-center border-t border-gray-100 dark:border-gray-800 p-4">Editar</td>
                                                <td className="text-center border-t border-gray-100 dark:border-gray-800 p-4">Ver perfil</td>

                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </SimpleBarReact>
                </div>
            </div>
        </>
    )
}