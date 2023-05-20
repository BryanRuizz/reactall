import React from 'react';
import logo from './logo.svg';
import './App.css';
import { characters } from './api/character';
import { CardComponent } from './components/Card';
import { TypeCharacter } from './interface/character.interface';
import { Box, Grid } from '@mui/material';




function App() {
  //creamos una variable de estado
  //estado inicial y estado que colocaremos-----------------[] array por el tipo de dato en interface
const [allCharacters,setAllCharacters] = React.useState<TypeCharacter [] | null>(null)

// hook para effectos secundarios en este caso una llamada a una api 
// ()=> Esto indica que queremos ejecutar el efecto secundario especificado dentro de la función de flecha cuando el componente se monte inicialmente.
  React.useEffect(()=>{
    //hacemos un llamado a la funcion que creamos en character, llamda getALL en el obj characters
    //parametro page:1 indica el param y num de pag qe queremos
    characters.getAll({page: 1}).then((r)=>{
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
          allCharacters?.length !== 0 ? (
            <Grid container spacing={2} direction={"row"} >
              {allCharacters && allCharacters!.map((character)=>(
                <Grid item xs={3}>
              <CardComponent key={character.id} image={character.image} name={character.name} species={character.species}status={character.status} />
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
