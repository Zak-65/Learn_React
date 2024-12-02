import { Route, Routes } from "react-router-dom";
import Produits from "./components/pages/Produits";
import Ventes from "./components/pages/Ventes";
import UpdateProduits from "./components/pages/UpdateProduits";
import { useEffect, useState } from "react";
import AddProduits from "./components/pages/addProduits";

export default function App() {
  useEffect(() => {
          fetch('http://196.127.103.9:3000/api/produits').then((res)=>{
           return res.json()
          }).then((res)=>{
            setProduits(res)
          }).catch((error)=>{
             console.log("data produits not fetched")
              console.log(error)
          })


          fetch('http://196.127.103.9:3000/api/categories').then((res)=>{
            return res.json()
          }).then((res)=>{
             setCategories(res)
          }).catch((error)=>{
            console.log("data categories not fetched")
            console.log(error)
          })
  },[]);
  


  // liste categories
  const [categories, setCategories] = useState([]);
   // liste produits
  const [produits, setProduits] = useState([]);
   // liste les produits selectioner
  const [selectedProduits, setSelectedProduits] = useState([]);
   // produits en cours
  const [produit, setProduit] = useState({});
  return (
    <>
      <Routes>
        <Route path="/" element={<Produits produits={{produits,setProduits }} categories={categories} sProduits={{selectedProduits,setSelectedProduits}} />} />
        <Route path="/addProduits" element={<AddProduits categories={categories} />} />
        <Route path="/ventes" element={<UpdateProduits  />} />
        <Route path="/ventes" element={<Ventes />} />
      </Routes>
    </>
  );
}
