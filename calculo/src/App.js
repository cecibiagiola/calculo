import './App.css';
/* import {Button} from './Components/Button';
import {Screen} from './Components/Screen';
import { ClearButton } from './Components/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs'; */
import {Header} from './Components/Header';
import { Calculator } from './Components/Calculator';
import {Main} from './Components/Main';
import {Info} from './Components/Info';



function App() {

  

  return (
    <div className="App">
        <Header />
        <Main>
          <Calculator />
          <Info />
        </Main>
    </div>
  );
}

export default App;
