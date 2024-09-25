import { Link, useSearchParams } from "react-router-dom"

export default function Recipes(){

    return(
        <>
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
                    <div>
                        <Link to="">Tutti</Link>
                        <Link to="?type=Antipasto">Antipasti</Link>
                        <Link to="?type=Primi">Primi</Link>
                        <Link to="?type=Secondi">Secondi</Link>
                        <Link to="?type=Dolci">Dolci</Link>
                    </div>
                </div>
                <div className="recipe-container22"></div>
            </div>
        </>
    )
}