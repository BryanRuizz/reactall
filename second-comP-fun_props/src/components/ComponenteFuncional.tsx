
interface ComponenteFuncionalProps{
// propiedades de componentes son los datos que el comp espera recibir
    name: string;
}

export const ComponenteFuncional: React.FC<ComponenteFuncionalProps> = ({name}) =>{
return(<>
vengo desde compfuncional {name}
 </>)
}
//la diferencia entre los componentes normales y los funcionales son las propiedades que puede adquier 
//un componente funcional