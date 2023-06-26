import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dado from './components/Dado'
function App() {
  const v1= Math.trunc(Math.random()* 6) +1
  const v2= Math.trunc(Math.random()* 6) +1
  

  return (
    <>
    <Dado valor={v1} />
    <Dado valor={v2} />
    </>
  )
}

export default App
