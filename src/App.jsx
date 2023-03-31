import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'

import SideCard from './Components/SideCard/SideCard'
import Cards from './Components/Cards/cards'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App w-10/12 mx-auto">
     <Header></Header>
    
      <Cards></Cards>
  

     
     
     

    </div>
  )
}

export default App
