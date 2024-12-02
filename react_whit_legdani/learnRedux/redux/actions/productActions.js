export function addProductAction(newProduct){
    return(
        {
            type:"ADD_PRODUIT",
            payload:newProduct
        }
    )
}


export function updateProductAction(newProduct){
    return(
        {
            type:"UPDATE_PRODUIT",
            payload:newProduct
        }
    )
}

export function deleteProductAction(idProduct){
    return(
        {
            type:"DELETE_PRODUIT",
            payload:idProduct
        }
    )
}