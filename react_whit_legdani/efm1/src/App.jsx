import React, { useState, useEffect } from "react";

export default function App() {
  const [stagiaires, setStagiaires] = useState([]);
  const [stagiaire, setStagiaire] = useState({ id: "", matricule: "", nom: "", ville: "", cp: "", moyenne: "" });

  function supprimerStagiaire(id) {
    const newStagiaires = stagiaires.filter((item) => item.id !== id);
    setStagiaires(newStagiaires);
  }

  const style = {
    div: {
      display: "flex",
      justifyContent: "between",
      width: "100%",
    },
    input: {
      width: "50%",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
    },
  };

  return (
    <>
      <h1>Liste des Stagiaires</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>id</th>
            <th>matricule</th>
            <th>nom</th>
            <th>ville</th>
            <th>code postal</th>
            <th>moyenne</th>
            <th>supprimer</th>
            <th>editer</th>
          </tr>
        </thead>
        <tbody>
          {stagiaires.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.matricule}</td>
                <td>{item.nom}</td>
                <td>{item.ville}</td>
                <td>{item.cp}</td>
                <td>{item.moyenne}</td>
                <td>
                  <button
                    onClick={() => {
                      supprimerStagiaire(item.id);
                    }}
                  >
                    supprimer
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      setStagiaire({ ...item });
                    }}
                  >
                    editer
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br /> <br />
      <form style={style.form}>
        <div style={style.div}>
          <label style={style.input} htmlFor="id">
            id:
          </label>
          <input style={style.input} type="number" name="id" disabled={true} />
        </div>
        <div style={style.div}>
          <label style={style.input} htmlFor="matricule">
            Matricule:
          </label>
          <input style={style.input} type="number" name="matricule" onChange={(e) => setStagiaire({ ...stagiaire, matricule: e.target.value })} />
        </div>
        <div style={style.div}>
          <label style={style.input} htmlFor="nom">
            Nom:
          </label>
          <input style={style.input} type="text" name="nom" onChange={(e) => setStagiaire({ ...stagiaire, nom: e.target.value })} />
        </div>
        <div style={style.div}>
          <label style={style.input} htmlFor="ville">
            Ville:
          </label>
          <input style={style.input} type="text" name="ville" onChange={(e) => setStagiaire({ ...stagiaire, ville: e.target.value })} />
        </div>
        <div style={style.div}>
          <label style={style.input} htmlFor="cp">
            Code postal:
          </label>
          <input style={style.input} type="number" name="cp" min={0} max={20} />
        </div>
        <div style={style.div}>
          <label style={style.input} htmlFor="moyenne">
            Moyenne:
          </label>
          <input style={style.input} type="number" name="moyenne" min={0} max={20} />
        </div>
        <div style={style.div}>
          <button>Ajouter</button>
          <button>Filter ville et Nom</button>
          <button>Vider</button>
          <button>initialiser recherche</button>
        </div>
      </form>
      <ul>
        <li>La Moyenne general la plus Elevee: </li>
        <li>La Moyenne general la moins Elevee: </li>
        <li>La Moyenne de la classe: </li>
      </ul>
    </>
  );
}
