import React, { useState } from 'react'

export default function Randomcolor() {
const[type, setType] = useState("hex");
const[color,setColor] = useState( '#8c34eb');
const [randomHex,setRandomHex] = useState('#000000');
const[randomrgb,setRandomrgb] = useState('rgb(0,0,0)');
const[randomhsl,setRandomhsl] = useState('hsl(0,0%,0%)');

function  handleCreateHexrandom(){
const random = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6,"0");
setRandomHex(random);
setColor(random);
}
function  handleCreateRgbrandom(){
const randomc = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
setRandomrgb(randomc)
setColor(randomc)
}
function  handleCreateHslrandom(){
    const deg = Math.floor(Math.random()*360);
    const hue = Math.floor(Math.random()*101);
    const sat = Math.floor(Math.random()*101);
    const randomc = `hsl(${deg},${hue}%,${sat}%)`;
    setRandomhsl(randomc)
    setColor(randomc)
    }


  return (
    <div style={{
        height:'100vh',
        width:"100vw",
        background: color,
    }}>
      <button onClick={()=> setType("hex")}>Hex color  </button>
      <button onClick={()=> setType("hsl")}>Hsl color  </button>
      <button onClick={()=> setType("rgb")}>Rgb color</button>
      <button onClick={type === "hex" ?  handleCreateHexrandom : type === "rgb" ? handleCreateRgbrandom : handleCreateHslrandom}>Generate random color</button>
      <div>
        {type==="hex" ? <h1>{randomHex}</h1> : type==="rgb" ? <h2>{randomrgb}</h2> : <h1>{randomhsl}</h1>}
      </div>
    </div>
  )
}
