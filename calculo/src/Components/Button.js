import React from 'react'
import './Button.css';




const Button = (props) => {
  const isSymbol = value =>{
    return isNaN(value) && (value !=='.')  && (value !==' ')
  };

  return (
    <div className={`button-container ${isSymbol(props.children) ? 'symbol' :  'button-number' }`.trimEnd()}
    onClick={() => props.onHandleClick(props.children)}>
        {props.children}
      
        
    </div> 
    

  )
}

export  {Button}


