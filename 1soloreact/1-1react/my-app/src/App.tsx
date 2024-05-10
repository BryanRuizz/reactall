import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UnoComponent } from './components/UnoComponent';//importacionesde los componentes
import { DosComponent } from './components/DosComponent';
import { ButonComponent } from './components/ButonComponent';


function App() {

  const [subProcesos, setSubProcesos] = useState<{ id: number }[]>([{ id: 0 }]);
  const contenedorFormulariosRef = useRef<HTMLDivElement>(null);
  const contenedorSubProcesosRef = useRef<HTMLDivElement>(null);

  const agregarCampoSubProceso = () => {
    console.log("mira bastarda");
    if (contenedorSubProcesosRef.current) {
      const nuevoIndice = contenedorSubProcesosRef.current.children.length;
      const nuevoID = `divRegla-${nuevoIndice}`;

      const nuevoCampo = document.createElement('div');
      nuevoCampo.className = 'skin skin-flat form-group mb-1 col-sm-12 col-md-4 col-lg-4';
      nuevoCampo.id = nuevoID;

      const label = document.createElement('label');
      label.className = 'requerido';
      label.htmlFor = `subproceso-${nuevoIndice}`;
      label.textContent = 'Sub-Proceso:';
      nuevoCampo.appendChild(label);

      const input = document.createElement('input');
      input.className = 'form-control';
      input.type = 'text';
      input.id = `subproceso-${nuevoIndice}`;
      input.name = `subproceso[${nuevoIndice}]`;
      input.placeholder = 'Nombre del Sub-Proceso';
      nuevoCampo.appendChild(input);

      contenedorSubProcesosRef.current.appendChild(nuevoCampo);
    }
  };

  const eliminarCampoSubProceso = () => {
    if (contenedorSubProcesosRef.current) {
      const contenedor = contenedorSubProcesosRef.current;
      if (contenedor.children.length > 1) {
        contenedor.removeChild(contenedor.lastElementChild as Node);
      } else {
        alert('No hay más campos para eliminar.');
      }
    }
  };

  const clonarFormulario = () => {
    if (contenedorFormulariosRef.current) {
      const contenedorFormularios = contenedorFormulariosRef.current;
      const nuevoIndice = contenedorFormularios.children.length;
      const nuevoID = `formulario-${nuevoIndice}`;

      const nuevoFormulario = document.createElement('form');
      nuevoFormulario.id = nuevoID;

      // ... Configuración de nuevo formulario, limpiar valores, clonar botones, etc.

      contenedorFormularios.appendChild(nuevoFormulario);
    }
  };

  const eliminarUltimoFormulario = () => {
    if (contenedorFormulariosRef.current) {
      const contenedorFormularios = contenedorFormulariosRef.current;
      if (contenedorFormularios.children.length > 1) {
        contenedorFormularios.removeChild(contenedorFormularios.lastElementChild as Node);
      }
    }
  };
  return (
    <div className="App">
      <header className="App-header">



        <div id="form-repeater">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title" id="repeat-form">Registro de Plantillas:</h4>
                  <a className="heading-elements-toggle"><i className="la la-ellipsis-h font-medium-3"></i></a>
                  <div className="heading-elements">
                    <ul className="list-inline mb-0">
                      <li><a data-action="collapse"><i className="ft-minus"></i></a></li>
                      <li><a data-action="reload"><i className="ft-rotate-cw"></i></a></li>
                      <li><a data-action="expand"><i className="ft-maximize"></i></a></li>
                      <li><a data-action="close"><i className="ft-x"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div className="card-content collapse show">
                  <div className="card-body">

                    <div className="form-row">
                      <div className="skin skin-flat form-group mb-1 col-sm-12 col-md-4 col-lg-4">
                        <label className="requerido" htmlFor="slcEmpleados">Nombre:</label>
                        <br />
                        <input type="text" className="form-control" id="nombretrabajo" name="nombretrabajo" placeholder="Nombre de trabajo" />
                      </div>
                    </div>

                    <div className="" id="contenedorFormularios">
                      <form id="formulario-0">
                        <div>
                          <div id="contenedorProcesos" className="form-row">
                            <div className="skin skin-flat form-group mb-1 col-sm-12 col-md-4 col-lg-4" id="divProceso-0">
                              <label className="requerido" htmlFor="proceso-0">Proceso:</label>
                              <i data-toggle="tooltip" data-popup="tooltip-custom" data-placement="right" data-bg-color="warning"></i>
                              <br />
                              <input type="text" className="form-control" id="proceso-0" name="proceso[0]" placeholder="Nombre del proceso" />
                            </div>
                          </div>

                          <div id="contenedorSubProcesos" className="form-row">
                            <div className="skin skin-flat form-group mb-1 col-sm-12 col-md-4 col-lg-4" id="divRegla-0">
                              <label className="requerido" htmlFor="subproceso-0">Sub-Proceso:</label>
                              <i data-toggle="tooltip" data-popup="tooltip-custom" data-placement="right" data-bg-color="warning"></i>
                              <br />
                              <input type="text" className="form-control" id="subproceso-0" name="subproceso[0]" placeholder="Nombre del Sub-Proceso" />
                            </div>
                            <hr />
                          </div>
                        </div>
                        <div className="form-group overflow-hidden form row">
                          <div className="form-group col-sm-12 col-md-4 col-lg-2">
                            <button type="button" onClick={agregarCampoSubProceso} >Agregar Sub-Proceso</button>
                          </div>
                          <div className="form-group col-sm-12 col-md-4 col-lg-2">
                            <button type="button" id="btnAnadirFilaRegla" onClick={eliminarCampoSubProceso}>Eliminar Sub-Proceso</button>
                          </div>
                          <div className="form-group col-sm-12 col-md-4 col-lg-2">
                            <button type="button" id="btnAnadirFilaRegla" onClick={clonarFormulario}>Agregar Proceso</button>
                          </div>
                          <div className="form-group col-sm-12 col-md-4 col-lg-2">
                            <button type="button" id="btnAnadirFilaRegla" onClick={eliminarUltimoFormulario}>Eliminar Proceso</button>
                          </div>
                        </div>
                      </form >
                    </div>



                  </div>
                </div>
              </div>


              <div className="form-group overflow-hidden form row">
                <div className="form-group col-sm-12 col-md-4 col-lg-2">
                  <button className="btn btn-primary" id="btnInsertar" title="RegistrarItem();">
                    <i className="ft-plus"></i> Registrar Plantilla
                  </button>
                </div>
              </div>

              <div className="col-12">
                <hr></hr>
              </div>

            </div>
          </div>
        </div>

      </header >
    </div >




  );
}

export default App;
