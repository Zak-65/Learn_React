import { Link } from "react-router-dom";
export default function AddProduits({ categories }) {
  return (
    <form className="bg-teal-500 border rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl">
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Libelle</label>
        <input type="text" className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Categorie</label>
        <select className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required>
          <option value="">Select gender</option>
          {categories.map((item) => {
            return <option key={item.id} value={item.id}>{item.libelle}</option>;
          })}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Quantite</label>
        <input type="text" className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Prix</label>
        <input type="text" className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required />
      </div>
      <div>
        <Link to={"/"} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Submit
        </Link>
      </div>
    </form>
  );
}
