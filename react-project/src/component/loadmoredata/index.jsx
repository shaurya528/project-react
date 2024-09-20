import React, { useState, useEffect } from 'react'

export default function Load() {
    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState([])
    const [count, setCount] = useState(0)
    async function fetchProduct() {
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=12&skip=${count === 0 ? 0 : count * 20}`);
            const result = await response.json()
            console.log(result)
            if (result && result.products && result.products.length) {
                setProduct((prevData) => [...prevData, ...result.products])
                setLoading(false)
            }
        } catch (e) {
            console.log(e)
            setLoading(false)
        }

    }

    useEffect(() => { fetchProduct() }, [count])

    if (loading) {
        return <div>loading Data please wait</div>
    }
    return (
        <div className='container'>
            <div className='product'>
                {
                    product && product.length ? product.map((item) => (

                        <div key={item.id} className='non'>
                            <img src={item.thumbnail}/>
                            <p> {item.title}</p>
                        </div>


                    ))


                        : null
                }
            </div>
            <div className='button'>
                <button onClick={()=> setCount(count+1)}>load more</button>
            </div>
        </div>
    )
}
