// 13. creo el archivo helper donde estarán las funciones que podremos aplicar en el código.

//14. creamos la function para obtener la diferencia de año, es decir la diferencia entre el año actual y el year parámetro pasado desde el formulario.
export function obtenerDiferencia(year) {
    //new Date() crea un nuevo objeto de fecha y hora, que representa la fecha y hora actual del sistema.

    // getFullYear() es un método que se utiliza en objetos de fecha para obtener el año actual.

   
    return new Date().getFullYear() - year
}

// 15. Function que va a calcular el valor del seguro según la marca
 export  function  calcularMarca(marca) {
    let incremento

    switch(marca){
        case 'europeo':
            incremento = 1.30
            break
        case 'americano' : 
            incremento = 1.15
            break
        case 'asiatico' : 
            incremento = 1.05
            break
        default:
            break;
    }
    return incremento
}

//16. calcular el tipo de seguro, tenemos solo dos planes basico y completo, la sintaxis de la function dice lo siguiente si plan es igual a basico incrementarlo 20% caso contrario incrementarlo 50%.
export function obtenerPlan ( plan ) {
    return (plan === 'basico') ?  1.20 : 1.50
}