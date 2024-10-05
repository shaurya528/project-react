import React from 'react'
import Tab from './Tab'
function Random(){
    return <h1>Some random content</h1>
}

export default function Mytab() {

    const tab =[{
        label : "tab 1",
        content : <div>This is content for Tab 1</div>
    },{
        label : "tab 2",
        content : <div>This is content for Tab 2</div>
    },{
        label : "tab 3",
        content : <Random/>
    },]

    function handlechange(currentindex){
        console.log(currentindex)
    }
  return (
    <Tab tabcontent ={tab} onChange={handlechange}/>
  )
}
