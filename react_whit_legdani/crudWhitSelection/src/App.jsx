import ButtonContainer from "./components/ButtonContainer";
import Table from "./components/Table";
import { useState } from "react";

function App() {

// liste etudiants
  const [etudiants, setEtudiants] = [
    {
      nom: "El Amrani",
      prenom: "Yassine",
      id: "001",
      niveau: "1A",
      cin: "A123456",
    },
    {
      nom: "Bennani",
      prenom: "Fatima",
      id: "002",
      niveau: "2B",
      cin: "B789012",
    },
    {
      nom: "Tazi",
      prenom: "Hassan",
      id: "003",
      niveau: "3C",
      cin: "C345678",
    },
    {
      nom: "El Fassi",
      prenom: "Oumaima",
      id: "004",
      niveau: "1A",
      cin: "D901234",
    },
    {
      nom: "Chakroun",
      prenom: "Mohamed",
      id: "005",
      niveau: "2B",
      cin: "E567890",
    }
  ];
  // liste etudiant selected

  const [etudiantSelected, setEtudiantSelected] = useState();



  // function crud 

  function update(){
    console.log("hello update")
  }

  function del(){
    
  }

  function create(){
    console.log('hello create')
  }
  
  console.log(etudiants.map((etudiant)=>{console.log(etudiant)}))

  return (
    <main className="w-full h-full flex flex-col justify-between items-center py-10">
      <Table etudiants={etudiants} />
      <ButtonContainer update={update} del={del} create={create} />
    </main>
  );
}

export default App;
