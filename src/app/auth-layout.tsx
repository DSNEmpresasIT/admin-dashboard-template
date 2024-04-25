"use client";
import { PAGES_PATH } from "@/utils/types/pages";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import AuthLogin from "./login/page";
import { useAuthContext } from "@/context/auth-context";
import { AuthContextTypes } from "@/utils/types/types";
import { loginByToken } from "@/services/auth-services";
import toast from "react-hot-toast";
import { LoaderComponent } from "@/components/commons/LoaderComponent";
import Sidebar from "@/components/commons/sidebar";
import Topnav from "@/components/commons/topnav";
import Footer from "@/components/commons/footer";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  
  const { state, dispatch } = useAuthContext();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [ toggle, setToggle ] = useState(true);

  useEffect(() => {
    if (
      window.sessionStorage.getItem("auth-token") ||
      window.localStorage.getItem("auth-token")
    ) {
      const authToken =
        window.sessionStorage.getItem("auth-token") ??
        window.localStorage.getItem("auth-token");
      loginByToken(authToken).then((response) => {
        if (!response) {
          window.sessionStorage.removeItem("auth-token");
          window.localStorage.removeItem("auth-token");
          return setIsLoading(false);
        }

        dispatch({
          type: AuthContextTypes.LOGIN,
          payload: {
            id: response.user.id,
            email: response.user.email,
            token: authToken,
            userName: response.user.userName,
            role: response.user.role,
            companyId: response.user.companyId
          },
        });
                
        setIsLoading(false);
        toast.success('Bienvenido!!')
      });
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const redirect = window.sessionStorage.getItem("redirect")
    window.sessionStorage.getItem("redirect")
    if (!isLoading && !state.isAuth && pathname !== `/${PAGES_PATH.LOGIN}`) {
      router.push(`/${PAGES_PATH.LOGIN}`);
      window.sessionStorage.setItem("redirect", pathname);
    }

    if(!isLoading && state.isAuth && pathname === `/${PAGES_PATH.LOGIN}`) {
      redirect ? router.push(redirect) : router.push("/");
      window.sessionStorage.removeItem("redirect");
    }
  }, [pathname, state.isAuth, isLoading]);

  return (
    <>
      <LoaderComponent conditional={isLoading} className="w-screen h-screen flex items-center justify-center" />
      { !isLoading && state.isAuth && (

        <div className={`page-wrapper  ${toggle ? "toggled" : ""}`}>
          <Sidebar/>
          <main className="page-content h-full pt-[10vh] bg-gray-50 dark:bg-slate-800">
            <Topnav toggle={toggle} setToggle={setToggle}/>
                {children}
            <Footer/>
          </main>
        </div>
      )}
      { !isLoading && !state.isAuth && (<AuthLogin />) }
    </>
  );
};
