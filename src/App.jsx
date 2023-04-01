import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'

import SideCard from './Components/SideCard/SideCard'
import Cards from './Components/Cards/cards'
import Question from './Components/Question/Question'



function App() {


  return (
    <div className="App w-10/12 mx-auto">
     <Header></Header>
    
      <Cards></Cards>
    <Question></Question>

      
  

     
     
     

    </div>
  )
}

export default App
