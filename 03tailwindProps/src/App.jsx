import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username : "Sahil",
    age : 23,
  }
  let newArr = [1,2,3,4,5]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
    <Card username = "chaiaurcode" btntext = "click me" />
    <Card username = "Sahil" btntext = "Learn more" />
    </>
  )
}

export default App