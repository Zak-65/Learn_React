import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Produits() {
  const produits = useSelector((state) => state.produits);
  return (
    <>
    <Link to="/addProduct"
					className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline">
					ajouter
				</Link>
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    #
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    libelle
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    categorie
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    prix
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  quantiteStock
                  </th>
                </tr>
              </thead>
              <tbody>
                {produits.map((item) => {
                  return (
                    <tr className="border-b" key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.libelle}</td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.categorie}</td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.prix}</td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.quantiteStock}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
