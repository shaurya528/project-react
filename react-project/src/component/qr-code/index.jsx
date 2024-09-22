import React, { useState } from 'react'
import QRCode from 'react-qr-code'
// import Qrcode from "react-qr-code"

export default function Code() {
    const [qrCode,setQrCode] = useState('')
    const[input,setInput] = useState('')
    function handlegenerate (){
        setQrCode(input)
    }
  return (
    <div className='container'>
      <h1>Qr Code generator</h1>
      <div>
    <input type='text' name='qr-code' placeholder='enter your value' onChange={(e)=> setInput(e.target.value)}/>
    <button disabled={input && input.trim() !== "" ? false : true} onClick={handlegenerate}>generate</button>
      </div>
      <div>
        <QRCode id='qr-code-value' value={qrCode} size={400} bgColor='white'/>
      </div>
    </div>
  )
}
