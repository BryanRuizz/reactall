import React from "react";

interface ComponenteClaseProps{

}

// el extends es como decir  hereda de otra clase
export class ComponenteClase extends React.Component<ComponenteClaseProps, any> {
    constructor(props: ComponenteClaseProps){
        super(props)   //al crearc super no se pude mandar llamar this 
    }

    render(): React.ReactNode {
        return <>
        desde comp clase and props 
        </>;
    }


}