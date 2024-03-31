import axios from "axios";
import { useEffect, useState } from "react"
import Spinner from "./Spinner";

export default function Tag() {

    const [tag, settag] = useState("")
    const [loading, setloading] = useState(false)
    const [gif, setgif] = useState("")

    const API_KEY = 'c8OFoOD0mNfNXwObyKIgm0Q3wwVMqDXa'

    async function fetchData() {
        setloading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        const { data } = await axios.get(url);
        const imgsrc = data.data.images.downsized_large.url;
        setgif(imgsrc)
        setloading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className="sm:w-2/3 w-3/4 min-h-[350px]  rounded-lg p-3 bg-white shadow-md flex flex-col mx-auto items-center gap-y-5 mt-[15px] shadow-[#bc6868]">

            <h1 className="text-2xl uppercase underline font-bold >Random Gif of {tag}</h1>

            {
                loading ? (<Spinner />) : (<img src={gif} alt="GIF" width="450" />)
            }

            <input type="text" className="border border-black w-[70%] rounded-lg p-1" placeholder="Enter text" onChange={(event)=>settag(event.target.value)} />

            <button className="bg-black w-[70%] p-1 rounded-lg text-white" onClick={() => fetchData()}>Generate</button>
        </div>
    )
}