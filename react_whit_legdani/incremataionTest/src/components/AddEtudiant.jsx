import React from "react";
import { Component } from "react";

export default class AddEtudiant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      etudiants: [],
      etudiant: {},
    };
  }
  render() {
    return (
        <div className="flex flex-col space-y-6 p-8 max-w-lg mx-auto bg-white rounded-xl shadow-md">
          <input
            type="text"
            name="id"
            placeholder="ID"
            className="p-3 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-400 transition duration-200"
            onChange={()=>this.setState(etudiant,{...this.state.etudiant,id:(e)=>e.target.value})}
          />
          <input
            type="text"
            name="nom"
            placeholder="Nom"
            className="p-3 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-400 transition duration-200"
            onChange={()=>this.setState({etudiant,...this.state.etudiant,nom:(e)=>e.target.value})}
          />
          <input
            type="text"
            name="prenom"
            placeholder="Prénom"
            className="p-3 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-400 transition duration-200"
            onChange={()=>this.setState(etudiant,{...this.state.etudiant,prenom:(e)=>e.target.value})}
          />
          <button    className="p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
            Ajouter
          </button>
        </div>
    );
  }
}
