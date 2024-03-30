import { useState } from "react"

export default function Random() {

    const [gif , setgif]=useState("")

    function clickhandler(){

    }

    return ( 
        <div className="w-1/2 h-[450px] rounded-lg p-3 bg-white shadow-md flex flex-col mx-auto items-center gap-y-5 mt-[15px] shadow-[#bc6868]">
            <h1 className="text-2xl uppercase underline font-bold ">A Random Gif</h1>
            <img src={gif} alt="GIF" width="450"/>
            <button className="bg-black w-[70%] p-1 rounded-lg text-white" onClick={clickhandler}>Generate GIF</button>

        </div>
    )
}