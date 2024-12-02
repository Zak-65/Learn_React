import { useState } from "react";

export default function GestionProduits() {
  function getId(liste) {
    const listeId = liste.map((item) => item.id);
    let id = 1;
    while (listeId.includes(id)) {
      id++;
    }
    return id;
  }

  const [selectedProuduct, setSelectedProuduct] = useState({});

  const [products, setProducts] = useState([]);

  return (
    <>
      {/* form parte */}
      <div className="flex justify-between items-center p-8 ">
        <div className="border border-gray-300 p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="">
              <select
                className="border p-2 rounded"
                onChange={(e) => {
                  setSelectedProuduct({ ...selectedProuduct, type: e.target.value });
                }}
              >
                <option>Selectioner Type</option>
                <option>Electro-menage</option>
                <option>Legume</option>
                <option>PGC</option>
                <option>Informatique</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid grid-cols-2 gap-2 border border-gray-200 p-2 rounded">
              <div className="flex border rounded bg-gray-300 items-center p-2 ">
                <input
                  type="text"
                  onChange={(e) => {
                    setSelectedProuduct({ ...selectedProuduct, name: e.target.value, id: getId(products) });
                  }}
                  placeholder="Enter Product here..."
                  className="bg-gray-300 max-w-full focus:outline-none text-gray-700"
                />
              </div>
              <div className="flex border rounded bg-gray-300 items-center p-2 ">
                <input
                  type="number"
                  onChange={(e) => {
                    setSelectedProuduct({ ...selectedProuduct, quantite: e.target.value });
                  }}
                  placeholder="Enter Quantite here..."
                  className="bg-gray-300 max-w-full focus:outline-none text-gray-700"
                />
              </div>
            </div>
            <div className=" border border-gray-200 p-2 rounded">
              <div className="flex border rounded bg-gray-300 items-center p-2 ">
                <input
                  type="number"
                  onChange={(e) => {
                    setSelectedProuduct({ ...selectedProuduct, prix: e.target.value });
                  }}
                  placeholder="Enter Prix here..."
                  className="bg-gray-300 max-w-full focus:outline-none text-gray-700"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="p-2 border w-1/4 rounded-md bg-green-800 text-white"
              onClick={() => {
                if (Object.keys(selectedProuduct).length !== 0) {
                  setProducts([...products, selectedProuduct]);
                  setSelectedProuduct({});
                }
              }}
            >
              Add
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <button
            className="bg-red-500 hover:bg-red-600 rounded p-2 text-white"
            onClick={() => {
              setProducts(products.filter((item) => item.id !== selectedProuduct.id));
            }}
          >
            Supprimer
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 rounded p-2 text-white ">Modifier</button>
        </div>
      </div>
      {/* table produit */}
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      #
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Product
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Quantite
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Type
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      prix
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((item) => {
                    return (
                      <tr
                        className={`${selectedProuduct.id === item.id ? "bg-red-100" : "bg-gray-100"} border-b`}
                        key={item.id}
                        tabIndex={1}
                        onClick={() => {
                          setSelectedProuduct({ ...item });
                        }}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.name}</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.quantite}</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.type}</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.prix}</td>
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
