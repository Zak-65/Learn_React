import { useState } from "react";
import { useSelector } from "react-redux";

export default function Card({item}) {
  const [visibilite, setVisibilite] = useState(false);
  const categories = useSelector((state)=>state.categoriesReducer.categories)
  // currentCategorie c'est le categorie pour chaque carte ca depent de produit
  const currentCategorie = categories.find((itemb)=>itemb.id === item.categorie)
  return (
    <div className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow">
  {/* Dropdown Menu Button */}
  <div className="flex justify-end px-3 pt-3 relative">
    <button
      id="dropdownButton"
      onClick={() => {
        setVisibilite(!visibilite);
      }}
      className="inline-block text-gray-500 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg text-sm p-1"
      type="button"
    >
      <span className="sr-only">Open dropdown</span>
      <svg
        className="w-4 h-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 16 3"
      >
        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
      </svg>
    </button>
    {/* Dropdown Menu */}
    <div
      id="dropdown"
      className={`z-10 ${visibilite ? "" : "hidden"} text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-36 absolute top-10 right-3`}
    >
      <ul className="py-2">
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Edit
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
          >
            Delete
          </a>
        </li>
      </ul>
    </div>
  </div>

  {/* Product Information */}
  <div className="flex flex-col items-center pb-6">
    <img
      className="w-24 h-24 mb-3 rounded-lg shadow-lg object-cover"
      src="https://via.placeholder.com/150"
      alt="Product Image"
    />
    <h5 className="mb-1 text-lg font-semibold text-gray-900">{item.libelle}</h5>

    {/* Category */}
    <p className="text-xs text-gray-500 mb-2">Category: <span className="font-medium text-gray-800">{currentCategorie.libelle}</span></p>

    {/* Price and Quantity */}
    <div className="flex justify-between w-full px-4">
      <p className="text-sm font-medium text-gray-700">Price:</p>
      <p className="text-sm font-bold text-green-600">{item.prix}</p>
    </div>
    <div className="flex justify-between w-full px-4 mt-1">
      <p className="text-sm font-medium text-gray-700">Quantity:</p>
      <p className="text-sm font-bold text-blue-600">{item.quantiteStock} Units</p>
    </div>
  </div>
</div>

  );
}
