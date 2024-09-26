import { useEffect, useState } from "react";
import { useParams, Link, useLoaderData } from "react-router-dom";
import Card from "./Card";
export default function RecipeDetail(){

    const params = useParams();
    const [recipeType, setRecipeType]= useState(null);
    const [recipeName, setRecipeName]= useState(null);

    // USIAMO UN LOADER CHE ESEGUE 2 FECTH, QUELLO DI TUTTE LE RICETTE E QUELLO DI UNA SINGOLA RICETTA. 
    const {allRecipes, singleRecipe} = useLoaderData();

    //Questo effetto è necessario, poichè nel modificare lo stato ci sarebbe ogni volta un re-rendering che causerebbe un ciclo infinito.
    useEffect(() => {
        if (singleRecipe) {
          setRecipeType(singleRecipe.type);
          setRecipeName(singleRecipe.name);
        }
      }, [singleRecipe]);
    

   

    return(
        <div id="recipeDetail">
            <div id="recipeDetail-name">
                {/* TITOLO DELLA RICETTA */}
                {singleRecipe ? <h1 className="recipeDetail-title">{singleRecipe.name}</h1>   : <p>Caricamento...</p>} 
                    
            </div>
            <div id="recipeDetail-1">
                <div id="recipeDetail-11">
                    <div id="recipeDetail-111">
                        {/* LISTA INGREDIENTI */}
                        <h2>INGREDIENTI</h2>
                        <br />
                        <ul className="lista-ingredienti">
                            {
                                singleRecipe ?
                                    (singleRecipe.ingredients.map((ing, idx)=>(
                                        <li key={idx}><b>{ing}</b></li>
                                    )))
                                :
                                    (<p>Caricamento...</p>)

                            }
                        </ul>
                    </div>
                    <div id="recipeDetail-112">
                        <h2>NOTE</h2>
                        {/* NOTE DELLA RICETTA */}
                        <br />
                        {singleRecipe ? <p>{singleRecipe.notes}</p> : <p>Caricamento...</p>}
                    </div>
                    
                </div>
                <div id="recipeDetail-12">
                    <div className="prepTime-container">
                        {/* TEMPO DI PREPARAZIONE E DI COTTURA */}
                        <div className="prepTime">
                            <h2>Tempo di Preparazione</h2><br/>
                            {singleRecipe ? <p>{singleRecipe.prepTime}</p> : <p>Caricamento...</p>}
                        </div>
                        <div className="cookTime">
                            <h2>Tempo di Cottura</h2><br/>
                            {singleRecipe ? <p>{singleRecipe.cookingTime}</p> : <p>Caricamento...</p>}
                        </div>
                    </div>
                    <div className="img-recipe-container">
                        {/* IMMAGINE RICETTA */}
                        {singleRecipe ? <img src={singleRecipe.imgUrl} alt="foto ricetta" /> : <p>Caricamento...</p>}
                    </div>
                    <div id="recipeDetail-istructions">
                        <h2>ISTRUZIONI</h2> <br/>
                        { singleRecipe ? <p>{singleRecipe.instructions}</p> : <p>Caricamento...</p>}
                    </div>
                </div>
            </div>

            <h1 className="ricette-simili-h1">RICETTE SIMILI</h1>
            <div id="recipeDetail-2">
                
                    {
                        singleRecipe ? 
                                // Creazione di un nuovo array filtrato con le ricette dello stesso tipo di quella attuale.
                            allRecipes.filter( rec=> rec.type === recipeType && rec.name !== recipeName)
                                //Creo un array con solo le prime 3 dell'array filtrato.
                            .slice(4,7)
                                //Per ogni elemento creo un link formato dal componente Card
                            .map(rec =>(
                                <Link to={`/recipes/${rec.id}`} key={rec.id} onClick={window.scrollTo({ top: 0, behavior: 'smooth' })} ><Card imgUrl={rec.imgUrl}  name={rec.name} />    </Link>
                            ))
                        :
                        <p>Caricamento...</p>
                    }
                
                
                
            </div>
        </div>
    )
}