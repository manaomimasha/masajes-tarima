import { useState } from 'react'
import "./index.css"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 >Masajes Tarima</h1>
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
          <a href=" https://calendly.com/masajes-tarima">Reservar mi turno Online </a>
          <p>Por cualquier consulta puede contactarme por Whatsapp a +54 1130912600


          </p>

          <p className='contenedor1'> Horarios de atención:
            Lunes a Viernes 10 a 16hs y 17.30 a 20hs. Sabados 10 a 20hs.

            Ubicacion: Florida, Vicente Lopez, a unas cuadras de la estacion Florida Tren Mitre. 
          </p>
 <p> Te espero !!!</p>
        </p>
      </div>




    </>
  )
}

export default App
