import axios from "axios";
import { useEffect, useState } from "react"
import Spinner from "./Spinner";

export default function Tag(){

    const [tag,settag]=useState("")
    const [loading, setloading]=useState(false)
    const[gif,setgif]=useState("")

    const API_KEY = 'olMAEV8K4xiKmqapN9OLDPGghNj3nSxX'

    async function fetchData(){
        setloading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const {data}=await axios.get(url);
        const imgsrc = data.data.images.downsized_large.url
        setgif(imgsrc)
        setloading(false);
    }

useEffect(()=>{
    fetchData();
},[]);


    return(
        <div className="w-3/4  rounded-lg p-3 bg-white shadow-md flex flex-col mx-auto items-center gap-y-5 mt-[15px] shadow-[#bc6868]">
            
            <h1>Random Gif</h1>
            
            {
                loading?(<Spinner/>):(<img  src={gif} alt="GIF" width="450" />)
            }
            <button onClick={()=>fetchData()}>Generate</button>
        </div>
    )
}