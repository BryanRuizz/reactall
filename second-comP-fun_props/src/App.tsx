import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HolaMundo } from './components/HolaMundo';
import { ComponenteFuncional } from './components/ComponenteFuncional';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/*abajo de mi logo react*/}
      <HolaMundo></HolaMundo>
      <ComponenteFuncional name={'bryan'}></ComponenteFuncional>

    </div>
  );
}

export default App;
