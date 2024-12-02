import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import AddProduct from "./components/pages/AddProduct";
import UpdateProduct from "./components/pages/UpdateProdect";
import AllProduct from "./components/pages/AllProduct";

export default function App(){
  return(
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/allProduct" element={<AllProduct/>} />
      <Route path="/addProduct" element={<AddProduct/>}/>
      <Route path="/updateProduct" element={<UpdateProduct/>}/>
    </Routes>

  )
}