import { Route, Routes } from "react-router-dom";
import Recipes from "./components/recipes";
import Recipe from "./components/Recipe";

export default function App() {
  return (
      <Routes>
        <Route path='/recipes' element={<Recipes/>}/>
        <Route path='/recipe' element={<Recipe/>} />
        <Route path='/recipe/:id' element={<Recipe/>} />
      </Routes>
    )
}
