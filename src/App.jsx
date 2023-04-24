import { useState } from 'react'
import "./index.css"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 >Masajes Masha</h1>
      {/* <nav className='contenedor'>
  <a>Reservar</a>
  <a>Informacion y tipos de masajes</a>
  <a>Precios y Ubicacion</a>
  <a>Tratamientos faciales</a>
  <a>Contacto</a>
</nav> */}
      <div className='contenedor info '>
        <h> Reserva hoy tu masaje:</h>
        <p>
          {/* <a href=" https://www.facebook.com/masajestarima/">Reservar mi turno por Faceebok citas</a> */}
          <p>Para pedir turno contacteme por Whatsapp a +54 1130912600


          </p>

          <p className='contenedor1'> Consultar disponibilidad de turnos:
            Lunes a Sabados 10 a 16hs y 17.30 a 20hs.
            Ubicacion: Av. San Martin 2465, Florida, Vicente Lopez.
          </p>

        </p>
      </div>




    </>
  )
}

export default App
