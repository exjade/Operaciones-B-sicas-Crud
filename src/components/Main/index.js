import React, { useState } from "react";
import { nanoid } from 'nanoid';


export default function Main() {
  // 1. HOOKS

  // Gestion de nuevos comentarios
  const [newComment, setNewComment] = useState({
    title: '',
    description: '',
  });
  // Manipulación de comentarios
  const [comments, setComments] = useState([]);
  // Modo creación o modo edición
  const [edition, setEdition] = useState(false);
  // identificación de comentarios
  const [id, setId] = useState('');
  // Error
  const [error, setError] = useState(null);

  const [boton, setMostrarBoton] = useState(true)

  // 2. FORMULARIO

  // Cambios dentro del formulario
  const handleChange = (e) => {
    e.preventDefault();

    setNewComment({
      ...newComment,
      id: nanoid(),
      [e.target.name]: e.target.value
    })
  }


  // 3. CRUD

  // Añadir Comentario
  const addComment = (e) => {
    e.preventDefault(); // Evita la recarga de la pagina

    // En caso de que esté vacio cualquiera de los formularios
    if (!newComment.title.trim() || !newComment.description.trim()) {
      setError('Escriba algo por favor')
      return
    }
    setComments([newComment, ...comments])
    setNewComment({
      title: '',
      description: ''
    })
    setError(null)
    console.log(comments)

  }
  // Eliminar Comentarios
  const deleteComment = (id) => {
    const arrayFiltrado = comments.filter((item) => {
      return item.id !== id
    })
    setComments(arrayFiltrado)
  }

  // Editar Comentarios
  const editComment = (e) => {
    e.preventDefault();

    if (!newComment.title.trim() || !newComment.description.trim()) {
      setError('Debes rellenar los cuadros')
      return
    }

    const modifiedArray = comments.map((element) => {
      return element.id === id ? {
        id: id,
        title: newComment.title,
        description: newComment.description
      }
        : element
    })
    setComments(modifiedArray)
    setEdition(false)
    setMostrarBoton(true)
    setNewComment({
      title: '',
      description: ''
    })
    setError(null)

  }
  // Modo Edición 
  const edit = (element) => {
    setEdition(true)
    setMostrarBoton(false)
    setNewComment({
      id: element.id,
      title: element.title,
      description: element.description
    })
    setId(element.id)
  }

  // 4. RETORNO

  return (
    <>
      <h2 className="text-center text-3xl text-gray-900 py-8 sm:text-4xl font-mono " >Caja de Comentarios</h2>

      <div className={edition ? "max-w-5xl mx-auto px-6 pb-6 sm:px-12 bg-yellow-100 rounded-md" : "max-w-5xl mx-auto px-6 sm:px-12"}>
        <form onSubmit={edition ? editComment : addComment}>
          <h3 className="text-lg leading-6 font-medium text-gray-900 py-3 font-mono "  >Asunto</h3>
          <input
            name='title'
            className=" h-16 placeholder-gray-900 text-center border shadow-xl mt-2 rounded-md border-gray-200 block w-full  focus:ring-blue-700 focus:border-blue text-9x1 "
            onChange={(e) => handleChange(e)} // Monitoreo de cada cambio
            value={newComment.title}
            placeholder="Escribe el asunto de tu mensaje"
          />
          <h3 className="text-lg mt-4 leading-6 font-medium text-gray-900 py-3 font-mono " >Descripcion</h3>
          <textarea
            name='description'
            onChange={(e) => handleChange(e)}
            className=" h-16 placeholder-gray-900 text-center border shadow-xl mt-2 resize-none rounded-md border-gray-200 block w-full  focus:ring-blue-700 focus:border-blue text-9x1 "
            rows='3' // cuántas filas tenemos 
            value={newComment.description} // el comentario de asignará a new comment
            placeholder="Escribe la descripcion de tu mensaje"
          />
          {edition ?
            <button className="inline-flex items-center max-h-12 px-3 my-4 py-2 border border-transparent text-sm rounded-md leading-4 font-medium shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500" >Hecho</button>
            :
            <button className="inline-flex items-center max-h-12 px-3 my-4 py-2 border border-transparent text-sm rounded-md leading-4 font-medium shadow-sm text-white bg-yellow-600 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-gray-800 focus:text-white" >Agregar</button>}
        </form>

        {error ? <h3 className="text-center bg-pink-200 text-black mb-5">{error}</h3> : null}

      </div>
      <div>

        {comments.length === 0 ? (
         <div className="ml-3">
            <h3 className="grid place-items-center whitespace-nowrap text-lg font-medium text-blue-800">Aún no haz creado comentarios</h3>
         </div>
        ) : (

          comments.map((element, i) => (
            <article key={i}
              className="flex justify-evenly  pb-5 pt-5 border-b border-gray-200"
            >
              <div className="max-w-6xl truncate md:overflow-Ellipsis" >
                <h3 className="flex text-lg leading-6 font-medium text-gray-900">{element.title}</h3>
                <p className="flex mt-2 max-w-4xl text-sm text-gray-500">{element.description}</p>
              </div>
              <div className="mt-3 flex sm:mt-0 sm:ml-4">
                <button
                  disabled={!boton}
                  onClick={() => { deleteComment(element.id) }}
                  className="inline-flex max-h-12 items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-pink-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                >Eliminar</button>
                <button
                  className="ml-3 max-h-12 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                  onClick={() => { edit(element) }}
                >Editar</button>
              </div>
            </article>
          ))

        )}


      </div>
    </>
  );
}
