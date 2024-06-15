import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style = {{backgroundColor:color}}
    >
     <div className="fixed flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg py-2 px-3 bg-white rounded-3xl ">
        <button 
        onClick={()=> setColor("red")}
        className="outline-none px-4 rounded-full text-white py-1 shadow-lg"
        style={{backgroundColor :"red"}}
        >Red</button>
         <button 
         onClick={()=> setColor("orange")}
        className="outline-none px-4 rounded-full text-white py-1 shadow-lg"
        style={{backgroundColor :"orange"}}
        >orange</button> 
        <button 
        onClick={()=> setColor("green")}
        className="outline-none px-4 rounded-full text-white py-1 shadow-lg"
        style={{backgroundColor :"green"}}
        >green</button>
        <button 
        onClick={()=> setColor("black")}
        className="outline-none px-4 rounded-full text-white py-1 shadow-lg"
        style={{backgroundColor :"black"}}
        >black</button>
        <button 
        onClick={()=> setColor("pink")}
        className="outline-none px-4 rounded-full text-white py-1 shadow-lg"
        style={{backgroundColor :"pink"}}
        >pink</button><button 
        onClick={()=> setColor("blue")}
        className="outline-none px-4 rounded-full text-white py-1 shadow-lg"
        style={{backgroundColor :"blue"}}
        >blue</button>
      </div>
     </div>
    </div>
  )
}

export default App
