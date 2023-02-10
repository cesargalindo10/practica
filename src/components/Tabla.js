import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Informacion from './Informacion';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function Tabla({ data }) {
    const [info,setInfo]=useState([])
    return (
        <div className='container'>
            <Table striped bordered hover>

                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th style={{ width: "230px" }}>Accion</th>
                    </tr>
                </thead>
                {
                    data.map((res) =>


                        <tbody key={res.id}>
                            <tr>
                                <td key={res.id}>{res.id}</td>
                                <td>{res.nombre}</td>
                                <td>
                                    <Button onClick={()=>setInfo(res)} variant="info">Ver</Button>{' '}
                                    <Button>Editar</Button>{' '}
                                    <Button variant="danger">Eliminar</Button>                             
                                </td>
                            </tr>
                        </tbody>
                    )
                    
                }


            </Table>
            <Modal.Body>
                <Informacion data={data}/>
            </Modal.Body>
        </div>

    );
}

export default Tabla;