import axios from "axios";
import { useEffect } from "react";

export default function Api() {
  
useEffect(()=>{
// fetch api whit fetch and catch
    // fetch("http://localhost:3000/experts")
    // .then((res)=>res.json())
    // .then((res)=>console.log(res))
    // .catch((err)=>console.log(err))

// fetch api whit async await
    // async function getExperts (){
    //     let data = await fetch("http://localhost:3000/experts")
    //     let allData = await data.json()
    //     console.log(allData)
    // }

    // getExperts()

// fetch api whit axios 

    axios.get("http://localhost:3000/experts")
    .then((res)=>console.log(res.data))

},[])
    

  return <p>hello world</p>;
}
