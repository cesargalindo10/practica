import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Informacion from './Informacion';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function Tabla({ data,setInfo, b, setB }) {

    //const [b,setB]=useState(false)

    function showInfo(res){
        setInfo(res)
        setB(!b)
    }
    console.log(b)
    return (
        <div className='container'>
            <Table striped bordered hover>

                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th style={{ width: "250px" }}>Accion</th>
                    </tr>
                </thead>
                {
                    data.map((res) =>


                        <tbody key={res.id}>
                            <tr>
                                <td key={res.id}>{res.id}</td>
                                <td>{res.nombre}</td>
                                <td >
                                    <Button onClick={()=>showInfo(res)} variant="info">{b? "Show":"Hide"}</Button>{' '}
                                    <Button>Editar</Button>{' '}
                                    <Button variant="danger">Eliminar</Button>                             
                                </td>
                            </tr>
                        </tbody>
                    )
                    
                }


            </Table>

        </div>

    );
}

export default Tabla;