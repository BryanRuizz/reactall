import React from 'react';
import logo from './logo.svg';
import './App.css';
import { characters } from './api/character';
//las acciones que puede ejecutar
import { CardComponent } from './components/Card';
import { TypeCharacter } from './interface/character.interface';
// los tipos de datos que va a recibir son desde app
import { Box, Grid } from '@mui/material';




function App() {
  //creamos una variable de estado
  //estado inicial y estado que colocaremos-----------------[] array por el tipo de dato en interface
const [allCharacters,setAllCharacters] = React.useState<TypeCharacter [] | null>(null)
// declaracion var, func actualizar estado,, inicializacion del estado, el estado puede conter la interface character o puede ser null


// hook para effectos secundarios en este caso una llamada a una api 
// ()=> Esto indica que queremos ejecutar el efecto secundario especificado dentro de la función de flecha cuando el componente se monte inicialmente.
  React.useEffect(()=>{
    //hacemos un llamado a la funcion que creamos en character, llamda getALL en el obj characters
    //parametro page:1 indica el param y num de pag qe queremos
    characters.getAll({page: 1}).then((r)=>{
      //console.log(r);
      //metodo then para manejar la llamada a getall, param ,r es la resp de la llamda 
      setAllCharacters(r.data.results)
      //accedemos a r.datos.reults para visualizar los datos que llegaron
    }).catch((e)=> {
      //catch para atrapar los errores y un console para mostrarlo
      console.error(e)
    })

  },[]) 
//,[] dependencias, sin dep quiere decir que se ejec una vez al inicio, cada renderizacion
/* function App() {
      React.useEffect(()=>{
        characters.getByid({id:1}).then((r)=>{
          console.log(r.data)
        
        }).catch((e)=> {
        console.error(e)
      })
    },[])  */

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
     
        {
          //valor del estado si la respuesta es mayor a 0 se ejecuta mi componente
          allCharacters?.length !== 0 ? (
            // contenedor de cuadrícula con una dirección de fila y un espaciado de 2 unidades entre los elementos de la cuadrícula.
            <Grid container spacing={2} direction={"row"} >
              {/*verifica si no es null, */}
              {/*si no es null se usa la func map para cada personaje */}
              {allCharacters && allCharacters!.map((character)=>(
                <Grid item xs={3}>{/*tamaño del grid*/}
              <CardComponent key={character.id} image={character.image} name={character.name} species={character.species}status={character.status} />
              {/*manda las props a mi componente quien las recibe y se crea comop por comp*/}
              </Grid>
              ))}
            </Grid>
          ): " "
        }

      </header>
     
       
      
    </div>
    
  );
}

export default App;
