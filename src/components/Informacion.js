import React, { useState, useEffect } from 'react';
import '../styles/styles.css'

function Informacion(props) {

    return (
        <div className='container'>
            <div className={props.mensaje.gender}>
                <p> {props.mensaje.first_name}</p>
                <p> {props.mensaje.last_name}</p>
                <p> {props.mensaje.email}</p>
                <p> {props.mensaje.gender}</p>
            </div>
        </div>

    );
}
export default Informacion;