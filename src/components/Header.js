import React from 'react'

//1. importamos emotion styled
import styled from '@emotion/styled'

//1.1 creamos es componente y su estilo, como se puede ver le damos a la variable ContenedorHeader un valor de estilos con el método styled.header  
const ContenedorHeader = styled.header`
    background-color: #26c6da;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
`
//2. le damos el estilo al h1
const TextoHeader = styled.h1`
    font-size: 2rem;
    margin:0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`


//3. extraemos las props dadas en app
const Header = ({titulo}) => {
    return ( 
        /* 1.3 cambiamos el header por el styled component */
        <ContenedorHeader>
            {/* 2.1 cambiamos el h1 por el styled component */}
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>
    );
}

export default Header;