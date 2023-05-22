import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; //para las rutas
import Counter from './components/Counter';//cuando lo llamas abajo se hace la importacion sola

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
   
          <Counter />
          {/*mandas llamar al componente*/}

      </header>
    </div>
  );
}

export default App;
