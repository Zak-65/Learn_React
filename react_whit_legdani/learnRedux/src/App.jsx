import { Route, Routes } from "react-router-dom";
import Produit from "./components/Produits";
import AddProduct from "./components/addProduct";

export default function App() {
  return (
    <Routes>
    <Route path="/" element={<Produit />} />
    <Route path="/addProduct" element={<AddProduct/>}/>
    </Routes>
  );
}
