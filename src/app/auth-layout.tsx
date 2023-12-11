'use client'
import { PAGES_PATH } from '@/utils/types/pages';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading ] = useState<boolean>(true);
  const [ isAuth, setIsAuth ] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000)
    // setTimeout(() => {
    //   setIsAuth(true)
    // }, 5000)
  }, [])

  useEffect(() => {
    if (!isAuth && pathname !== `/${PAGES_PATH.LOGIN}`) {
      router.push(`/${PAGES_PATH.LOGIN}`)
    }

    if (isAuth && pathname === `/${PAGES_PATH.LOGIN}`) {
      router.push('/')
    }
  }, [pathname, isAuth, isLoading])

  return (
    <>
      {
        !isLoading 
          ? (children)
          : <span>Autenticando...</span> 
      }
    </>
  )
}
