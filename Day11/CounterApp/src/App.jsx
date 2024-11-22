import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count,setCount] = useState(0);

  return (
   
    <>
       <div className="count-app">
         <h1 className="count-display">{count}</h1>
         <div className="count-body">
            <button 
                 onClick={()=>{
                  setCount(count + 1)
                 }}>Increment   
            </button>    
            <button 
                 onClick={()=>{
                  setCount(0)
                 }}>Reset  
            </button>  
            <button 
                 onClick={()=>{
                  setCount(count - 1)
                 }}>Decrement
            </button> 
          </div>
       </div>
       

      


    </>
  )
}

export default App
