import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//segundo nodo
const root2 = ReactDOM.createRoot(
  document.getElementById('root2') as HTMLElement
);

//funciones async solo con axios
const reloj = () =>{
//todo este conjunto es el nuevo nodo debajo del principalque es el 1
const element =
  <div>
    <h1>segundo nodo </h1>
    <h2>its is {new Date().toLocaleTimeString()}.</h2>

    <p>este nodo se renderisa en el dom virtual </p>
  </div>

root2.render(element);
}


setInterval(reloj, 1000)
//se actualiza la funcion cada 1000 milisegundos





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
