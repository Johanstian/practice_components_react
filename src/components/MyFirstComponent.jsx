import React from 'react'

export const MyFirstComponent = () => {

  const name = "Johan López";

  const github_profile = "https://github.com/Johanstian";

  const student = {name: "Sebastian", last_name: "Campo", mobibe: 318588, linkedinProfile: "https://www.linkedin.com/in/johan-sebastian-l%C3%B3pez-campo-189655217/"}

  console.log(student)

  return (
    <>
      <div>MyFirstComponent</div>
      <div className='container bg-secondary mt-2'>
        <ul>
          <li>Componentes</li>
          <li>Eventos</li>
          <li>Estados Hooks</li>
          {/*
      <li>Props</li>
      */}
        </ul>
      </div>

      <div className='container bg-primary py-2'>
      <h1>Datos del Docente</h1>
        <p>Nombre: <strong>{ name }</strong></p>
        <p>GitHub: { github_profile }</p>
      </div>

      <div className='container bg-success-subtle py-2'>
      <h1>Datos del Estudiante</h1>
        <p>Nombre: { student.name }</p>
        <p>Apellido: { student.last_name }</p>
        <p>Celular: { student.mobibe }</p>
        <p>Linkedin: <a href={ student.linkedinProfile }>{ student.linkedinProfile }</a></p>
      </div>

      <div className='container mt-2 pt-2'>
        <h1>Objeto Completo</h1>
        <pre>{JSON.stringify( student )}</pre>
      </div>
    </>
  )
}