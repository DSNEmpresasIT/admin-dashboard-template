import React from "react";
import Link from "next/link";


import SimpleBarReact from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';

import { FiArrowRight } from 'react-icons/fi'
import { CompanyDto } from "@/utils/types/dto/dto";
import { LoaderComponent } from "./LoaderComponent";
import { PAGES_PATH } from "@/utils/types/pages";

interface CompanyTableProps {
    className?: string;
    companies: CompanyDto[];
    isLoading: boolean;
    isHome?: boolean;
}

export default function CompanyTable({ className, companies, isLoading, isHome }: CompanyTableProps){
    return(
        <>
            <div className={`xl:col-span-12 lg:col-span-12 ${className}`}>
                <LoaderComponent conditional={isLoading} />
                {
                    !isLoading && (
                        <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                            <div className="p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                                <h6 className="text-lg font-semibold">Companias</h6>
                                
                                {
                                    isHome && (
                                        <Link href={`${PAGES_PATH.ADMIN_COMPANIES}`} className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white after:bg-indigo-600 dark:after:bg-white duration-500">Ver todas las companías <FiArrowRight className="ms-1 text-sm"/></Link>
                                    )
                                }
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
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {companies?.length && companies.map((item, index) => {
                                                return(
                                                    <tr key={index}>
                                                        <td className="text-center border-t border-gray-100 dark:border-gray-800 p-4">{item.logo}</td>
                                                        <td className="text-center border-t border-gray-100 dark:border-gray-800 p-4">
                                                            <span className="text-slate-400">{item.company_name}</span>
                                                        </td>
                                                        <td className="text-center border-t border-gray-100 dark:border-gray-800 p-4">{item.users.length}</td>
                                                        <td className="text-center border-t border-gray-100 dark:border-gray-800 p-4">
                                                            {item.microsite ?  <span className="bg-emerald-600/10 dark:bg-emerald-600/20 border border-emerald-600/10 dark:border-emerald-600/20 text-emerald-600 text-[12px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Creado</span> : <span className="bg-red-600/10 dark:bg-red-600/20 border border-red-600/10 dark:border-red-600/20 text-red-600 text-[12px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">No creado</span> }
                                                        </td>
                                                        <td className="text-center border-t border-gray-100 dark:border-gray-800 p-4">{item.projects.length}</td>
                                                        <td className="text-center border-t border-gray-100 dark:border-gray-800 p-4">Ver perfil</td>

                                                    </tr>
                                                )
                                            })}
                                            {
                                                !companies || !companies?.length && (
                                                    <tr>
                                                        No hay companías disponibles
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </SimpleBarReact>
                        </div>
                    )
                }
            </div>
        </>
    )
}