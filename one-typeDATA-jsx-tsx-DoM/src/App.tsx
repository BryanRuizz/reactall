import React from 'react';
import logo from './logo.svg';
import './App.css';

//func variables
const name1:string=  'hi'// common var
const elemntos = <h1>hello,{name1}</h1> // var element 

const formatName = (user: any) => {
  return user.firstName +' '+ user.lastName; 
}// funcion objte user   

//sigue siendo una var
const user = {
  firstName: 'Harper',
  lastName: 'marmol'
}//desde la app mandamos llamar la format y le enviamos el user para que la funcion nos
//regrese 'harper'  'marmol'

let urll= 'https://openai.com/blog/chatgpt';
let elementAhref = <a href={urll}>caele pa</a>


function App() {
  return (
    <div className="jsxone">
      {name1}
      {elemntos}
      <h2>
        konichiwa, {formatName(user)}
      </h2>
      {elementAhref}
    </div>
  );
}

export default App;
/* 
// Números
let age: number = 25;

// Cadenas de texto
let name: string = "John";

// Booleanos
let isLogged: boolean = true;

// Arreglos
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["John", "Jane", "Joe"];

// Tuplas
let person: [string, number] = ["John", 25];

// Objetos
interface Person {
  name: string;
  age: number;
}

let personObj: Person = {
  name: "John",
  age: 25
};

// Enumeraciones
enum Color {
  Red,
  Green,
  Blue
}

let favoriteColor: Color = Color.Blue;

// Any
let dynamicValue: any = "Hello";
dynamicValue = 42;

// Null y Undefined
let nullValue: null = null;
let undefinedValue: undefined = undefined;

// Void
function sayHello(): void {
  console.log("Hello!");  directo al log
}
 */