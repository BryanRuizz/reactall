const inicialState = {
    amount:0,
    bank:"BBVA"
    //amount es una variable de esatdo inicial

};

// mi reducer recibe un estado y action

export default (state = inicialState,action:any) =>{
    //aqui solo pudes poner acciones que allas definido previamente
    //esta accion esta definida en mi action
    if(action.type == "DEPOSIT_MONEY"){
        //si el tipo de accion es depositar quiero regresar un OBJETO
        return{
            //... crea una copia de 
            ...state,
            amount: state.amount+10,
            bank: action.bank,
            

        }
    }
    if(action.type =="WITHDRAW"){
        return{
            ...state,
            amount: state.amount-10,
            bank: action.bank,
        }
    }
    return state;
}//aaa

// selecciona del amount actual quiere decir que toma el valor actual de lo que tenemos
export const selectCurrentAmount = (state: { amountReducer: { amount: any;}; }) =>{
    return  state.amountReducer.amount; //regresa lo que tiene
}
export const selectCurrentBank = (state: { amountReducer: { bank: any;}; }) =>{
    return  state.amountReducer.bank; //regresa lo que tiene
}