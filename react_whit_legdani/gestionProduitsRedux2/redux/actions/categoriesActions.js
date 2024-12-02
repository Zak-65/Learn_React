export default function addCategorieAction(newCategorie){
    return(
        {
            type:"ADD_CATEGORIE",
            payload:newCategorie
        }
    )
}

export  function updateCategorieAction(){
    return(
        {
            type:'UPDATE_CATEGORIE',
            payload:newCategorie
        }
    )
}




export  function deleteCategorieAction(id){
    return(
        {
            type:"DELETE_CATEGORIE",
            payload:id
        }
    )
}
