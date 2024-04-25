import { RoleData } from '@/utils/types/types';
import Link from 'next/link'
import React from 'react'

import * as Icons from 'react-feather';
import { FiArrowRight } from 'react-icons/fi';

interface RoleDataProps {
  role: RoleData;  
}

export const RoleCard = ({ role }: RoleDataProps) => {
  return (
    <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
      <div className="p-5 flex items-center">
          <span className="flex justify-center items-center rounded-md h-14 w-14 min-w-[56px] bg-indigo-600/5 dark:bg-indigo-600/10 shadow shadow-indigo-600/5 dark:shadow-indigo-600/10 text-indigo-600">
              <Icons.Terminal className="h-5 w-5"/>
          </span>

          <span className="ms-3">
              <span className="text-slate-400 font-semibold block">Rol</span>
              <span className="flex items-center justify-between mt-1">
                  <span className="text-xl font-semibold"><span className="counter-value">{role.name}</span></span>
              </span>
          </span>
      </div>

      {/* <div className="px-5 py-2 bg-gray-50 dark:bg-slate-800">
          <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-indigo-600 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white after:bg-indigo-600 dark:after:bg-white duration-500">Ver usuarios <FiArrowRight className="ms-1"/></Link>
      </div>
      <div className="px-5 py-2 bg-gray-50 dark:bg-slate-800">
          <button type="button" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-indigo-600 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white after:bg-indigo-600 dark:after:bg-white duration-500">Editar <FiArrowRight className="ms-1"/></button>
      </div> */}
    </div>
  )
}
