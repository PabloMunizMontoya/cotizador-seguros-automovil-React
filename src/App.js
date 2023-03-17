import React, {useState} from 'react'
import Header from './components/Header';
import Fromulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';


//3.importamos style components
import styled from '@emotion/styled'

//3.1 creamos el contenedor y le damos los estilos
const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
  
` 
// 4 creamos un contenedor para el formulario
const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`
//24 creamos el styled componente para el mensaje que se muestra cuando no hay nada elegido en el formulario.
const Mensaje = styled.p`
  background-color: rgb(127,224,237);
  margin-top: 2rem;
  padding: 1rem;
  text-align:center;
`
function App() {

  //17. vamos a usar un useState para traer el resultado( resumen ) desde formulario.
  const [resumen, guardarResumen] = useState ({})
  console.log(resumen)

  //18. definimos aca la variable datos para hacer un ternario asi el resumen no aparece cuando no hay nada. este valor viene de resumen qeu es un objeto con dos objetos, por eso lo extraemos de esta forma.
  //22. Extraemos también el valor cotizacion de resumen, para poder pasarla como prop al componente resultados.
  const {datos, cotizacion} = resumen
  console.log(datos)
  
  return (
    //3.2 insertamos el componente con su estilo y adentro ponemos el header
    <Contenedor> 
      <Header
        titulo = 'Cotizador de Seguros'
      /> 

      {/* 4.1 agregamos el contenedor creado  */}
      <ContenedorFormulario>
        <Fromulario
          /* 17.1 pasamos la function del useState como prop */
          guardarResumen = {guardarResumen}
        />
        {/* 18.1 => */}
        { datos ? <Resumen
          //19 pasamos los datos como prop al componente Resumen.
          datos = {datos}
        /> : null }
        
        {/* 18.1 => */}
        { cotizacion ? <Resultado
          /* 22.1 pasamos la cotizacion como prop al componente resultados */
          cotizacion = {cotizacion}
          /* 24.1 cambiamos el <p></p> por el styled component */
        /> : <Mensaje>Elige marca, año y tipo de seguro</Mensaje> }
        
        
      </ContenedorFormulario>

    </Contenedor>
  );
}

export default App;
