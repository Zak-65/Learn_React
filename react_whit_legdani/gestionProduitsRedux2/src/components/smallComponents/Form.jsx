import { useState } from "react";

export default function Form({handleSubmit,listeCategories}) {
    const [newProduit,setNewProduit] = useState({}) 
  return (
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-slate-700 rounded-lg shadow border sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 sm:p-8">
            <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Add Product</p>

            {/* Libelle */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Libelle</label>
              <input onChange={(e)=>setNewProduit({...newProduit,libelle:e.target.value})} placeholder="Product Name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" id="libelle" type="text" />
            </div>


            {/* Categorie */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Categorie</label>
              <select defaultValue={""} onChange={(e)=>setNewProduit({...newProduit,categorie:e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5">
                <option >
                  Select Categorie
                </option>
                {listeCategories.map((categorie,index)=><option key={index} value={categorie.id}>{categorie.libelle}</option>)}
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Price</label>
              <input onChange={(e)=>setNewProduit({...newProduit,prix:e.target.value})} placeholder="Price in USD" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" id="price" type="number" min="0" step="0.01" />
            </div>

            {/* Quantite */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Quantite</label>
              <input onChange={(e)=>setNewProduit({...newProduit,quantiteStock:e.target.value})} placeholder="Quantity" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" id="quantite" type="number" min="1" />
            </div>

            {/* Submit Button */}
            <button onClick={()=>handleSubmit(newProduit)} className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white">
              Add Product
            </button>
          </div>
        </div>
      </div>
  );
}
