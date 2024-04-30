import CompanyTable from '@/components/commons/CompanyTable'
import UserTable from '@/components/commons/UserTable'
import Order from '@/components/commons/order'
import UserProfileTab from '@/components/commons/userProfileTab'
import { useAuthContext } from '@/context/auth-context'
import { getAllCompanies } from '@/services/company-service'
import { CompanyDto } from '@/utils/types/dto/dto'
import { AuthContextState } from '@/utils/types/types'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const tableLimits: number = 5;

export const AdminHomeComponent = () => {
  const { state }: { state: AuthContextState } = useAuthContext();
  const [ allCompaniesData, setAllCompaniesData ] = useState<CompanyDto[]>();
  const [ isCompaniesLoading, setIsCompaniesLoading ] = useState<boolean>(true);

  useEffect(() => {
    getAllCompanies(state.token, null, tableLimits)
      .then((companies: CompanyDto[]) => setAllCompaniesData(companies))
      .catch((err: string) => toast.error(err))
      .finally(() => setIsCompaniesLoading(false))
  }, [])

  return (
    <div className="container-fluid relative pb-5 px-3">
      <div className="grid grid-cols-1">
        <div className="profile-banner relative text-transparent rounded-md shadow dark:shadow-gray-700 overflow-hidden">
            <div className="relative shrink-0">
            <Image src='/images/blog/bg.jpg' width={0} height={0} sizes="100vw" placeholder="blur" blurDataURL="/images/blog/bg.jpg" style={{width:"100%", height:"auto"}} className="h-80 w-full object-cover" id="profile-banner" alt=""/>
                <div className="absolute inset-0 bg-black/70"></div>
                <label className="absolute inset-0 cursor-pointer" htmlFor="pro-banner"></label>
            </div>
        </div>
        <div className="grid md:grid-cols-12 grid-cols-1">
          <UserProfileTab />
        </div>
        <div className="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-6">
            <CompanyTable companies={allCompaniesData} isLoading={isCompaniesLoading} isHome={true} />
            <UserTable />
            <Order/>
        </div> 
      </div>
    </div>
  )
}
