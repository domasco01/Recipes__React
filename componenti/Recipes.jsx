import { useEffect, useState, useMemo, useDeferredValue } from "react"
import { NavLink, useLoaderData, useSearchParams, Link } from "react-router-dom"
import Card from "./Card"
export default function Recipes(){

    const recipes = useLoaderData();
    const [searchParams, setSearchParams] = useSearchParams();

    const typeFilter = searchParams.get("type");
    const displayedRecipes = typeFilter ? recipes.filter(rec => rec.type === typeFilter) : recipes
    console.log(displayedRecipes)

    const [idsRecipes, setIdsRiceps] = useState([0,9]);
    const [page, setPage] = useState(0);

    const [searchedRecipe, setSearchedRecipe] = useState('');
    const deferredText = useDeferredValue(searchedRecipe);


    function backRecipes(){
        if (idsRecipes[0] > 0) {
            setIdsRiceps((idsRecipes)=>[idsRecipes[0]-9,idsRecipes[1]-9]);
            setPage((page)=>page-1)
        }
    }

    function onRecipes(){
        if (idsRecipes[1] < displayedRecipes.length) {
            setIdsRiceps((idsRecipes)=>[idsRecipes[0]+9,idsRecipes[1]+9]);
            setPage((page)=>page+1)
        }
    }

    function resetRiceps(){
        setIdsRiceps([0,9]);
        setPage(0);
    }

    function filtraBarra(e){
        setSearchedRecipe(e.target.value.toLowerCase());
    }
    

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

                    {/* FILTRI PER TIPO */}
                    
                    <div className="lista-filtri">
                        <NavLink 
                            to="."  
                            className={({ isActive }) => (isActive && !window.location.search ? "my-link-active" : "my-link-inactive")}
                            onClick={resetRiceps}
                            end
                        >
                            Tutti
                        </NavLink>
                        <NavLink 
                            to="?type=Antipasto"  
                            className={({ isActive }) => (isActive && window.location.search.includes("type=Antipasto") ? "my-link-active" : "my-link-inactive")}
                            onClick={resetRiceps}
                        >
                            Antipasti
                        </NavLink>
                        <NavLink 
                            to="?type=Primo" 
                            className={({ isActive }) => (isActive && window.location.search.includes("type=Primo") ? "my-link-active" : "my-link-inactive")}
                            onClick={resetRiceps}
                        >
                            Primi
                        </NavLink>
                        <NavLink 
                            to="?type=Secondo" 
                            className={({ isActive }) => (isActive && window.location.search.includes("type=Secondo") ? "my-link-active" : "my-link-inactive")}
                            onClick={resetRiceps}
                        >
                            Secondi
                        </NavLink>
                        <NavLink 
                            to="?type=Dolce" 
                            className={({ isActive }) => (isActive && window.location.search.includes("type=Dolce") ? "my-link-active" : "my-link-inactive")}
                            onClick={resetRiceps}
                        >
                            Dolci
                        </NavLink>
                    </div>
                </div>

                {/* CONTENITORE IN CUI VENGONO INSERITE LE CARD CHE RAPPRESENTANO LE RICETTE */}

                <div className="recipe-container22">
                    <div className="recipe-container221">
                        
                        <input type="text" id="ricette" name="ricette" placeholder="Cerca ricetta" value={searchedRecipe} onChange={filtraBarra}/>
                    </div>
                    <div className="recipe-container222">
                        {
                        !deferredText.trim() ?
                            displayedRecipes.slice(idsRecipes[0],idsRecipes[1]).map(recipe =>(
                                <Link to={`/recipes/${recipe.id}`} key={recipe.id}><Card name={recipe.name} imgUrl={recipe.imgUrl} /></Link>
                            ))
                        :
                            displayedRecipes.filter(recipe => recipe.name.toLowerCase().startsWith(deferredText))
                            .map(recipe =>(
                                <Link to={`/recipes/${recipe.id}`} key={recipe.id}><Card name={recipe.name} imgUrl={recipe.imgUrl} /></Link>
                            ) )
                        }
                    </div>
                    
                </div>
            </div>

                {/* PULSANTI PER SFOGLIARE LE CARD DI RICETTE */}

            {!deferredText.trim() ?
                <div className="recipe-container3">
                        <button className="sfoglia-ricette" onClick={backRecipes} disabled={idsRecipes[0]===0}>Indietro</button>
                        <h3>{page}</h3>
                        <button className="sfoglia-ricette" onClick={onRecipes} disabled={idsRecipes[1] >= displayedRecipes.length}>Avanti</button>
                </div>
            :
            null
            }
        </div>
    )
}