import { useState } from 'react'
import './App.css'

const names = ["Ankur" ,"Ank" , "Spiderman"];
const colors = [
  "black",
  "white",
  "olive",
  "orange",
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "pink",
  "gray",
  "brown",
  "cyan",
  "magenta",
  "lime",
  "teal",
  "navy",
  "maroon",
  "gold",
  "silver"
];

const dark = [ 
  "black",
  "olive",
  "blue",
  "green",
  "purple",
  "gray",
  "brown",
  "teal",
  "navy",
  "maroon"
]

const light = [
  "white",
  "orange",
  "red",
  "yellow",
  "pink",
  "cyan",
  "magenta",
  "lime",
  "gold",
  "silver"
];

function App() {

  const [name, setName] = useState(names[0]);
  const [color, setColor] = useState(colors[0]);

  const handleClick1 = ()=> {
    setName(names[Math.floor(Math.random()*3)]);
  }

  const handleClick2 =()=>{
    setColor(colors[Math.floor(Math.random()*20)]);
  }

  let textcolor;

  if(dark.includes(color)){
    textcolor = "white";
  }
  else textcolor = "black";

  return (
    <>
    <div className='w-scale h-22 flex'>
      <div className=''> 
      </div>
    </div>
      <div className='flex w-screen h-screen justify-center items-center gap-2 flex-col' 
          style={{backgroundColor: color, color: textcolor}}>
          <div className='flex justify-center gap-2 mt-5 items-center bg-white rounded-3xl w-50 h-20'>
            <h1 style={{color:'black'}}>{name}</h1>
            <button className='bg-blue-400 rounded-lg w-20 ' onClick={handleClick1}>change</button>
          </div>
        
          <div className='flex justify-center gap-2 mt-5 items-center bg-white rounded-3xl w-50 h-20'>
            <h1 style={{color: 'black'}}>{color}</h1>
            <button className='rounded-3xl w-20 border-1 h' onClick={handleClick2} style={{backgroundColor: color}}>change color</button>
          </div>
      </div>
      
    </>
  )
}

export default App
