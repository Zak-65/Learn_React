import { useDispatch, useSelector } from "react-redux";
import { increment,decrement } from "../features/compteur/compteurSlice";

export default function Compteur() {
  const count = useSelector((state)=>state.compteur.nombre)
  const dispatch = useDispatch()
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(./public/assets/test.jpg)" }}
    >
      <div className="flex items-center justify-center w-full gap-4">
        <div className="rounded-xl bg-black/30 backdrop-blur-sm py-6 px-4 flex flex-col items-center gap-2">
          <h3 className="font-bold text-9xl px-5 py-3 text-white">{count}</h3>
          <p className="text-lg font-light text-gray-300">Current Count</p>
        </div>
      </div>
      <div className="mt-6 flex gap-4">
        <button onClick={()=>dispatch(increment())} className="px-6 py-4 font-extrabold text-xl rounded bg-green-500 text-white hover:bg-green-600 transition">Incrementer</button>
        <button onClick={()=>dispatch(decrement())} className="px-6 py-4 font-extrabold text-xl rounded bg-red-500 text-white hover:bg-red-600 transition">Decrementer</button>
      </div>
    </div>
  );
}
