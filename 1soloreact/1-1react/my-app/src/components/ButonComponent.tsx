import React, {useState} from 'react'; //HOOK QUE PROVIENDE DE REACT

export const ButonComponent = () => {
    //let nombre:string = "pablo state 0";
    const [nombre, setNombre]= useState('Pablo estado 0 o base ');
    //valor de estado 



    // funcion   es igual nueva variable:any cualquier tipo
    const cambiarNombre = (newNombre:any) => {
        setNombre(newNombre);

        //nombre= newNombre;
        // valor nuevo a la varibable

    }


  return (
    <div>
        <h2>cambio y uso del state</h2>
        <h3>
             Valor del estado 0, 
            {/*segun el largo del name cambiara el color, pero solo a la variable */}
            <strong className={nombre.length >= 17? 'verde':'rojo'}>   {nombre}  </strong>
        </h3>
        {/*input llama evento cambio estado, funcion, estado taget(var) cambiar valor*/}

        {/*<input type='text' onChange={e => cambiarNombre(e.target.value)} placeholder='cambia el nombre' />*/}


        <button onClick={e =>cambiarNombre("naruto estado 2")}>cambiar name</button>
        {/*al presionar el boton evento funcion cambiar name var nombre a naruto.. */}

        <button onClick={e =>{console.log("estado actual es:", nombre);
        }}>mostrar actual del estado</button>



    </div>
    
  )
}
