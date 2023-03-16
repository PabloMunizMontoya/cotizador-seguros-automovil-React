import React, {useState} from 'react'
import styled from '@emotion/styled'

//5. creamos los componentes de estilo para los div
const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`
//6. creamos componente styled para label
const Label = styled.label`
    flex: 0 0 100px;
`

//7.  creamos el componente styled para select
const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none; //esto le saca la apariencia natural al select, para asi poder aplicarle el css. 
`

//8. creamos el styled component para los radios
const InputRadio = styled.input`
    margin:0 1rem;

`
//9. creamos el styled component para los botones
const Boton = styled.button`
    background-color: #00838f;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`
const Fromulario = () => {

    //10. creamos el state para los datos
    const [datos, guardarDatos ] = useState({
        marca: '',
        year: '',
        plan: ''
    })

    //11. crear function para leer los datos del formulario y colocarlos en el state datos.
    const obtenerInformacion = e => {
        guardarDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    //10.1 extraemos los valores del estate con destructuring
    const {marca, year, plan } = datos

    return ( 
        <form action="">

            {/* 5.1 cambiamos los div por el componente styled Campo */}
            <Campo>

                {/* 6.1 cambiamos label por Label */}
                <Label> Marca </Label>

                    {/* 7.1 reemplazamos los select por Select*/}
                    {/* 10.3 le damos propiedades al select, vamos a llenar con estos datos el objeto datos creado en el use state  */}
                    <Select
                        name= 'marca'
                        value= {marca}
                        /* 11.1 disparamos la function con un onChange para capturar los datos */
                        onChange= {obtenerInformacion}
                    >
                        <option value=''> Seleccione </option>
                        <option value='americano'> Americano </option>
                        <option value='europeo'> Europeo </option>
                        <option value='asiatico'>Asiático </option>
                        
                    </Select>

            </Campo>
            <Campo>
                <Label> Año </Label>
                    {/* 10.4 le damos propiedades al select, vamos a llenar con estos datos el objeto datos creado en el use state  */}
                    <Select
                        name='year'
                        value={year}
                        /* 11.2 disparamos la function con un onChange para capturar los datos */
                        onChange= {obtenerInformacion}
                    >
                        <option value='2013'> 2013 </option>
                        <option value='2014'> 2014 </option>
                        <option value='2015'> 2015 </option>
                        <option value='2016'> 2016 </option>
                        <option value='2017'> 2017 </option>
                        <option value='2018'> 2018 </option>
                        <option value='2019'> 2019 </option>
                        <option value='2020'> 2020 </option>
                        <option value='2021'> 2021 </option>
                        <option value='2022'> 2022 </option>
                        <option value='2023'> 2023 </option>
                    </Select>
            </Campo>
            <Campo>
                <Label> Plan </Label>
                    {/* 8.1 cambiamos el input por el componente styled */}
                    {/* 10.5 le damos propiedades al radio, vamos a llenar con estos datos el objeto datos creado en el use state  */}
                    <InputRadio
                        type='radio'
                        name='plan'
                        value='basico'
                        /* 10.5 le damos propiedades al radio, vamos a llenar con estos datos el objeto datos creado en el use state  */ 
                        checked={plan === 'basico'}
                        /* 11.3 disparamos la function con un onChange para capturar los datos */
                        onChange= {obtenerInformacion}
                /> Basico 
                
                <InputRadio
                    type='radio'
                    name='plan'
                    value='completo'
                    /* 10.6 le damos propiedades al radio, vamos a llenar con estos datos el objeto datos creado en el use state  */ 
                    checked={plan === 'completo'}
                    /* 11.4 disparamos la function con un onChange para capturar los datos */
                    onChange= {obtenerInformacion}
                /> Completo
            </Campo>
            {/* 9.1 Cambiamos los styled components */}
            <Boton type='Boton'>Cotizar</Boton>
        </form>
    );
}
 
export default Fromulario;