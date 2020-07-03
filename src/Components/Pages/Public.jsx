import React from 'react'
import useFetch from '../CustomHooks/useFetch'

const Public = ()=>{
    const courses = useFetch('http://my-json-server.typicode.com/OmarMorales71/json-db/cursos', [])
    console.log(courses)

    return (
        <>
        <h1>Pagina publica</h1>
        <div>
            <ul>
                {courses.loading &&  <p>Cargando</p>}
                {courses.data && courses.data.map(course=>(
                    <li>{course.title}</li>
                ))}
            </ul>
        </div>
        </>
        )
}

export default Public