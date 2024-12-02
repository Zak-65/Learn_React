import { useSelector } from "react-redux";
import Card from "../smallComponents/Card";
import NavBar from "../smallComponents/Navbar";
import { Link } from "react-router-dom";

export default function AllProduct() {
  const products = useSelector((state) => state.productReducer.products);
  return (
    <>
      <NavBar />
      <div className="container mx-auto p-6">
        <h2 className="text-2xl text-center font-semibold mb-6 text-gray-900">Product List</h2>
        <Link to={"/addProduct"} class="relative inline-flex  p-0.5 mb-6 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Ajouter produit</span>
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item) => {
            return <Card key={item.id} item={item} />;
          })}
        </div>
      </div>
    </>
  );
}
