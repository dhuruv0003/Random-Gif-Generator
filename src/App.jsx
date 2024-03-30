import { useState } from 'react'
import Random from './components/Random'
import Tag from './components/Tag'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen flex gap-[2rem] flex-col items-center'>
      <h1 className=' bg-white text-black text-center w-[50%] mx-auto rounded-lg
      mt-10 text-3xl'>RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center justify-center">
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}

export default App
