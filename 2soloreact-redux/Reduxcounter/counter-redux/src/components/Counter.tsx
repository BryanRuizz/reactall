import {deposit,withdraw} from '../store/amount/action'
//estas son las acciones llamdas Deposit y Whitdraw

//creacion del componente
//La funcion o componente Counter regresa solo una vista
// en la cual llamamos el evento click y llamamos una funcion deposit desde mis acciones importadas
const Counter = () =>{
    return(<div>
        <h1>Amount ...</h1>
        {/*si se queda el on... sin ()=> se ejecuta apenas inicie la app con el () se espera hasta k den click*/}
        <button onClick={()=>deposit}>Deposit $10</button> {/*las cuales al dar click llaman a deposit desde acciones*/}
        <button onClick={()=>withdraw}>Whitdraw $10</button>

    </div>)
}
 
export default Counter;// y su exportacion 