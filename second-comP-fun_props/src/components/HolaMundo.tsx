import React from "react";

interface HolaMundoProps{
    
}//creacion de un componente 



export const HolaMundo: React.FC<HolaMundoProps> =({}) =>{
    return(<>
    <h1>Holamundo</h1>
    </>)//lo que manda el componente al mandarlo llamar
}

//los componentes te permiten separar la interface de usuario en 
//divide y venceras
