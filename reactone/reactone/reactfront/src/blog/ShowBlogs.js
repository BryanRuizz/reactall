import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'

const CompShowBlogs = () => {
    const [blogs, setBlog] = useState([])
    useEffect(() => {
        getBlogs()
    },[])
    //procedimineto para mostrar los alumnos
    const getBlogs = async () => {
      const res = await axios.get(URI)
      setBlog(res.data)
    }
    //prpc to dele
    const deleteBlog = async (id) =>{
       await axios.delete(`${URI}${id}`)
        getBlogs()
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-user-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Name</th>
                                <th>Promedio</th>
                                <th>Universidad</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { blogs.map ( (blog) =>(
                                <tr key={blog.id}>
                                    <td> {blog.name} </td>
                                    <td> {blog.promedio} </td>
                                    <td> {blog.universidad} </td>
                                    <td>
                                        <Link to={`/edit/${blog.id}`} className='btn btn-info' ><i className="fa-solid fa-file-pen"></i></Link>
                                        <button onClick={ () =>deleteBlog(blog.id) } className='btn btn-danger'><i className="fa-sharp fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            ) ) }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
    
}

export default CompShowBlogs