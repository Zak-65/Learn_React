
// function action to return object type of change and what is the change

export function addProductAction(newProduct){
    return(
        {
            type:"ADD_PRODUCT",
            payload:newProduct
        }
    )
}

export function updateProductAction(newProduct){
    return(
        {
            type:"UPDATE_PRODUCT",
            payload:newProduct
        }
    )
}

export function deleteProductAction(id){
    return(
        {
            type:"DELETE_PRODUCT",
            payload:id
        }
    )
}



