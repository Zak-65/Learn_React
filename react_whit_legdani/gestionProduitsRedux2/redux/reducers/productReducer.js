const initialState = {
  products: [
    {
      id: 1,
      libelle: "Smartphone",
      categorie: 1,
      prix: 499.99,
      quantiteStock: 30,
    },
    {
      id: 2,
      libelle: "Laptop",
      categorie: 1,
      prix: 899.99,
      quantiteStock: 20,
    },
    {
      id: 3,
      libelle: "Casque Audio",
      categorie: 1,
      prix: 89.99,
      quantiteStock: 50,
    },
    {
      id: 4,
      libelle: "Télévision 4K",
      categorie: 1,
      prix: 1199.99,
      quantiteStock: 15,
    },
    {
      id: 5,
      libelle: "T-shirt Homme",
      categorie: 2,
      prix: 19.99,
      quantiteStock: 100,
    },
    {
      id: 6,
      libelle: "Jeans Femme",
      categorie: 2,
      prix: 29.99,
      quantiteStock: 50,
    },
    {
      id: 7,
      libelle: "Chaussures Sport",
      categorie: 2,
      prix: 49.99,
      quantiteStock: 75,
    },
    {
      id: 8,
      libelle: "Sac à dos",
      categorie: 2,
      prix: 39.99,
      quantiteStock: 40,
    },
    {
      id: 9,
      libelle: "Roman Policier",
      categorie: 3,
      prix: 12.99,
      quantiteStock: 80,
    },
    {
      id: 10,
      libelle: "Livre de cuisine",
      categorie: 3,
      prix: 15.99,
      quantiteStock: 60,
    },
  ],
};

export function productReducer(state = initialState,action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {};
    case "UPDATE_PRODUCT":
      return console.log("prduit Modifier");
    case "DELETE_PRODUCT":
      return console.log("prduit supprimer");

    default : 
       return state;
  }
}
