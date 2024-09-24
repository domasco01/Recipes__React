import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import './index.css'
import Home from "../componenti/Home"
import Contact from "../componenti/Contact"
import Support from '../componenti/Support'
import LayoutMenu from "../componenti/LayoutMenu"
import Recipes from "../componenti/Recipes"
import RecipeDetail from "../componenti/RecipeDetail"


const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<LayoutMenu />}>
    <Route path="/" element={<Home />} />
    <Route path="recipes" element={<Recipes />} />
    <Route path="contact" element={<Contact />} />
    <Route path="support" element={<Support />} />
    <Route path="recipes/:id" element={<RecipeDetail />} />
  </Route>

));



export default function App() {  
  return(
    <>
      <RouterProvider router={router} />
    </>
  )
}








 

