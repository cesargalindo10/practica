import React, { useState, useEffect } from 'react';
import '../styles/styles.css'

function Informacion({value}) {

   
    return (
        <div className='container'>
            <div >
               <h3>{value.nombre}</h3>
               <p>{value.descripcion}</p>
            </div>
        </div>

    );
}
export default Informacion;