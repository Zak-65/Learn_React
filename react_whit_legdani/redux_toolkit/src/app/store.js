import { configureStore } from "@reduxjs/toolkit"
import compteurReducer from "../features/compteur/compteurSlice"

const store = configureStore({
    reducer:{
        compteur:compteurReducer
    }
})
export default store