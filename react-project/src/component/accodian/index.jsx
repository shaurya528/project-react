import React, { useState } from 'react'
import data from './data';

export default function Accodian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiselection, setEnableMultiselection] = useState(false);
    const [multiple, setMultiple] = useState([])
    function handleSingleclick(getid) {

        setSelected(getid === selected ? null : getid);

    }
    function multiselect(getid) {
        let copy = [...multiple];
        const indexof = copy.indexOf(getid);
        console.log(indexof);
        if(indexof === -1) copy.push(getid);
        else copy.splice(indexof ,1);
        setMultiple(copy)

    }
    console.log(selected, multiple)
    return (<div className='wrapper'>
        <button onClick={() => setEnableMultiselection(!enableMultiselection)}>Enable multi selection</button>

        <div className='accodian'>
            {
                data && data.length > 0 ? data.map(dataItem => <div className='item'>
                    <div onClick={enableMultiselection ? () => multiselect(dataItem.id) : () => handleSingleclick(dataItem.id)} className='title'>
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {
                        enableMultiselection ? multiple.indexOf(dataItem.id) !== -1 &&(<div className='content'>{dataItem.answer}</div>) 
                        : selected === dataItem.id && (<div className='content'>{dataItem.answer}</div>)
                            
                    }
                </div>)
                    : <div> not data found</div>
            }
        </div>
    </div>
    )

}
