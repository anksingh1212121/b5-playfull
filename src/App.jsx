import { useState } from 'react'
import './App.css'

const names = ["Ankur" ,"harendra" , "mohit" ,"kaif", "himanshu" , "anurag" , "alok" ,"saurabh" ,"rashid","tiwari","aman"];
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
    setName(names[Math.floor(Math.random()*11)]);
  }

  const handleClick2 =()=>{
    setColor(colors[Math.floor(Math.random()*20)]);
  }

  let textcolor;
  let shadow;

  if(dark.includes(color)){
    textcolor = "white";
    shadow = "0px 4px 10px white"

  }
  else {
    textcolor = "black";
    shadow = "0px 4px 10px black";
  }
  return (
    <>
    <div className='w-full h-22 flex bg-gray-500'>
      <div className='flex justify-between items-center'>
        <div className='w-20 h-20 rounded-full overflow-hidden'>
          <img src="src/assets/ChatGPT Image May 25, 2026, 02_29_00 PM.png" />
        </div> 
        <div className='flex ml-10 gap-3 text-xl'>
          <span className='text-white'>home</span>
          <span className='text-white'>about</span>
          <span className='text-white'>members</span>
          <span className='text-white'>projects</span>
        </div>
      </div>
    </div>
      <div className='mt-5'>
        <div className='flex w-100 h-100 justify-center items-center gap-2 flex-col rounded-4xl shadow-xl' 
          style={{backgroundColor: color, color: textcolor}}>
          <div className='flex justify-between gap-2 mt-5 items-center rounded-3xl w-50 h-20 bg-gray-500 p-3'
          style={{boxShadow: shadow}}>
            <h1 style={{color:'black'}}>{name}</h1>
            <button className='bg-blue-400 rounded-xl w-20 shadow-xl' onClick={handleClick1}>change</button>
          </div>
        
          <div className='flex justify-between gap-2 mt-5 items-center rounded-3xl w-50 h-20 bg-gray-500 p-3'
          style={{boxShadow: shadow}}>
            <h1 style={{color: 'black'}}>{color}</h1>
            <button className='rounded-3xl w-20 shadow-xl shadow-red-' onClick={handleClick2} style={{backgroundColor: color}}>change color</button>
          </div>
      </div>
      </div>
      
    </>
  )
}

export default App
