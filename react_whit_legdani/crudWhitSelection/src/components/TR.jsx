export default function TR({etudiant,select}) {
  return (
    <tr className="bg-white  border-b hover:bg-gray-100 cursor-pointer" tabIndex={1} id={etudiant.id} onClick={(e)=>{select(e.target.parentElement.id)}}>
      <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        {etudiant.nom}
      </td>
      <td>
        {etudiant.prenom}
      </td>
      <td className="px-6 py-4">{etudiant.id}</td>
      <td className="px-6 py-4">{etudiant.niveau}</td>
      <td className="px-6 py-4">{etudiant.cin}</td>
    </tr>);
}
