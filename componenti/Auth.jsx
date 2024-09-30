import { Navigate } from "react-router-dom";


export default function Auth(){

    isLogged = true;

    if (!isLogged){
        return <Navigate to="/login" />
    }

    return <Outlet />

}