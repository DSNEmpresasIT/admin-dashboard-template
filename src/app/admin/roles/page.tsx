'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import * as Icons from 'react-feather';

import { MdKeyboardArrowRight } from 'react-icons/md';
import { RoleCard } from '@/components/admin/roles/RoleCard';
import { CreateRoleForm } from '@/components/admin/roles/CreateRoleForm';
import { getRoles } from '@/services/roles-services';
import { RoleData } from '@/utils/types/types';
import { LoaderComponent } from '@/components/commons/LoaderComponent';
import toast from 'react-hot-toast';

const Page = () => {
  const [ modal, setModal ] = useState<boolean>(false); 
  const [ isLoading, setIsLoading ] = useState<boolean>(true);
  const [ rolesList, setRolesList ] = useState<RoleData[]>()

  useEffect(() => {
    getRoles()
      .then(response => setRolesList(response))
      .catch(err => toast.error(err.message))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <div className='px-3'>
      <div className="md:flex justify-between items-center">
        <div>
          <h5 className="text-lg font-semibold">Admin / Listado de roles</h5>

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
              Roles
            </li>
          </ul>
        </div>

        {/* <div>
          <button
            type="button"
            onClick={() => setModal(!modal)}
            className="h-8 cursor-pointer w-auto inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-800/5 hover:bg-gray-800/10 dark:bg-gray-800 border border-gray-800/5 dark:border-gray-800 text-slate-900 dark:text-white rounded-full"
          >
            <span className="text-[15px] mr-3">Crear rol</span>
            <Icons.Plus className="h-4 w-4" />
          </button>
        </div> */}
      </div>
      <div className='grid xl:grid-cols-5 md:grid-cols-3 grid-cols-1 mt-6 gap-6'>
        <LoaderComponent conditional={isLoading} />
        {
          (!isLoading && rolesList?.length) 
            ? (rolesList.map(role => (<RoleCard role={role} key={role.id} />)))
            : (<span>No hay roles creados... puede crear alguno!</span>)
        }
      </div>
      <CreateRoleForm modal={modal} setModal={setModal} />      
    </div>
  )
}

export default Page;
