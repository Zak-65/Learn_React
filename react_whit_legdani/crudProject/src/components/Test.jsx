import { useState } from "react"
export default function Test(){
    const [id,setid] = useState("")
    const [nom,setnom] = useState("")
    const [prenom,setprenom] = useState("")
    const [etudiant,setEtudiant] = useState([])
    function save(){
        
        setEtudiant([...etudiant,{id:id,nom:nom,prenom:prenom}])
        console.log(etudiant)
        console.log(setEtudiant)
    }
    return(
        <>
            <div>
                <label htmlFor="id">ID</label><br/>
                <input onChange = {(e)=>{setid(e.target.value)}} /><br/>
                <label htmlFor="id">nom</label><br/>
                <input onChange= {(e)=>{setnom(e.target.value)}} type="text" /><br/>
                <label htmlFor="id">prenom</label><br/>
                <input onChange={(e)=>{setprenom(e.target.value)}} type="text" />
                <br/>
                <button onClick={save} style={{margin:"10px"}}>Save</button>
            </div>
            <div style={{border:"solid",height:"100px"}}>{etudiant.map((element,index)=>
                <p key={index}>ID: {element.id}, Nom: {element.nom}, Prenom: {element.prenom}</p>
            )}
            </div>
            
        </>
    )
}