'use client'
import { CreateCompanyForm } from '@/components/admin/companies/CreateCompanyForm';
import CompanyTable from '@/components/commons/CompanyTable';
import Footer from '@/components/commons/footer';
import Sidebar from '@/components/commons/sidebar';
import Switcher from '@/components/commons/switcher';
import Topnav from '@/components/commons/topnav';
import { useAuthContext } from '@/context/auth-context';
import { AuthContextState, Roles } from '@/utils/types/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

import * as Icon from 'react-feather';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Page = () => {
  const router = useRouter();
  const { state: { user: { role } } }: { state: AuthContextState } = useAuthContext();

  const [ modal, setModal ] = useState<boolean>(false);

  useEffect(() => {
    if ( role !== Roles.ADMIN ) {
        router.push('/')
    }
  }, [])

  return (
    <div className='p-3'>
      <div className="md:flex justify-between items-center">
        <div>
          <h5 className="text-lg font-semibold">Admin / Listado de companías</h5>

          <ul className="tracking-[0.5px] inline-flex items-center mt-2">
            <li className="inline-block capitalize text-[14px] font-bold duration-500 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white">
              <Link href="/">Dashboard</Link>
            </li>
            <li className="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <MdKeyboardArrowRight />
            </li>
            <li
              className="inline-block capitalize text-[14px] font-bold text-indigo-600 dark:text-white"
              aria-current="page"
            >
              Companías
            </li>
          </ul>
        </div>

        <div>
          <button
            onClick={() => setModal(!modal)}
            type="button"
            className="h-8 cursor-pointer w-auto inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-800/5 hover:bg-gray-800/10 dark:bg-gray-800 border border-gray-800/5 dark:border-gray-800 text-slate-900 dark:text-white rounded-full"
          >
            <span className="text-[15px]">Crear companía</span>
            <Icon.Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
      <CompanyTable className='mt-5' />
      <CreateCompanyForm modal={modal} setModal={setModal} />
    </div>
  )
}

export default Page;
