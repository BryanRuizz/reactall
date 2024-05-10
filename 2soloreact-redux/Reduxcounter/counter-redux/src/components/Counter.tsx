import {deposit,withdraw} from '../store/amount/action'
//estas son las acciones llamdas Deposit y Whitdraw
import { selectCurrentAmount, selectCurrentBank } from '../store/amount/reducer'
//importamos el select dese nuestro reducer 
import { connect } from 'react-redux'; // me permite connectar con el store para traer datos de regreso


//mapear el estado amount para usarlo como propiedad o prop
const mapStateToProps = (state: { amountReducer: { amount: any, bank: any; }; }) =>{
    return{
        amount: selectCurrentAmount(state),
        bank: selectCurrentBank(state)

    };
};
interface CounterProps {
    deposit: () => void;
    withdraw: () => void;
    amount:any
    bank:any
}
//creacion del componente
//La funcion o componente Counter regresa solo una vista
// en la cual llamamos el evento click y llamamos una funcion deposit desde mis acciones importadas
const Counter = ({ bank,amount , deposit , withdraw }: CounterProps) =>{
    //le pasamos el amount y ya puede mostar su estado actual
    return(<div>
        <h1>Banco: {bank}</h1>
        <h2>{amount}</h2>
        {/*si se queda el on... sin ()=> se ejecuta apenas inicie la app con el () se espera hasta k den click*/}
        <button onClick={()=>deposit()}>Deposit $10</button> {/*las cuales al dar click llaman a deposit desde acciones*/}
        <button onClick={()=>withdraw()}>Whitdraw $10</button>

    </div>)
}
 
//export default Counter;// y su exportacion 
//conecct(para rescatar del store, para enviar)
//export default connect(null, {deposit, withdraw}) (Counter);
export default connect(mapStateToProps, {deposit, withdraw}) (Counter);
// map para traer datos del store con el select