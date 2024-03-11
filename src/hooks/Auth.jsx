import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services"
import { Form } from "react-router-dom";

export const AuthContext = createContext({})

function AuthProvider({children}){

    const [data, setData] = useState({})

    async function signIn({email, password}){
        try{
            if(!email) return alert("Digite o email.")
            if(!password) return alert("Digite a senha.")

            const response = await api.post("/sessions", {email, password})
            const {user, token} = response.data

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            localStorage.setItem("@rocketnotes:user", JSON.stringify(user))
            localStorage.setItem("@rocketnotes:token", token)
            setData({user})
        }catch(error){
            console.log(error)
            if(error.response){
                alert(error.response.data.message)
            }
            else{
                alert("Não foi possível entrar.")
            }
        }
    }

    function signOut(){
        localStorage.removeItem("@rocketnotes:user")
        localStorage.removeItem("@rocketnotes:token")
        setData({})
    }

    async function updateProfile({user, avatarFile}){
        try{
            if(avatarFile){
                const fileUpdateForm = new FormData()
                fileUpdateForm.append("avatar", avatarFile)

                const response = await api.patch("/users/avatar", fileUpdateForm)
                user.avatar = response.data.avatar
            }

            await api.put("/users", user)
            localStorage.setItem("@rocketnotes:user", JSON.stringify(user))
            setData({user, token: data.token})
            alert("Perfil atualizado!")
        }catch(error){
            if(error.response){
                alert(error.response.data.message)
            }
            else{
                alert("Não foi possível atualizar o perfil")
            }
        }
    }

    useEffect(() => {
        const user = localStorage.getItem("@rocketnotes:user")
        const token = localStorage.getItem("@rocketnotes:token")

        if(user && token){
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({
                user: JSON.parse(user),
                token
            })
        }
    }, [])

    return(
        <AuthContext.Provider value={{signIn, user: data.user, signOut, updateProfile}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    return useContext(AuthContext)
}

export {AuthProvider, useAuth}
