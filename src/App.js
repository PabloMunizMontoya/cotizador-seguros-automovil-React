import React from 'react'
import Header from './components/Header';
import Fromulario from './components/Formulario';

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
  return (
    //3.2 insertamos el componente con su estilo y adentro ponemos el header
    <Contenedor> 
      <Header
        titulo = 'Cotizador de Seguros'
      /> 

      {/* 4.1 agregamos el contenedor creado  */}
      <ContenedorFormulario>
        <Fromulario/>
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
