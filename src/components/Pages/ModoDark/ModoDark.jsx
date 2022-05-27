import { useState, useEffect } from 'react';
//import { Header } from '../../Layout/Header/Header'
import { ButtonUI} from '../../UI/ButtonUI/ButtonUI'


export const ModoDark = () => {

  const [modeDark, setModeDark] = useState(false);

  const handleOn = () => {
    setModeDark(!modeDark);
  }

  useEffect(() => {
    if(modeDark){
      document.body.classList.remove('light-mode')
      document.body.classList.add('dark-mode')
    }else{
      document.body.classList.remove('dark-mode')
      document.body.classList.add('light-mode')
    }
  }, [modeDark])
  return (
  
    <div className='container-dark'>
    <h2>ModoDark</h2>
    <ButtonUI textButton="On" event={handleOn} styleButton="buttonMode" />
    </div>
  )
}

