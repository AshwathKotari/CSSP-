import { useState } from 'react'

import './App.css'
import { Navbar } from './Navbar'
import { Routes,Route} from 'react-router-dom'
import { Home } from './Home'
import { About } from './About'
import TransitionExample from './TransistionExample'
import AnimationExample from './AnimationExample'

function App() {
  

  return (
    <>
     
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
     </Routes>
     <TransitionExample/>
     <AnimationExample/>
     <h1 className='h1'>Font Check</h1>
     
    </>
  )
}

export default App
