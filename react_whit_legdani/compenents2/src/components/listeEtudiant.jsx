function Etudians(){
    let etudians = [{id:1,nom:"merzoug",prenom:"khalid",groupe:"DD205"},
        {id:2,nom:"mehfoud",prenom:"anas",groupe:"DD203"},
        {id:3,nom:"sidqui",prenom:"zakaria",groupe:"DD205"},
        {id:4,nom:"ouafik",prenom:"mohamed",groupe:"DD201"},
    ]
    return(
        <>
        <ul className="border">
            {etudians.map(function(item,index){
                return (<li key={index}>id:{item.id}nom:{item.nom} prenom:{item.prenom} groupe:{item.groupe}<hr/></li>)
            })}
        </ul>
        </>
    )
}
export default Etudians