import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


function Tabla({ data,setInfo, info, showInfo,setShowInfo, handleShow, setEdicion }) {

    //const [b,setB]=useState(false)

    function mostrarInfo(res){
        setInfo(res)
        setShowInfo(!showInfo)
        
    }
    //console.log(b)
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
                                <td  >{res.id}</td>
                                <td>{res.nombre}</td>
                                <td>
                                    <Button onClick={()=>mostrarInfo(res)} variant="info">{ res.id===info.id && showInfo?"Hide":"Show"}</Button>{' '}
                                    <Button onClick={()=>{mostrarInfo(res);handleShow();setEdicion(true)}}>Editar</Button>{' '}
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