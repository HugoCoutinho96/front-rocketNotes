import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/Auth"
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { api } from "../services"

export function Routes(){

    const {user} = useAuth()
    return(
        <BrowserRouter>
            {user ? <AppRoutes/> : <AuthRoutes/>}
        </BrowserRouter>
    )
}