import React from 'react'

export const UnoComponent = () => {
    const correo: string ="ola@outlook.es";
    const password:string = "pablo123";
    let arrayj =["paso","apaso","tres"];
  return (
    <div className='container-fluid'>
        <h1>Comp one</h1>
        <label>{correo}</label>
        <label>{password}</label>
        <ul>
            {
                arrayj.map((array) =>{
                    return (<li>{array}</li>);
                })
            }
        </ul>

    </div>
  )
  //rafc
}

//rafc