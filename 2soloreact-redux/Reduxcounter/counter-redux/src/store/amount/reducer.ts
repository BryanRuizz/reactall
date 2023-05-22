const inicialState = {
    amount:0,
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
            amount: state.amount+10
        }
    }
    if(action.type =="WITHDRAW"){
        return{
            ...state,
            amount: state.amount-10
        }
    }
}//aaa