"use client"
import React,{useState, useEffect} from "react";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import('@/components/commons/footer'))
const Switcher = dynamic(() => import('@/components/commons/switcher'))

import Sidebar from "@/components/commons/sidebar";
import Topnav from "@/components/commons/topnav";
import { useAuthContext } from "@/context/auth-context";
import { AuthContextState, Roles } from "@/utils/types/types";
import { AdminHomeComponent } from "@/components/home/admin/AdminHomeComponent";


export default function Index() {
  const { state }: {  state:  AuthContextState } = useAuthContext();

  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    // document.documentElement.classList.add('light');
    // document.documentElement.classList.remove('dark');
  }, []);

  const[toggle, setToggle] = useState(true)

  return (
    <>
      { state.user.role === Roles.ADMIN && <AdminHomeComponent /> }
    </>
  )
}
