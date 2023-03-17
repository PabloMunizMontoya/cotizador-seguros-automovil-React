import React, {useState} from 'react'
import Header from './components/Header';
import Fromulario from './components/Formulario';
import Resumen from './components/Resumen';

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

function App() {

  //17. vamos a usar un useState para traer el resultado( resumen ) desde formulario.
  const [resumen, guardarResumen] = useState ({})
  console.log(resumen)

  //18. definimos aca la variable datos para hacer un ternario asi el resumen no aparece cuando no hay nada. este valor viene de resumen qeu es un objeto con dos objetos, por eso lo extraemos de esta forma.
  const {datos} = resumen
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
        
      </ContenedorFormulario>

    </Contenedor>
  );
}

export default App;
