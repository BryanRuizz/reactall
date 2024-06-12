import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
 
const URI = 'http://localhost:8000/blogs/'

const CompCreatBlog = () => {
   const [name, setName] = useState('')
   const [promedio, setPromedio] = useState('')
   const [universidad, setUniversidad] = useState('')
   const navigate = useNavigate()

   //pra save
   const store = async (e) =>{
    e.preventDefault()
    await axios.post(URI, {name: name, promedio: promedio, universidad: universidad})
    navigate('/')
   }

    return (
        <div>
            <h3>Insert data</h3>
             <form onSubmit={store} >
                <div className='mb-3'>
                    <label className='form-label'>Name</label>
                        <input
                            value={name}
                            onChange={ (e)=> setName(e.target.value)}
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <input
                            value={promedio}
                            onChange={ (e)=> setPromedio(e.target.value)}
                            type='number'
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                    <select
                            value={universidad}
                            onChange={(e) => setUniversidad(e.target.value)}
                            className="form-control"
                            >
                            <option value="">Seleccione una opción</option>
                            <option value="TEC Laguna">Instituto Tecnológico de la Laguna</option>
                            <option value="UTLD">Universidad tecnologica de la laguna de durango</option>
                            <option value="TEC de Monterrey">Instituto Tecnológico y de Estudios Superiores de Monterrey, Campus Laguna</option>
                            <option value="UTT">Universidad Tecnológica de Torreón</option>
                            <option value="UNIDEP">Universidad del Desarrollo Profesional (UNIDEP), Plantel Torreón</option>
                            <option value="DCM">Instituto de Estudios Superiores DCM</option>
                        </select>
                </div>

                <button type='submit' className='btn btn-primary'>Insert</button>

             </form>
        </div>
    )
}

export default CompCreatBlog