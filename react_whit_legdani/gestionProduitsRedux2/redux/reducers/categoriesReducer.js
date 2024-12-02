const initialState = {
  categories: [
    { id: 1, libelle: "Électronique" },
    { id: 2, libelle: "Vêtements" },
    { id: 3, libelle: "Livres" },
  ],
};

export function categoriesReducer(state = initialState , action) {
  switch (action.type) {
    case "ADD_CATEGORIE":
      return console.log("add categorie");
    case "UPDATE_CATEGORIE":
      return console.log("update categorie");
    case "DELETE_categoriE":
      return console.log("delete categorie");
    default:
      return state;
  }
}
