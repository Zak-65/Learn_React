const intialState = {
  produits: [
    {
      _id: "672fd9a0c25767edb8c1c196",
      id: 1,
      libelle: "Smartphone",
      categorie: 1,
      prix: 499.99,
      quantiteStock: 30,
    },
    {
      _id: "672fd9a0c25767edb8c1c197",
      id: 2,
      libelle: "Laptop",
      categorie: 1,
      prix: 899.99,
      quantiteStock: 20,
    },
    {
      _id: "672fd9a0c25767edb8c1c198",
      id: 3,
      libelle: "Casque Audio",
      categorie: 1,
      prix: 89.99,
      quantiteStock: 50,
    },
    {
      _id: "672fd9a0c25767edb8c1c199",
      id: 4,
      libelle: "Télévision 4K",
      categorie: 1,
      prix: 1199.99,
      quantiteStock: 15,
    },
    {
      _id: "672fd9a0c25767edb8c1c19a",
      id: 5,
      libelle: "T-shirt Homme",
      categorie: 2,
      prix: 19.99,
      quantiteStock: 100,
    },
    {
      _id: "672fd9a0c25767edb8c1c19b",
      id: 6,
      libelle: "Jeans Femme",
      categorie: 2,
      prix: 29.99,
      quantiteStock: 50,
    },
    {
      _id: "672fd9a0c25767edb8c1c19c",
      id: 7,
      libelle: "Chaussures Sport",
      categorie: 2,
      prix: 49.99,
      quantiteStock: 75,
    },
    {
      _id: "672fd9a0c25767edb8c1c19d",
      id: 8,
      libelle: "Sac à dos",
      categorie: 2,
      prix: 39.99,
      quantiteStock: 40,
    },
    {
      _id: "672fd9a0c25767edb8c1c19e",
      id: 9,
      libelle: "Roman Policier",
      categorie: 3,
      prix: 12.99,
      quantiteStock: 80,
    },
    {
      _id: "672fd9a0c25767edb8c1c19f",
      id: 10,
      libelle: "Livre de cuisine",
      categorie: 3,
      prix: 15.99,
      quantiteStock: 60,
    },
    {
      _id: "672fd9a0c25767edb8c1c1a0",
      id: 11,
      libelle: "Encyclopédie",
      categorie: 3,
      prix: 45,
      quantiteStock: 30,
    },
    {
      _id: "672fd9a0c25767edb8c1c1a1",
      id: 12,
      libelle: "Guide de voyage",
      categorie: 3,
      prix: 20,
      quantiteStock: 50,
    },
    {
      _id: "672fd9a0c25767edb8c1c1a2",
      id: 13,
      libelle: "Réfrigérateur",
      categorie: 4,
      prix: 799.99,
      quantiteStock: 25,
    },
    {
      _id: "672fd9a0c25767edb8c1c1a3",
      id: 14,
      libelle: "Machine à laver",
      categorie: 4,
      prix: 650,
      quantiteStock: 10,
    },
    {
      _id: "672fd9a0c25767edb8c1c1a4",
      id: 15,
      libelle: "Four à micro-ondes",
      categorie: 4,
      prix: 99.99,
      quantiteStock: 40,
    },
    {
      _id: "672fd9a0c25767edb8c1c1a5",
      id: 16,
      libelle: "Aspirateur sans fil",
      categorie: 4,
      prix: 120,
      quantiteStock: 30,
    },
    {
      _id: "672fd9a0c25767edb8c1c1a6",
      id: 17,
      libelle: "Ballon de football",
      categorie: 5,
      prix: 22,
      quantiteStock: 100,
    },
    {
      _id: "672fd9a0c25767edb8c1c1a7",
      id: 18,
      libelle: "Raquette de tennis",
      categorie: 5,
      prix: 80,
      quantiteStock: 40,
    },
    {
      _id: "672fd9a0c25767edb8c1c1a8",
      id: 19,
      libelle: "Gants de boxe",
      categorie: 5,
      prix: 50,
      quantiteStock: 30,
    },
    {
      _id: "672fd9a0c25767edb8c1c1a9",
      id: 20,
      libelle: "Vélo de montagne",
      categorie: 5,
      prix: 350,
      quantiteStock: 15,
    },
  ],
};

export function productReducer(state = intialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return { ...state, produits: [...state.produits, action.payload] };

    case "UPDATE_PRODUCT":
      return { ...state, produits: [...state.produits.map((item) => item.id === action.payload.id && { ...action.payload })] };

    case "DELETE_PRODUCT":
      return { ...state, produits: [...state.produits.filter(() => !action.payload)] };
    default:
      return state;
  }
}
