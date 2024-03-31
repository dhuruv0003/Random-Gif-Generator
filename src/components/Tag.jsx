import axios from "axios";
import { useEffect, useState } from "react"
import Spinner from "./Spinner";
import useGif from "../hooks/usegif";

export default function Tag() {

    const [tag, settag] = useState("")
    const {loading, gif,fetchData}=useGif(tag);



    return (
        <div className="sm:w-2/3 w-3/4   rounded-lg p-3 bg-white shadow-md flex flex-col mx-auto items-center gap-y-5 mt-[15px] shadow-[#bc6868]">

            <h1 className="text-2xl uppercase underline font-bold ">Random Gif of {tag}</h1>

            {
                loading ? (<Spinner />) : (<img src={gif} alt="GIF" width="450" />)
            }

            <input type="text" className="border border-black w-[70%] rounded-lg p-1" placeholder="Enter text" onChange={(event)=>settag(event.target.value)} value={tag} />

            <button className="bg-black w-[70%] p-1 rounded-lg text-white" onClick={() => fetchData(tag)}>Generate</button>
        </div>
    )
}