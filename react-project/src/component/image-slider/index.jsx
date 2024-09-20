import React, { useEffect, useState } from 'react'
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs'

export default function ImageSlider({url,limit = 5,page =5}) {
    const [ image ,setImage] =useState([])
    const [currentSlider,setCurrentSlider] = useState(0)
    const[error ,setError] = useState(null);
    const [loading , setLoading] = useState(false)
    async function fetchimages (geturl){
      try{
        setLoading(true)
        const response = await fetch(`${geturl}?page=${page}&limit=${limit}`);
        const data = await response.json();
        if(data) {
            setImage(data)
            setLoading(false)
        }
      }catch(e){
setError(e.message);
setLoading(false)
      }
    }
    function handleprev (){
        setCurrentSlider(currentSlider===0 ? image.length -1: currentSlider-1)
    }
    function handlenext(){
        setCurrentSlider(currentSlider === image.length ? 0 : currentSlider+1)
    }
    useEffect(()=>{
        if(url !== '') fetchimages(url)
    },[url])
console.log(image)
if(loading) return <div>Loading Data ! please wait</div>
if(error !== null) return <div> Error occured</div>
  return (
    <div className='container'>
      <BsArrowLeftCircleFill onClick={handleprev} className='arrow arrowleft'/>
      { image && image.length ?
        image.map((imageItem,index) => (
            <img
            key={imageItem.key}
            alt={imageItem.download_url}
            src={imageItem.download_url}
            className={currentSlider=== index ? "current" : "current hide-image"}
            />
        ))
     :null }
     <BsArrowRightCircleFill onClick={handlenext} className='arrow arrowright'/>
     <span className='circle-ind'>
     {
        image && image.length ? image.map((_,index) => (
            <button key={index} className={currentSlider=== index ? "current-ind" : "current-ind hide-imag"} onClick={()=> setCurrentSlider(index)}></button>
        ))
     :null}
      </span>
    </div>
  )
}
