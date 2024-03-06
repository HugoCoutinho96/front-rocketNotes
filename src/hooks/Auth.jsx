import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services"

export const AuthContext = createContext({})

function AuthProvider({children}){

    const [data, setData] = useState({})

    async function signIn({email, password}){
        try{
            const response = await api.post("/sessions", {email, password})
            const {user, token} = response.data
            api.defaults.headers.authorization = `Bearer ${token}`
            localStorage.setItem("@rocketnotes:user", JSON.stringify(user))
            localStorage.setItem("@rocketnotes:token", token)
            setData({user})
        }catch(error){
            if(error.response)
                alert(error.response.data.message)
            else
                alert("Não foi possível entrar")
        }
    }

    function signOut(){
        localStorage.removeItem("@rocketnotes:user")
        localStorage.removeItem("@rocketnotes:token")
        setData({})
    }

    useEffect(() => {
        const user = localStorage.getItem("@rocketnotes:user")
        const token = localStorage.getItem("@rocketnotes:token")

        if(user && token){
            api.defaults.headers.authorization = `Bearer ${token}`

            setData({
                user: JSON.parse(user),
                token
            })
        }
    }, [])

    return(
        <AuthContext.Provider value={{signIn, user: data.user, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    return useContext(AuthContext)
}

export {AuthProvider, useAuth}
