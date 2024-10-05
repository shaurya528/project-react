import React, { useEffect, useState } from 'react'

export default function Scroll({url}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("")
    const[scrollper , setScrollper] = useState(0)
    async function fetchData(geturl) {
        try {
            setLoading(true)
            const response = await fetch(geturl)
            const data = await response.json();
            if(data && data.products &&data.products.length >0){
                setData(data.products);
                setLoading(false)
            }

        } catch (e) {
            console.log(e);
            setError(e.message)
        }
    }

    useEffect(() => {
        fetchData(url);
    }, [url])
    function handlescrollper(){
        console.log(document.body.scrollTop,
            document.documentElement.scrollTop,
            document.documentElement.scrollHeight,
            document.documentElement.clientHeight
        )
        const how = document.body.scrollTop ||document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight-document.documentElement.clientHeight;
        setScrollper((how/height)*100);
    }
   
    useState(()=>{
        window.addEventListener('scroll' , handlescrollper)
        return ()=>{
            window.removeEventListener('scroll',()=>{})
        }
    },[])
console.log(data,scrollper)

    return (
        <div>
            <div className='top'>
            <h1>coustum scroll</h1>
         <div className='scroll'>
            <div className='current' style={{width:`${scrollper}%`}}></div>
         </div>
            </div>
        
         <div className='container'>
            {
                data && data.length >0 ? data.map((item)=><p>{item.title}</p>):null
            }
         </div>
        </div>
    )
}
