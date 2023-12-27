import { useAuthContext } from "@/context/auth-context";
import { login } from "@/services/auth-services";
import { AuthContextTypes, LoginFormData } from "@/utils/types/types";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";

const initialState: LoginFormData = {
  email: '',
  password: ''
}

export const LoginFormComponent = () => {
  const [ formData, setFormData ] = useState<LoginFormData>(initialState);
  const [ wantToRemember, setWantToRemember ] = useState<boolean>(false);
  const { dispatch} = useAuthContext()

  const handleInputChange = (e) => {
    const target = e.target;

    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email.length < 4 || formData.password.length < 4) {
      return toast.error('Por favor, ingresar un email y contraseña válidos')
    }

    login(formData)
      .then((res) => {
        if (wantToRemember) {
          window.localStorage.setItem('auth-token', res.token)
        } else {
          window.sessionStorage.setItem('auth-token', res.token)
        }

        dispatch({
          type: AuthContextTypes.LOGIN,
          payload: {
            email: res.user.email,
            clientName: res.user.clientName,
            token: res.token,
            userName: res.user.userName
          }
        });

        toast.success('Sesion iniciada correctamente!')
      })
      .catch((err) => toast.error(err.message))
  }

  return (
    <form className="text-start" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1">
        <div className="mb-4">
          <label className="font-semibold" htmlFor="LoginEmail">
            Email:
          </label>
          <input
            id="LoginEmail"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
            placeholder="su-email@ejemplo.com"
          />
        </div>

        <div className="mb-4">
          <label className="font-semibold" htmlFor="LoginPassword">
            Contraseña:
          </label>
          <input
            id="LoginPassword"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
            placeholder="Contraseña:"
          />
        </div>

        <div className="flex justify-between mb-4">
          <div className="flex items-center mb-0">
            <input
              className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2"
              type="checkbox"
              onChange={() => setWantToRemember(!wantToRemember)}
              value=""
              id="RememberMe"
              checked={wantToRemember}
            />
            <label
              className="form-checkbox-label text-slate-400"
              htmlFor="RememberMe"
            >
              Recordarme
            </label>
          </div>
          {/**
           * <p className="text-slate-400 mb-0">
                <Link href="/auth-re-password" className="text-slate-400">
                  Forgot password ?
                </Link>
              </p>
           * 
           */}
        </div>

        <div className="mb-4">
          <input
            type="submit"
            className="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full"
            value="Login / Sign in"
          />
        </div>

        <div className="text-center">
          <span className="text-slate-400 me-2">Dont have an account ?</span>{" "}
          <Link
            href="/auth-signup"
            className="text-black dark:text-white font-bold inline-block"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </form>
  );
};
