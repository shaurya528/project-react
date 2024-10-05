import React, { useState } from 'react'

export default function Tab({tabcontent, onchange}) {
    const [currentindex, setCurrentindex] = useState(0)
    function handleclick(getCurrentIndex){
        setCurrentindex(getCurrentIndex)
        onchange(getCurrentIndex)
    }
    return (
        <div className='wrapper'>
            <div className='heading'>
                {
                    tabcontent.map((tabitem,index) => (<div key={tabitem.label} onClick={()=>handleclick(index)}>
                        <span className='label'>{tabitem.label}</span>
                    </div>))
                }
            </div>
            <div className='content'>
                {
                    tabcontent[currentindex] && tabcontent[currentindex].content
                }
            </div>
        </div>
    )
}
