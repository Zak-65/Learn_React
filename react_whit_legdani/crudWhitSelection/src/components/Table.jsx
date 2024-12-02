import { useState } from "react";
import TR from "./TR";
export default function table(setEtudiantSelected) {
    

  function select(etudiant) {
    setEtudiantSelected(etudiant);
  }

  return (
    <div className="relative overflow-x-auto w-4/5">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              nom
            </th>
            <th scope="col" className="px-6 py-3">
              prenom
            </th>
            <th scope="col" className="px-6 py-3">
              id
            </th>
            <th scope="col" className="px-6 py-3">
              niveau
            </th>
            <th scope="col" className="px-6 py-3">
              cin
            </th>
          </tr>
        </thead>
        <tbody>
          {/* {etudiants.map((item) => {
            return <TR etudiant={item} key={item.id} select={select} />;
          })} */}
        </tbody>
      </table>
    </div>
  );
}
