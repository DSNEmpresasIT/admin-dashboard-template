'use client'
import React, { useEffect, useState } from 'react'
import UserTable from '@/components/commons/UserTable';
import Footer from '@/components/commons/footer';
import Sidebar from '@/components/commons/sidebar';
import Switcher from '@/components/commons/switcher';
import Topnav from '@/components/commons/topnav';
import { useRouter } from 'next/navigation';
import { AuthContextState, Roles } from '@/utils/types/types';
import { useAuthContext } from '@/context/auth-context';

const Page = () => {
  const router = useRouter();
  const { state: { user: { role } } }: { state: AuthContextState } = useAuthContext();

  useEffect(() => {
    if ( role !== Roles.ADMIN ) {
        router.push('/')
    }
  }, [])

  return (
    <div>
      <UserTable />
    </div>
  )
}

export default Page;
