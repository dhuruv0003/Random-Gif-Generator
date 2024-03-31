// import axios from "axios";
// import { useEffect, useState }
//     from "react"
import Spinner from "./Spinner";
import useGif from "../hooks/usegif";

export default function Random() {

    // const [gif, setgif] = useState("")
    // const [loading, setloading] = useState(false);

    // const API_KEY = 'N4Jx8zcDRlJEGTJD7rMlmKvp011NWTeU'

    // async function fetchData() {
    //     setloading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    //     // axios.get() returns a promise 

    //     const { data } = await axios.get(url)
    //     // {data} se hame api ka data wala element mil gya h
    //     // Ab hame uske andar se url nikalna hai 

    //     const imgsrc = data.data.images.downsized_large.url
    //     setgif(imgsrc)
    //     setloading(false);
    // }
    // useEffect(() => {
    //     fetchData();
    // }, [])


    // function clickhandler() {
    //     fetchData();
    // }
    const {gif,loading,fetchData}=useGif();

    return (
        <div className="sm:w-2/3  w-3/4  rounded-lg p-3 bg-white shadow-md flex flex-col mx-auto items-center gap-y-5 mt-[15px] shadow-[#bc6868]"> 
            <h1 className="text-2xl uppercase underline font-bold ">A Random Gif</h1>

            {
                loading?(<Spinner/>):(<img  src={gif} alt="GIF" width="450" />)
            }

            
            <button className="bg-black w-[70%] p-1 rounded-lg text-white" onClick={()=>fetchData('car')}>Generate GIF</button>

        </div>
    )
}