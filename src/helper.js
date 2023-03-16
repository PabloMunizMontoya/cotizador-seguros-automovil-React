// 13. creo el archivo helper donde estarán las funciones que podremos aplicar en el código.

//14. creamos la function para obtener la diferencia de año, es decir la diferencia entre el año actual y el year parámetro pasado desde el formulario.
export function obtenerDiferencia(year) {
    //new Date() crea un nuevo objeto de fecha y hora, que representa la fecha y hora actual del sistema.

    // getFullYear() es un método que se utiliza en objetos de fecha para obtener el año actual.

   
    return new Date().getFullYear() - year
}