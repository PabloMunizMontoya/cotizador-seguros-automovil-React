import React from 'react'
import styled from '@emotion/styled'

//25. creamos es styledComponent para darle estilo al menaje del total de la cotizacion.
const MensajeCotizacion = styled.p`
    color: #00838f;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`
//26. creamos el styled component para el resultado de la cotizacion
const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: .5 rem;
    border: 1px solid #26c6dA;
    background-color: rgb( 127, 224, 237);
    margin-top: 1rem;
    position: relative;

`
//22.3 extraemos la props dada desde app
const Resultado = ({cotizacion}) => {
    return ( 
        /* 26.1 insertamos el styledComponent div */
        <ResultadoCotizacion>
             {/* 25.2 cambiamos el <p> por el component styled  */}
            <MensajeCotizacion>El       total es : $ 
             {/* 22.4 renderizado el valor de la prop traída desde app  */}
            {cotizacion}
            </MensajeCotizacion>
        </ResultadoCotizacion>
        
    );
}

export default Resultado;