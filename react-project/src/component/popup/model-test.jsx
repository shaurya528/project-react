import React, { useState } from 'react'
import Model from './model'

export default function Modeltest() {
    const[showmodel,setShowmodel] = useState(false)
    function handletogel(){
       setShowmodel(!showmodel) 
    }

  return (
    <div>
      <button onClick={handletogel}> open Model</button>
      {
        showmodel && <Model body={<div> yes is did it</div>}/>
      }
    </div>
  )
}
