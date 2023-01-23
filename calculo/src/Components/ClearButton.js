import React from 'react';
import './ClearButton.css'

const ClearButton = (props) => {
  return (
        <button 
        className='clear-button' 
        onClick={props.onHandleClick}
        >
            {props.text}
        </button>
  )
}

export  {ClearButton}