import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UnoComponent } from './components/UnoComponent';//importacionesde los componentes
import { DosComponent } from './components/DosComponent';
import { ButonComponent } from './components/ButonComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        
       { /*<UnoComponent></UnoComponent>*/}
       {/*<DosComponent></DosComponent>*/}

      <ButonComponent></ButonComponent>

      </header>
    </div>
  );
}

export default App;
