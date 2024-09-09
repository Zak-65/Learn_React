import Etudiant,{annee} from "./Etudiant.js"

let etudiant1 = new Etudiant(1,"sidqui","zakaria")


console.log(etudiant1)
console.log(annee)
let salutation = `Welcome ${etudiant1.nom} ${etudiant1.prenom}`

console.log(salutation)

// Operateur conditionnel ternaire

let note = 10;

let decision = note >= 10 ? 'Admis' : 'Redoublant';

let isStudent = 0;

console.log(decision);

// let observation = isStudent === true ? 'He/She is studying here' : '';

let observation = isStudent ? 'He/She is studying here' : "He/She isn't studying here";

console.log(observation)  

// Object destructing

let personne = {
    id : 1 ,
    nom : "Marzoug",
    prenom : "khalid"
}

console.log(personne.nom)
console.log(personne['nom'])

let etudiants = [
    {id : 1 , nom : "sidqui" , prenom : " zakaria"},
    {id : 2 , nom : "mahoufd" , prenom : " anas"},
    {id : 3 , nom : "marzoug" , prenom : " khalid"},
    {id : 4 , nom : "lagdani" , prenom : " amine"}

]

console.log(etudiants[1].nom);
console.log(etudiants[1]["nom"])

let {id,nom,prenom}=etudiant1

console.log(nom)

let etudiants2 = [
    {id : 1 , nom : "sidqui" , prenom : " zakaria"},
    {id : 2 , nom : "mahoufd" , prenom : " anas"},
    {id : 3 , nom : "marzoug" , prenom : " khalid"},
    {id : 4 , nom : "lagdani" , prenom : " amine"}

]

let autreTable = etudiants2.map(client=>{
    
    return client['nom']
})

let autreTable2 = etudiants2.map(client=>client.nom)

console.log(autreTable)
console.log(autreTable2)

let etudiants3 = [
    {id : 1 , nom : "sidqui" , prenom : "zakaria" , annee : 2021 , note : 18 },
    {id : 2 , nom : "mahoufd" , prenom : "anas" , annee : 2023 , note : 12},
    {id : 3 , nom : "marzoug" , prenom : "khalid" , annee : 2020 , note : 10},
    {id : 4 , nom : "lagdani" , prenom : "amine" , annee : 2024 , note : 14}
]

let autreTable3 = etudiants3.map(items=>{
    let nomComplet = `${items.nom} ${items.prenom}`
    return {nomComplet:nomComplet,annee:items.annee,note:items.note}
})

console.log(autreTable3)

// let noteMax = etudiants3.filter((items)=>{
//     if  (items.note > 10){
//         return items.nom
//     }
    
// })

// console.log(noteMax)


// reduce(accumulator donnes le total de tout les note ) (item value pointure actuel)

let total = etudiants3.reduce((accumulator,itemValue)=>{
    return accumulator + itemValue.note
},0)

console.log(total)

let moyenneT = total / etudiants3.length

console.log(moyenneT)

