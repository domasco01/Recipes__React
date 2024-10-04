import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import './index.css'
import Home from "../componenti/Home"
import Contact from "../componenti/Contact"
import Support from '../componenti/Support'
import LayoutMenu from "../componenti/LayoutMenu"
import Recipes from "../componenti/Recipes"
import RecipeDetail from "../componenti/RecipeDetail"
import ErrorPage from "../componenti/ErrorPage"
import Login from "../componenti/Login"
import PersonalArea from "../componenti/PersonalArea"
import { AuthProvider } from "../componenti/AuthContext"
import Auth from "../componenti/Auth"
import { getRecipes, loaderRecipeDetail } from "./loader"
import Iscrizione from "../componenti/Iscrizione"
import { recipeAction } from "../server/recipeAction"


const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route element={<LayoutMenu />} errorElement={<ErrorPage />}>
      <Route path="/" element={<Home />} loader={getRecipes} />
      <Route path="recipes" element={<Recipes />} loader={getRecipes} />
      <Route path="contact" element={<Contact />} />
      <Route path="support" element={<Support />} />
      <Route path="recipes/:id" element={<RecipeDetail />} loader={loaderRecipeDetail} />
      <Route element={<Auth />}>
        <Route path="personalArea" element={<PersonalArea />} action={recipeAction}/>
      </Route>
    </Route>
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Iscrizione />} />

    
    
  </>
));




export default function App() {  
  return(
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      

      
    </>
  )
}








 

