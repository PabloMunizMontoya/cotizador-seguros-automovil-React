import React, { useState, Fragment } from 'react';
import styled from '@emotion/styled'
import { primerMayuscula } from '../helper';

//20. creamos el componente styled que contiene el resumen.
const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center; 
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
`

//19.1 extraemos la prop datos traída desde app 
const Resumen = ({datos}) => {

    //19.2 desestructuramos los valores de datos 
    const { marca, year, plan} = datos

    return ( 
        
        < ContenedorResumen>
        <h2>Resumen de cotizacion</h2>
        <ul>
            {/* usamos los datos extraídos desde props para renderizado */}
            {/* 21.1 importamos y usamos la function desde helper para pasar la primer letra a Mayuscula. */}
            <li>Marca: {primerMayuscula(marca)} </li>
            <li>Plan: {primerMayuscula(plan)} </li>
            <li>Año del Auto: {year} </li>
        </ul>    
        </ ContenedorResumen>
        
     );
}
 
export default Resumen;