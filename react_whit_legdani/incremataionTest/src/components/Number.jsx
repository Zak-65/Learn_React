import { useState } from "react";
export default function Number(){
    const [number,setNumber] = useState(0)
    if(number<0){
        setNumber(0)
    }
    return(
        <>  
            <div style={{display:"flex", border:"solid 1px",borderRadius:"5px",margin:"10px",padding:"5px",justifyContent:'space-between'}}>
                <button onClick={()=>{setNumber(number+1)}}>Up Number </button>
                <p style={{background:"orange",height:"100px",width:"100px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"5px"}} >{number}</p>
                <button onClick={()=>{setNumber(number-1)}}>Down Number</button>
            </div>
        </>
    );
}