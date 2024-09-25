import { useEffect, useState } from "react";
import { useParams, Link, useLoaderData } from "react-router-dom";
import Card from "./Card";
export default function RecipeDetail(){

    const params = useParams();
	console.log(params);
    // const [recipe, setRecipe] = useState(null);
    const [recipeType, setRecipeType]= useState(null);
    // const [allRecipes, setRecipesArray] = useState([]);

    const {allRecipes, singleRecipe} = useLoaderData();
    // singleRecipe ? setRecipeType(singleRecipe.type) : null;

    useEffect(() => {
        if (singleRecipe) {
          setRecipeType(singleRecipe.type);
        }
      }, [singleRecipe]);
    

    //Primo effetto. Creo una funzione che con fetch e useParams recupera la ricetta selezionata, che verrà assegnata allo stato recipe.
    //Inoltre verrà salvato il tipo della ricetta che servirà dopo per consigliare ricette dello stesso tipo.

    // useEffect(()=>{
    //     const controller = new AbortController(); // Crea un nuovo AbortController
    //     const signal = controller.signal; // Ottieni il segnale di abort
        
    //     async function fetchRecipeDetail() {
    //         const request = await fetch(`http://localhost:3002/api/recipes/${params.id}`)
    //         const data = await request.json();
    //         console.log(data)
    //         setRecipe(data)
    //         setRecipeType(data.type)
    //     }
    //     fetchRecipeDetail();

    //     //Funzione di pulizia
    //     return () => {
    //         controller.abort(); // Annulla la richiesta in corso
    //     };
    // },[params.id])


    //Secondo effetto. Creo una funzione che recupera tutte le ricette. Questa funzione mi servirà per poi andare a consigliare solo le ricette simili a quella attuale.
    // useEffect(()=>{
    //     async function fetchAllRecipes(){
    //         const request = await fetch("http://localhost:3002/api/data");
    //         const data = await request.json();
    //         setRecipesArray(data);
    //     }

    //     fetchAllRecipes()

    // },[])

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
                                    (singleRecipe.ingredients.map(ing=>(
                                        <li><b>{ing}</b></li>
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
                            allRecipes.filter( rec=> rec.type === recipeType)
                                //Creo un array con solo le prime 3 dell'array filtrato.
                            .slice(0,3)
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