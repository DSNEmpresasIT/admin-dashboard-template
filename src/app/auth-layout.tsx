"use client";
import { PAGES_PATH } from "@/utils/types/pages";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import AuthLogin from "./login/page";
import { useAuthContext } from "@/context/auth-context";
import { AuthContextTypes } from "@/utils/types/types";
import { loginByToken } from "@/services/auth-services";
import toast from "react-hot-toast";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { state, dispatch } = useAuthContext();
  const pathname = usePathname();
  const router = useRouter();

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
            clientName: response.user.clientName,
            email: response.user.email,
            token: authToken,
            userName: response.user.userName
          },
        });
                
        setIsLoading(false);
        toast.success('Logged!')
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

  if (isLoading) {
    return <span>Autenticando...</span>
  }

  return (
    <>
      { !isLoading && state.isAuth && (children) }
      { !isLoading && !state.isAuth && (<AuthLogin />) }
    </>
  );
};
