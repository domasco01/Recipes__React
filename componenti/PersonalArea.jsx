import { useEffect, useState } from "react";
import { Form, useLoaderData, useLocation, Link } from "react-router-dom"
import Card from "./Card";
export default function PersonalArea(){

    const recipes = useLoaderData(); 
    console.log(recipes)
    const location = useLocation();
    const username  = location.state ;
    console.log(username)

    const recipeObj = {
        creataDa : "",
        email : "",
        imgUrl : "" ,
        name : "",
        type : "", 
        ingredients : "",
        instructions : "",
        notes : "",
        prepTime : "",
        cookingTime :""
    }

    



    const [userRecipe, setUserRecipe] = useState(recipeObj);
    
    function handleChange(e){
        setUserRecipe(
            {
                ...userRecipe,
                [e.target.name] : e.target.value
            }
        )
    }

    function handleImageChange(e) {
        const file = e.target.files[0];
        setUserRecipe({...userRecipe, imgUrl: file});
        console.log(userRecipe.imgUrl)
    }

    

    function handleSubmit(e){
        e.preventDefault();

        const ingredientsArray = typeof userRecipe.ingredients === 'string' 
        ? userRecipe.ingredients.split(',') 
        : userRecipe.ingredients;

        setUserRecipe(
            {
                ...userRecipe, ingredients : ingredientsArray,
            }

        )

        if (!userRecipe.name || !userRecipe.ingredients || !userRecipe.instructions || !userRecipe.prepTime || !userRecipe.cookingTime) {
            alert('Per favore, compila tutti i campi obbligatori.');
            return;
        }

        
        if ( !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userRecipe.email)) {
            alert("Formato email non valido");
        }

        if (!/^\d+(s|m|h)$/.test(userRecipe.prepTime)) {
            alert("Tempo di preparazione non valido");
        }

        if (!/^\d+(s|m|h)$/.test(userRecipe.cookingTime)) {
            alert("Tempo di cottura non valido");
        }

        

    }

    useEffect(()=>{
        userRecipe.imgUrl ?
            console.log(userRecipe.imgUrl) :
            console.log('immagine  non cè')
    },[userRecipe.imgUrl])

    
    return(
        <div className="personal-area-container">
            <h1> CREA LA TUA RICETTA</h1>
            <p className="personal-area-container-p1">Crea la tua ricetta e mettila a disposizione degli altri utenti</p>
            <div className="personal-area-container1">
                <div className="personal-area-container11">
                    <h1>La tua ricetta</h1><br/>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ratione!<br/><br/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque pariatur, fugit quidem dignissimos corrupti velit.<br/><br/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nam ducimus? Corporis asperiores esse mollitia?<br/><br/>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, molestiae.<br/><br/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nisi omnis assumenda eaque ipsa, eum deserunt explicabo, laborum distinctio eveniet dicta veritatis, quis quasi odio?
                    </p>
                </div>
                <div className="personal-area-container12">
                    <Form  method="post" encType="multipart/form-data" >
                        
                        <label htmlFor="creataDa">Ricetta creata da</label><br/>
                        <input type="text" name="creataDa" placeholder="Il tuo nome" value={userRecipe.creataDa} onChange={handleChange} /><br/><br/>

                        <label htmlFor="email">Email</label><br/>
                        <input type="email" name="email" placeholder="La tua email" value={userRecipe.email} onChange={handleChange} /><br/><br/>

                        <label htmlFor="name">Titolo ricetta</label><br/>
                        <input type="text" name="name" placeholder="Inserisci titolo" value={userRecipe.name} onChange={handleChange} /><br/><br/>
                        
                        <label htmlFor="imgUrl">Inserisci immagine</label><br />
                        <input type="file" accept="image/*" name="imgUrl" onChange={handleImageChange} /><br/><br/>

                        <label htmlFor="type">Tipo di ricetta</label><br/>
                        <select name="type" value={userRecipe.type} onChange={handleChange}>
                            <option value=""> Seleziona </option>
                            <option value="Antipasto"> Antipasto </option>
                            <option value="Primo"> Primo </option>
                            <option value="Secondo"> Secondo </option>
                            <option value="Dolce"> Dolce </option>
                        </select><br/><br/>


                        <label htmlFor="ingredients">Ingredienti (Separali da una virgola)</label><br/>
                        <textarea 
                            name="ingredients" 
                            value={userRecipe.ingredients} 
                            onChange={handleChange} 
                        >
                        </textarea><br /><br />


                        <label htmlFor="instructions">Istruzioni</label><br/>
                        <textarea 
                            name="instructions"
                            value={userRecipe.instructions} 
                            onChange={handleChange} 
                        ></textarea><br /><br />


                        <label htmlFor="notes">Note</label><br/>
                        <textarea 
                            name="notes" 
                            value={userRecipe.notes} 
                            onChange={handleChange} 
                        ></textarea><br /><br />

                        <label htmlFor="prepTime">Tempo di preparazione (indicare secondi, minuti e ore con s,m,h)</label><br/>
                        <input 
                            type="text" 
                            name="prepTime"
                            value={userRecipe.prepTime} 
                            onChange={(e)=> setUserRecipe({...userRecipe, prepTime : e.target.value })} 
                            style={{width:"25%", height:"32px", marginRight:"10px"}} 
                        /><br/><br/>

                        <label htmlFor="cookingTime">Tempo di cottura (indicare secondi, minuti e ore con s,m,h)</label><br/>
                        <input 
                            type="text"
                            name="cookingTime" 
                            value={userRecipe.cookingTime}
                            onChange={(e)=> setUserRecipe({...userRecipe, cookingTime : e.target.value})}
                            style={{width:"25%", height:"32px", marginRight:"10px"}} 
                        /><br/><br/>
                        

                        <button type="submit" onSubmit={handleSubmit}>Carica ricetta</button>
                    </Form>
                </div>
            </div>
            <br/>
            <br/>
            <h1>Le tue ricette</h1>
            <div className="personal-area-container2">
                {
                    recipes ?
                        recipes.filter((recipe)=>
                            recipe.email === username.username
                        ).map((rec)=>(
                            <Link to={`/recipes/${rec.id}`}> <Card imgUrl={rec.imgUrl}  name={rec.name} /></Link>
                        ))
                    :
                        null
                }
            </div>
            
        </div>
        
    )
}