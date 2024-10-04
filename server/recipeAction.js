import { redirect, json } from "react-router-dom";

export async function recipeAction({request}){

    const formData = await request.formData();

    const newRecipe = {
    creataDa : formData.get('creataDa'),
    email : formData.get('email'),
    imgUrl : formData.get('imgUrl'),
    name : formData.get('name'),
    type : formData.get('type'),
    ingredients : formData.get('ingredients').split(',').map(ingredient => ingredient.trim()),
    instructions : formData.get('instructions'),
    notes : formData.get('notes'),
    prepTime : formData.get('prepTime'),
    cookingTime : formData.get('cookingTime')
    }
    
   
    try {
      // Crea un FormData per inviare i dati e l'immagine
      const uploadData = new FormData();

      // Aggiungi i dati del form
      uploadData.append('creataDa', newRecipe.creataDa);
      uploadData.append('email', newRecipe.email);
      uploadData.append('name', newRecipe.name);
      uploadData.append('type', newRecipe.type);
      // uploadData.append('ingredients', newRecipe.ingredients.join(','));
      newRecipe.ingredients.forEach(ingredient => {
        uploadData.append('ingredients[]', ingredient); // Usa 'ingredients[]' per indicare un array
    });
      uploadData.append('instructions', newRecipe.instructions);
      uploadData.append('notes', newRecipe.notes);
      uploadData.append('prepTime', newRecipe.prepTime);
      uploadData.append('cookingTime', newRecipe.cookingTime);

      // Aggiungi l'immagine (il file stesso)
      uploadData.append('imgUrl', formData.get('imgUrl'));  // Assumi che imgUrl sia il nome del file

      // Invia i dati come FormData
      const response = await fetch('http://localhost:3002/api/recipes', {
          method: 'POST',
          body: uploadData  // Non impostare manualmente il Content-Type, FormData lo gestisce
      });

      const data = await response.json();

      if (response.ok) {
          return redirect("/");
      } else {
          alert(`Errore: ${data.message}`);
          return json({ error: data.message }, { status: response.status });
      }
  } catch (error) {
      console.error('Errore nella richiesta:', error);
      alert('Errore nel server');
      return json({ error: 'Errore nel server' }, { status: 500 }); // Restituisci un errore generico

  }
}