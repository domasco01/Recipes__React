import { Outlet, NavLink } from "react-router-dom"
import Footer from "./Footer"
import { AuthContext } from './AuthContext'; // Importa il contesto di autenticazione
import { useContext } from "react";


export default function LayoutMenu(){
    const { auth, login, logout } = useContext(AuthContext); // Usa il contesto per ottenere lo stato di autenticazione
    console.log({auth})
    return(
        <>
            <header>
                <div className="side-link-container1">
                    <NavLink to="/" ><h2>MasterChef</h2></NavLink>
                </div>
                <div className="navigation">
                    <NavLink to="/"className={({ isActive }) => (isActive ? "link-active" : "menu-link")}>Home</NavLink>
                    <NavLink to="/recipes"className={({ isActive }) => (isActive ? "link-active" : "menu-link")}>Ricette</NavLink>
                    <NavLink to="/contact"className={({ isActive }) => (isActive ? "link-active" : "menu-link")}>Contatti</NavLink>
                    <NavLink to="/support"className={({ isActive }) => (isActive ? "link-active" : "menu-link")}>About us</NavLink>
                    {auth === 'auth'?(
                        <NavLink to="/personalArea"className={({ isActive }) => (isActive ? "link-active" : "menu-link")}>Area Personale</NavLink>
                    ):null }
                </div>
                <div className="side-link-container2">
                    { auth === 'auth'?
                        <button onClick={logout} className="logout-btn">Logout</button>
                        :
                        <>
                            <NavLink to="/login" className="menu-link">Login</NavLink> 
                            <div className="sign-up-link"><NavLink to="/register" className="sign-up-btn">Iscriviti</NavLink></div> 
                        </>
                    }
                   
                </div>
            </header>
            <Outlet />
            <Footer />
        </>
    )
}
