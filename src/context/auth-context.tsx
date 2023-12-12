'use client'
import { AuthContextAction, AuthContextState, AuthContextTypes } from "@/utils/types/types";
import { createContext, useContext, ReactNode, useReducer } from "react";

const AuthContext = createContext(undefined);

const authContextInitialState: AuthContextState = {
  isAuth: false,
  token: '',
  user: {
    email: '',
    clientName: '',
  }
}

const authReducer = (state: AuthContextState, action: AuthContextAction) => {
  switch (action.type) {
    case AuthContextTypes.LOGIN:
      return {
        isAuth: true,
        token: action.payload.token,
        user: {
          clientName: action.payload.clientName,
          email: action.payload.email
        }
      }
    case AuthContextTypes.LOGOUT:
      return {
        isAuth: false,
        user: {
          clientName: '',
          email: ''
        }
      }
    default:
      return state;
  }  
}

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer<any>(authReducer, authContextInitialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}


export const useAuthContext = () => useContext(AuthContext);

