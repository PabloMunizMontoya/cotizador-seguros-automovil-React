import React from 'react'
import styled from '@emotion/styled'
//27. importamos transitionGroup, librería para hacer transiciones.
import  { TransitionGroup, CSSTransition } from 'react-transition-group' 

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
            {/* 27.1 insertamos los componentes de la librería de transición, estos van a tener unas props, componente le indica a que componente se le hace la transition, como en este caso MensajeDeCotizacion es un p componente tiene valor de p, y className hace referencia a un className en la hoja de estilos css */}
            <TransitionGroup
                component='p'
                className='resultado'
            >
                {/* 27.2 esta es la sintaxis para la librería de transiciones nótese que aca es classNames, el key es a que valor se le va a agregar la transición, y el time out es el tiempo de salida */} 
                <CSSTransition
                    classNames='resultado'
                    key= {cotizacion}
                    timeout={{enter: 500, exit: 500}}
                >   
                
                    {/* 25.2 cambiamos el <p> por el component styled  */}
                    <MensajeCotizacion>
                        
                        {/* 22.4 renderizado el valor de la prop traída desde app  */}
                        El total es : $ {cotizacion}
                    </MensajeCotizacion>

                </CSSTransition>

            </TransitionGroup>

        </ResultadoCotizacion>
    );
}

export default Resultado;