import React, { useState, useEffect } from 'react';
import '../styles/styles.css'

function Informacion({info}) {

   
    return (
        <div className='container'>
            <div >
               <h3>{info.nombre}</h3>
               <p>{info.descripcion}</p>
            </div>
        </div>

    );
}
export default Informacion;