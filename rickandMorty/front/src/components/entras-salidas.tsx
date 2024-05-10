import { Props } from "@headlessui/react/dist/types";
import React, { useEffect, useState } from "react";
import { useDrag } from '@use-gesture/react';
import { Container, Navbar, Offcanvas } from "react-bootstrap";
// import { CheckSlice } from '../../../interfaces/CheckSlice';
import getChecks, { /*fetchData*/ } from "../../../../reducers/CheckSlice";
import { TypeCharacter } from "../../../../interfaces/CheckInterface";
import { useDispatch, useSelector } from "react-redux";

interface CheckCompProps {
    showInVar: any,
    hiddenShowIn: any
    
  }

//        const response = await reqResApi.get<ListTipoMant[]>('/TrabajoMantto', {headers: {"Authorization" : `Bearer ${store.getState().login.token}`} })

// interface Clasificacion {
  
//   clasificacion: string;
//   descripcion: string;
//   entrada: boolean;
//   salida: boolean;
// }

export const CheckComp: React.FC<CheckCompProps>= (props)=>{


  // const [clasificaciones, setClasificaciones] = useState<Clasificacion[]>([
  //   { clasificacion:"documentos", descripcion: 'Documentos', entrada: false, salida: false },
  //   { clasificacion:"documentos", descripcion: 'Tracto camion', entrada: false, salida: false },
  //   { clasificacion:"documentos", descripcion: 'Remolque (SR1)', entrada: false, salida: false },
  //   { clasificacion:"documentos", descripcion: 'Remolque (SR1)', entrada: false, salida: false },
  // ]);

  // const handleCheckboxChange = (index: number, fieldName: 'entrada' | 'salida') => {
  //   const updatedClasificaciones = [...clasificaciones];
  //   updatedClasificaciones[index] = {
  //     ...updatedClasificaciones[index],
  //     [fieldName]: !updatedClasificaciones[index][fieldName],
  //   };
  //   setClasificaciones(updatedClasificaciones);
  // };
  

   const [data, setData] = useState<TypeCharacter[]>([]); // Variable para guardar los datos obtenidos// ------------esta es la buena 
   //                               los tipos de datos
//------------------------------------------------------------------------------------este es el bueno
    const fetchData = async () => {
    try {
      const response = await getChecks(); // Llama a la función listType para obtener la respuesta de la API
      //const responseData = await response;
      
      setData(response);

      console.log("Respuesta de la API pa:", response); // Muestra la respuesta en el console.log
    } catch (error) {
      console.log("Error al obtener los datos de la API:", error);
    }
  };
    
      useEffect(() => {
        
       fetchData(); // Llama a la función fetchData al montar el componente
      }, []); // El segundo argumento vacío indica que solo se debe ejecutar una vez al montar el componente
    


    return(<div>
         <Navbar className="hide z-10 bg-white flex items-center flex-shrink-0 w-full" expanded={props.showInVar}>
            <Container fluid>
                <Navbar.Brand style={{ color: '#E87A06' }}></Navbar.Brand>
                <Navbar.Toggle style={{ color: '#FFBB73' }} aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas className="box box-radius" id="text" aria-labelledby="offcanvasNavbarLabel" placement="end" >
                    <Offcanvas.Header >
                        <Offcanvas.Title id="">Inspeccion de Unidades</Offcanvas.Title>
                        <button onClick={() => { props.hiddenShowIn()}}>X</button>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                            <div className="">
                                {/* {---------------------------------esta es la buena
                                        !data ? 'cargando...': 
                                    data.map((item: any) => (
                                    <div key={item.id}>
                                        ola
                                        <h3>{item.clasificacion}</h3>
                                        {item.descripciones.map((descripcion: any) => (
                                        <div key={descripcion.id}>
                                            <p>{descripcion.descripcion}</p>
                                            <input type="checkbox" checked={descripcion.status} />
                                        </div>
                                        ))}
                                    </div>
                                    )) 
                                } */}
                      
                      
                      
                      
                      
                      
                               {/* <div className="">
                                <div className="row">
                                    <div className="col-4">
                                      <h1 className="text-center">Clasificación</h1>
                                    </div>
                                    <div className="col-4 text-right">
                                      <h3>Entrada</h3>
                                    </div>
                                    <div className="col-4 text-right">
                                      <h3>Salida</h3>
                                    </div>
                                  </div>

                                    <div>
                                      <br></br>
                                    </div>

                                    {clasificaciones.map((clasificacion, index) => (
    <div className="row" key={index}>
      <div className="col-4">
        {index === 0 && <h2>{clasificacion.clasificacion}</h2>} {/* Mostrar la clasificación solo en el primer índice 
        {clasificacion.descripcion.map((descripcion, subIndex) => (
          <p key={subIndex}>{descripcion}</p>
        ))}
      </div>

                                        <div className="col-4 text-right">
                                          <div className="form-check">
                                            <input
                                              className="form-check-input"
                                              type="checkbox"
                                              checked={clasificacion.entrada}
                                              onChange={() => handleCheckboxChange(index, 'entrada')}
                                            />
                                          </div>
                                        </div>
                                        <div className="col-4 text-right">
                                          <div className="form-check">
                                            <input
                                              className="form-check-input"
                                              type="checkbox"
                                              checked={clasificacion.salida}
                                              onChange={() => handleCheckboxChange(index, 'salida')}
                                            />
                                          </div>

                                        </div>
                                        <div><br></br></div>
                                      
                                      </div>
                                    ))}
                                  </div> */}
                                                       
                            </div> 


                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    </div>)
}

// este codigo es el que tenia y lo queria conservar de prueba