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
import { Footer } from './Components/Footer';



function App() {

  

  return (
    <div className="App">
        <Header />
        <Main>
          <Calculator />
          <Info />
        </Main>
        <Footer />
    </div>
  );
}

export default App;
