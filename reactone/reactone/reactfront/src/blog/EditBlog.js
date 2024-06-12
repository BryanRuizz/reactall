import axios from "axios";
import { useEffect ,useState } from "react";
import { useNavigate,useParams } from "react-router-dom";

 
const URI = 'http://localhost:8000/blogs/'

const CompEditBlog = () =>{
    const [name, setName] = useState('')
    const [promedio, setPromedio] = useState('')
    const [universidad, setUniversidad] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) =>{
        e.preventDefault()
        await axios.put(URI+id,{
            name: name,
            promedio: promedio,
            universidad: universidad
        })
        navigate('/')
    }

    useEffect( ()=>{
        getBlogById()
    },[])

    const getBlogById = async () =>{
        const res = await axios.get(URI+id)
        setName(res.data.name)
        setPromedio(res.data.promedio)
        setUniversidad(res.data.universidad)
    }

    return(
        <div>
        <h3>Edit datda</h3>
         <form onSubmit={update} >
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

            <button type='submit' className='btn btn-primary'>Update</button>

         </form>
    </div>
    )

}

export default CompEditBlog