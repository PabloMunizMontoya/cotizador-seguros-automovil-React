import React, { useState, Fragment } from 'react';

//19.1 extraemos la prop datos traída desde app 
const Resumen = ({datos}) => {

    //19.2 desestructuramos los valores de datos 
    const { marca, year, plan} = datos

    return ( 
        
        <Fragment>
        <h2>Resumen de cotizacion</h2>
        <ul>
            {/* usamos los datos extraídos desde props para renderizado */}
            <li>Marca: {marca} </li>
            <li>Plan: {plan} </li>
            <li>Año del Auto: {year} </li>
        </ul>    
        </Fragment>
        
     );
}
 
export default Resumen;