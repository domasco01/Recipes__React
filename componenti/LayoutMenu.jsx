import { Outlet, NavLink } from "react-router-dom"
import Footer from "./Footer"

export default function LayoutMenu(){

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
                </div>
                <div className="side-link-container2">
                   <NavLink to="/login" className="menu-link">Login</NavLink> 
                   <div className="sign-up-link"><NavLink to="/" className="sign-up-btn">Iscriviti</NavLink></div> 
                </div>
            </header>
            <Outlet />
            <Footer />
        </>
    )
}
