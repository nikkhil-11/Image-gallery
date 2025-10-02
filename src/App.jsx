import { useState } from 'react'
import Profile from './Components/profile'
import Brand from './Components/brands'
import Image from './Components/images'
import Footer from './Components/footer'



function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Profile/>
    <Brand/>
    <Image/>
    <Footer/>    
   </div>
  )
}

export default App
