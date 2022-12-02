import {createContext, useEffect, useState } from "react";
import { User } from "../../@types/User";
import { useApi } from "../../hooks/useApi";

export type AtuhContextType = {
  user: User | null;
  signin: (email: string, password: string) => Promise<boolean>
  singout: () => void;
}


export const AuthContext = createContext<AtuhContextType>(null!, )

export const AuthProvider = ({children}: {children: JSX.Element}) => {

    const[user, setUser] = useState<User | null>(null)

    const api = useApi()


    useEffect(() =>{

      const validaToken = async () => {
        const storageData = localStorage.getItem('authToken')

      if(storageData){
        const data = await api.validateToken(storageData)
        if(data.user){
          setUser(data.user)
        }
      }
      }

      validaToken()
        
      

    },[])

    

    const signin = async (email: string, password: string) => {
        const data = await api.signin(email, password)

        if(data.user && data.token){
          setUser(data.user)
          setToken(data.token)
          return true
        }

        return false
    }  

    const singout = async () => {

      await api.logout()
      setUser(null)
      localStorage.removeItem('authToken')
    }

    const setToken = (token: string) => {
      localStorage.setItem('authToken', token)
    }

      return(
        <AuthContext.Provider value={{user, signin, singout} }>
            {children}
        </AuthContext.Provider>
      )
}
