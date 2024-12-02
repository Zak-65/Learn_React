import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Recipe from "./Recipe";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);

  //   fetching data frop Api's
  useEffect(() => {
    fetch("http://localhost:3000/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  console.log(recipes);
  return (
    <div className="container mx-auto">
      <Navbar/>
      <h1 className="text-3xl font-bold text-center mb-8">Recipe List</h1>  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((item) => {
          return (
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-4 flex flex-col gap-3">

                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <img src="/assets/test.png" alt="Recipe Image" className="rounded  w-full h-48 object-cover"/>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={()=>{console.log("hello recipe")}}>View Recipe</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
