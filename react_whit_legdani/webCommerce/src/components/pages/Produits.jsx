import { useState } from "react";
import { Link } from "react-router-dom";
import Confirmation from "../smallComponents/Confirmation";

export default function Produits({ produits, categories, sProduits }) {
  const [confirmation, setConfirmation] = useState(false);

  function handleClick() {
    return setConfirmation(!confirmation);
  }

  
  let color;

  function categorie(id, liste) {
    let d = liste.find((item) => {
      return id === item.id;
    });
    return d.libelle;
  }

  return (
    <div className="flex flex-col ">
      <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
        <div className="overflow-hidden ">
          
          <Link to={"/addProduits"} className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline">Ajouter</Link>
          <table className="min-w-full border m-5">
            <thead className="border-b">
              <tr>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  id
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  libelle
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Categorie
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  quantite
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  prix
                </th>
              </tr>
            </thead>
            <tbody>
              {produits.produits.map((item) => {
                let isSelected = sProduits.selectedProduits.includes(item);
                return (
                  <tr
                    className={`border-b ${isSelected ? "bg-blue-100" : ""}`}
                    key={item.id}
                    onClick={() => {
                      if (!isSelected) {
                        sProduits.setSelectedProduits([...sProduits.selectedProduits, item]);
                      } else {
                        let t = sProduits.selectedProduits.filter((produit) => produit.id !== item.id);
                        sProduits.setSelectedProduits(t);
                      }
                    }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.libelle}</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{categorie(item.categorie, categories)}</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.quantiteStock}</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.prix}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">Modifier</button>
          <button className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline" onClick={() => {
            handleClick()
          }}>
            Supprimer
          </button>
        </div>
        {confirmation && <Confirmation/>}
      </div>
    </div>
  );
}
