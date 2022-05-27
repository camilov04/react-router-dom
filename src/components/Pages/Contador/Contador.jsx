import {useState} from 'react'
import {ContadorNum} from '../../UI/ContadorButton/ContadorButton'

export const Contador = () => {
  const [counter, setCounter] = useState(0);
  const handleAdd = () => {
    setCounter(counter+1)
  }
  
  const handleSubstract = () => {
    setCounter(counter-1)
  }
  
  const handleReset = () => {
    setCounter(counter=0)
  }
  return (
    <>
        <h2>hkjy</h2>
        <h1>Contador</h1>
        <div className='con'>
        
        <ContadorNum event={handleAdd} style={"sumar"} textButton="+"/>

        <ContadorNum event={handleReset} style={"reset"} textButton="0" />

        <ContadorNum event={handleSubstract} style={"substract"} textButton="-"/>

        </div>       

    </>
    
  )
}

