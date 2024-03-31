import {useEffect, useState } from "react";
import axios from "axios";


const API_KEY = 'N4Jx8zcDRlJEGTJD7rMlmKvp011NWTeU'
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

export default function useGif(tag) {

    const [gif, setgif] = useState("")
    const [loading, setloading] = useState(false);



    async function fetchData(tag) {
        setloading(true);

        // axios.get() returns a promise 

        const { data } = await axios.get(tag?(`${url}&tag=${tag}`):(url))
        // {data} se hame api ka data wala element mil gya h
        // Ab hame uske andar se url nikalna hai 

        const imgsrc = data.data.images.downsized_large.url
        setgif(imgsrc)
        setloading(false);
    }
    useEffect(() => {
        fetchData();
    }, [])

    return {gif,loading,fetchData}
} 