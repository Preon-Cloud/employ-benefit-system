import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StepperForm from './componnents/stepperform'
import Navbar from './componnents/Navbar'
// import Navbar from './componnents/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container mx-auto '>
      <Navbar/>
  <StepperForm/>
  </div>
    </>
  )
}

export default App
