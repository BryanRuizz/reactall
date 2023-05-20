import { instance } from "./base.api" // desde el momento que mandas llamar instance se imorta sola
// la instancia que creamos en base.api que llama a la base url


const endpoint = "character"
// un endpoint que terminara de completar la url para traer la inf

//creacion de obj para agregar funciones
export const characters = {
    //creamos una funcion llamda getAll
    getAll: function ({ page = 1 }: { page ?: number }) {
        //de entrada el get te pide un url que le pasamaos el endpint que contiene la utima parte del /character
        //si fuese post pediria un body 
        //regresa instance que contiene la url.get /character traem los parametros

        return instance.get(endpoint, {
            params: {
                //al hacer una peticion por postman la api responde con paginacion a lo cual se espera como parametro PAGE
                //aqui van los parametros que trae
            }
        })
    },
    getByid: function ({ id }: { id: number }) {
        //de entrada el get te pide un url que le pasamaos el endpint que contiene la utima parte del /character
        //si fuese post pediria un body 
        //regresa instance que contiene la url.get /character traem los parametros
        
        return instance.get(`${endpoint}/${id}`)
        //instance. get pide terminar la url pero para ser espesifico usamos un por id que tambien seria lo que espeera
        // pero lo escapamos `` para poder usar correctamente {$ var}
        
    }
}