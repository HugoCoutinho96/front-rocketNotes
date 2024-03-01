import { createContext, useContext, useState } from "react";
import { api } from "../services"

const AuthContext = createContext({})

function AuthProvider({children}){

    const [data, setData] = useState({})

    async function signIn({email, password}){
        try{
            const response = await api.post("/sessions", {email, password})
            const {user, token} = response.data
            api.defaults.headers.authorization = `Bearer ${token}`
            setData(user)
        }catch(error){
            if(error.response)
                alert(error.response.data.message)
            else
                alert("Não foi possível entrar")
        }
    }

    return(
        <AuthContext.Provider value={{signIn, user: data.user}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    return useContext(AuthContext)
}

export {AuthProvider, useAuth}
