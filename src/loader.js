

export async function getRecipes(){
    const request = await fetch("http://localhost:3002/api/data");
    if (!request.ok) {
        throw {
            message: "Failed to fetch recipes", 
            statusText: request.statusText,
            status: request.status
        }
    }
    const data = await request.json();
    return data;
}







export async function loaderRecipeDetail({params}){

    const [AllRecipes, SingleRecipes] = await Promise.all([
        fetch("http://localhost:3002/api/data"),
        fetch(`http://localhost:3002/api/recipes/${params.id}`)
    ]);

    if (!AllRecipes.ok || !SingleRecipes.ok) {
        throw new Response('Errore durante il caricamento dei dati', { status: 500 });
    }

    const allRecipes = await AllRecipes.json();
    const singleRecipe = await SingleRecipes.json();

    return { allRecipes, singleRecipe };
}

      
      
      