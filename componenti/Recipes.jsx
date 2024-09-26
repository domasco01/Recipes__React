import { useEffect } from "react"
import { NavLink, useLoaderData, useSearchParams, Link } from "react-router-dom"
import Card from "./Card"
export default function Recipes(){

    const recipes = useLoaderData();
    const [searchParams, setSearchParams] = useSearchParams();

    const typeFilter = searchParams.get("type");
    const displayedRecipes = typeFilter ? recipes.filter(rec => rec.type === typeFilter) : recipes
    console.log(displayedRecipes)


    return(
        <div className="recipe-container">
            <div className="recipe-container1">
                <div className="recipe-container11">
                    <div className="home-container12">
                        <h1>Chefs Academy</h1>
                        <p>Master-Chef website that provides complete and delicious <br />recipes for all foods for all who like to cook and served <br /> simply.</p>
                        <br />
                        <Link to="/" className="get-started-link">Get Started</Link>
                    </div>   
                    <img src="https://cdn.pixabay.com/photo/2022/06/07/14/15/food-7248455_1280.png" alt="img-pizza" />
                </div>
            </div>
            <div className="recipe-container2">
                <div className="recipe-container21">
                    <h2>Recipes</h2>
                    {/* <div className="lista-filtri">
                        <NavLink to="."  className={({ isActive }) => (isActive ? "my-link-active" : "my-link-inactive")}>Tutti</NavLink>
                        <NavLink to="?type=Antipasto"  className={({ isActive }) => (isActive ? "my-link-active" : "my-link-inactive")}>Antipasti</NavLink>
                        <NavLink to="?type=Primo" className={({ isActive }) => (isActive ? "my-link-active" : "my-link-inactive")}>Primi</NavLink>
                        <NavLink to="?type=Secondo" className={({ isActive }) => (isActive ? "my-link-active" : "my-link-inactive")}>Secondi</NavLink>
                        <NavLink to="?type=Dolce" className={({ isActive }) => (isActive ? "my-link-active" : "my-link-inactive")}>Dolci</NavLink>
                    </div> */}
                    <div className="lista-filtri">
    <NavLink 
        to="."  
        className={({ isActive }) => (isActive && !window.location.search ? "my-link-active" : "my-link-inactive")}
        end
    >
        Tutti
    </NavLink>
    <NavLink 
        to="?type=Antipasto"  
        className={({ isActive }) => (isActive && window.location.search.includes("type=Antipasto") ? "my-link-active" : "my-link-inactive")}
    >
        Antipasti
    </NavLink>
    <NavLink 
        to="?type=Primo" 
        className={({ isActive }) => (isActive && window.location.search.includes("type=Primo") ? "my-link-active" : "my-link-inactive")}
    >
        Primi
    </NavLink>
    <NavLink 
        to="?type=Secondo" 
        className={({ isActive }) => (isActive && window.location.search.includes("type=Secondo") ? "my-link-active" : "my-link-inactive")}
    >
        Secondi
    </NavLink>
    <NavLink 
        to="?type=Dolce" 
        className={({ isActive }) => (isActive && window.location.search.includes("type=Dolce") ? "my-link-active" : "my-link-inactive")}
    >
        Dolci
    </NavLink>
</div>
                </div>
                <div className="recipe-container22">
                    
                </div>
            </div>
        </div>
    )
}