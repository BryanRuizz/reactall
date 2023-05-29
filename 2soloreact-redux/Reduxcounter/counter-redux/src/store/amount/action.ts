//esta es una accion type aloja una string y payload un number
//la accion depositar le dice que crea un incremeto en el payload
const deposit = () =>{
    {/*la funcion o accion deposit  regresa dos valores */}
    return{
        //una tipo type y un number 
        //action deposit_money
        type:"DEPOSIT_MONEY",
        payload: 10,
        bank: "bancomer"
    };
};
const withdraw = () =>{
    return{
        type:"WITHDRAW",
        payload: -10,
        bank:"lolbank"
    };
};

export { deposit,withdraw }
// se exportan
