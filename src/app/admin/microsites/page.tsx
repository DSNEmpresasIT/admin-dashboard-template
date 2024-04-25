'use client'
import MicrositesTable from '@/components/commons/MicrositesTable';
import Footer from '@/components/commons/footer';
import Sidebar from '@/components/commons/sidebar';
import Topnav from '@/components/commons/topnav';
import { useAuthContext } from '@/context/auth-context';
import { AuthContextState, Roles } from '@/utils/types/types';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Page = () => {
  const router = useRouter();
  const { state: { user: { role } } }: { state: AuthContextState } = useAuthContext();
  const [ toggle, setToggle ] = useState(true);

  useEffect(() => {
    if ( role !== Roles.ADMIN ) {
        router.push('/')
    }
  }, [])

  return (
    <div>
      <MicrositesTable />
    </div>
  )
}
export default Page;
