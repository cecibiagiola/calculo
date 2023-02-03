import React from 'react'
import {Button} from './Button';
import {Screen} from './Screen';
import { ClearButton } from './ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import './Calculator.css';

const Calculator = () => {
    const [input, setInput] = useState(0);


  const addInput = value => {
    setInput(input + value);
  };

  function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
};
   const calculate = () => {
     setInput(evaluate(input) + random(1, 9));
  } 
 
    return (
    <div className='calculator'>
        <div className='calculator-container'>
        <Screen input={input}/>
          <div className='row'>
            <Button onHandleClick={addInput}>1</Button>
            <Button onHandleClick={addInput}>2</Button>
            <Button onHandleClick={addInput}>3</Button>
            <Button onHandleClick={addInput}>+</Button>
          </div>
          <div className='row'>
            <Button onHandleClick={addInput}>4</Button>
            <Button onHandleClick={addInput}>5</Button>
            <Button onHandleClick={addInput}>6</Button>
            <Button onHandleClick={addInput}>-</Button>
          </div>
          <div className='row'>
            <Button onHandleClick={addInput}>7</Button>
            <Button onHandleClick={addInput}>8</Button>
            <Button onHandleClick={addInput}>9</Button>
            <Button onHandleClick={addInput}>X</Button>
          </div>
          <div className='row'>
            <Button onHandleClick={calculate}>=</Button>
            <Button onHandleClick={addInput}>0</Button>
            <Button onHandleClick={addInput}>.</Button>
            <Button onHandleClick={addInput}>/</Button> 
          </div>
          <div className='row'>
            <ClearButton
              text='Clear' 
              onHandleClick={() => setInput('')}           
            />
          </div>
        </div> 
    </div>
    
    
  )
}

export {Calculator}