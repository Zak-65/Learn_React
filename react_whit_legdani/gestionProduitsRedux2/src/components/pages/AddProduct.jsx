import { useDispatch, useSelector } from "react-redux";
import Form from "../smallComponents/form";
import NavBar from "../smallComponents/Navbar";
import { addProductAction } from "../../../redux/actions/productActions";

export default function AddProduct() {
  const dispatcher = useDispatch()
  let listeCategories = useSelector((state)=>state.categoriesReducer.categories);
  let listeProduits = useSelector((state)=>state.productReducer.products)
  function handleSubmit(newProduct,e){
    newProduct = {...newProduct,id:Math.max(...listeProduits.map((produit)=>produit.id+1))}
    dispatcher(addProductAction(newProduct))
  }
  return (
    <>
      <NavBar />
      <div className="container mx-auto p-6">
        <h2 className="text-3xl  text-center font-semibold mb-6 text-black">add product</h2>
        <Form handleSubmit={handleSubmit} listeCategories={listeCategories} />
      </div>
    </>
  );
}
