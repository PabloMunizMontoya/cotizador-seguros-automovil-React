import React from 'react'
import Header from './components/Header';

//3.importamos style components
import styled from '@emotion/styled'

//3.1 creamos el contenedor y le damos los estilos
const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
  
` 

function App() {
  return (
    //3.2 insertamos el componente con su estilo y adentro ponemos el header
    <Contenedor> 
      <Header
        titulo = 'Cotizador de Seguros'
      /> 
    </Contenedor>
  );
}

export default App;
