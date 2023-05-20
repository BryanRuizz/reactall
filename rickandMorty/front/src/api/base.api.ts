import axios from 'axios'
// para hacre uso de axios debes de importartlo 

//variable
const BASE_URL = "https://rickandmortyapi.com/api/";
//consumo de api se guarda en una variable y se exporta abajo  para que se pude llamar desde otro lado
// end point al que debdemos pegarle es /character


// se crea una instancia con axios que pueda ser llamada desde otros modulos o archivos 
export const instance = axios.create({
    baseURL: BASE_URL
})

// la palabra export indica que puede ser accesible desde otros archivos o modulos de la app

//const instance = axios.create({baseURL: BASE_URL})
// se crea una constante LLAMADA "instance" que almacena una instancia personalizada de axios create instance
// proporciono un objeto de typo url
//url = base a la cual se haran las peticiones 