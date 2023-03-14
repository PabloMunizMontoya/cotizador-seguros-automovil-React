import React from 'react'

//1. extraemos las props dadas en app
const Header = ({titulo}) => {
    return ( 
        <header>
            <h1>{titulo}</h1>
        </header>
    );
}

export default Header;