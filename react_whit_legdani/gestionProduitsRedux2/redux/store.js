import { combineReducers, legacy_createStore,applyMiddleware } from "redux";
import { productReducer } from "./reducers/productReducer";
import { categoriesReducer } from "./reducers/categoriesReducer";
import { thunk } from "redux-thunk";

const reducers = combineReducers({
    productReducer:productReducer,
    categoriesReducer:categoriesReducer
})

const store = legacy_createStore(reducers,applyMiddleware(thunk));

export default store;
