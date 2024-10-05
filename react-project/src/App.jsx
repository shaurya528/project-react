import { useState } from 'react'
// import Load from './component/loadmoredata'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Accodian from './component/accodian'
// import Randomcolor from './component/random-color'
// import StarRating from './component/Star-rating'
// import ImageSlider from './component/image-slider'
// import Code from './component/qr-code'
import Scroll from './component/scroll'
import Mytab from './component/tabs/my-tab'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
   {/* <StarRating noofstar={10}/> */}
   <Mytab/>
    </>
  )
}

export default App
