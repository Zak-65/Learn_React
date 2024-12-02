import React from "react";
import { Component } from "react";

export default class HelloInput extends Component {
    constructor(props){
        super(props)
        this.state={
            nom:"",
            message:"",
            number : 0
        }
    }

    // il s'excecute apres chaque render

    componentDidMount =()=>{
      console.log("renred!!!!!!!")
    } 

    // il s'excecute apres chaque modification du state

    componentDidUpdate=()=>{
      console.log('state updated')
    }

    // il s'excecute juste avant la dispaition du composant

    componentWillUnmount=()=>{
      console.log('component unmoted !!!!')
    }
  render() {
    return (
      <>
        <input onChange ={(event)=>this.setState({nom:event.target.value})} /><br/>
        <button  onClick={()=>this.setState({message:"bonjour"+" " +this.state.nom})}>confirmer</button>
        <h1>{this.state.message}</h1>

      <input type="number" onChange={(e)=>this.setState({number:e.target.value})} />
      {this.state.number = 12 && <p>hello world</p>}


      </>
    );
  }
}
