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
import Page1 from "../componenti/Page1"
import Auth from "../componenti/Auth"

import { getRecipes, loaderRecipeDetail } from "./loader"


const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route element={<LayoutMenu />}>
      <Route path="/" element={<Home />} loader={getRecipes} />
      <Route path="recipes" element={<Recipes />} loader={getRecipes} />
      <Route path="contact" element={<Contact />} />
      <Route path="support" element={<Support />} />
      <Route path="recipes/:id" element={<RecipeDetail />} loader={loaderRecipeDetail} />
      <Route path="*" element={<ErrorPage/>} />
      <Route element={<Auth />}>
      <Route path="page1" element={<Page1 />} />
    </Route>
    </Route>
    <Route path="login" element={<Login />} />
    
  </>
));



export default function App() {  
  return(
    <>
      <RouterProvider router={router} />
    </>
  )
}








 

