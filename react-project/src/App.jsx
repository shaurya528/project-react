import { useState } from 'react'
// import Load from './component/loadmoredata'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Accodian from './component/accodian'
// import Randomcolor from './component/random-color'
// import StarRating from './component/Star-rating'
// import ImageSlider from './component/image-slider'
import Code from './component/qr-code'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
   {/* <StarRating noofstar={10}/> */}
   {/* <ImageSlider url = {"https://picsum.photos/v2/list"} page={'1'} limit ={"10"}/> */}
   <Code/>
    </>
  )
}

export default App
