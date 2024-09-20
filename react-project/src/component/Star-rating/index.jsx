import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'
export default function StarRating({noofstar =5}) {
    const[rating,setRating] = useState(0)
    const[hover,setHover] = useState(0)
    function handlecliick(getindex){
        console.log(getindex)
        setRating(getindex)
    }
    function handlemouseenter(getindex){
        console.log(getindex)
        setHover(getindex)

    }
    function handlemouseleave(){
        console.log(getindex)
        setHover(rating)

    }
  return (
    <div className='star-rating'>
        {
            [... Array(noofstar)].map((_,index)=>{
                index += 1
                return <FaStar
                className={index <= (hover|| rating) ? 'active' : 'inactive'}
                key={index}
                onClick={()=> handlecliick(index)}
                onMouseMove={()=>handlemouseenter(index)}
                onMouseLeave={()=> handlemouseleave()}
                size={50}
                />
            })
        }
      
    </div>
  )
}
