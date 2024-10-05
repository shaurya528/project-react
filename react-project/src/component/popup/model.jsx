import React from 'react'

export default function Model({id ,header,body,footer}) {
  return (
    <div id={id || "Model"} className='model'>
        <div className="modelcontent">
            <div className="header">
                <span className='close'>&times;</span>
                <h2>{header ? header :"header"}</h2>
            </div>
            <div className="body">{body ? (body) : (<div><p>this is model body</p> </div>)}</div>
            <div className="footer">{footer ? footer :<h2>footer</h2>}</div>
        </div>
      
    </div>
  )
}
