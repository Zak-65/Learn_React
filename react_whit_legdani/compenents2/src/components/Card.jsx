function Card(props){
    return(
        <>
            <div className="bg-white h-64 w-48 rounded flex flex-col justify-evenly items-center ">
                <p>test</p>
                <p className="text-xl " >{props.name}</p>
                <p className={`text-4xl font-bold text-${props.color}-500`}>{props.number1}</p>
                <p>{props.number2}</p>
            </div>
        </>
    );
}
export default Card ;