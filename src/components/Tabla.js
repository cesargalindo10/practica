import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


function Tabla({ data, showInfo,setShowInfo, handleShow, setValue,  value, setEdicion,deleteProduct}) {

    //const [b,setB]=useState(false)

    function mostrarInfo(res){
        setValue(res)
        setShowInfo(!showInfo)
        
    }
    function editar(res){
        setValue(res);
        handleShow();
        setEdicion(true)
       
    }
    const eliminar=(res)=>{
        
        setValue(res);
        deleteProduct(res);        
        setValue(res);
              
       
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
                                    <Button onClick={()=>mostrarInfo(res)} variant="info">{ res.id===value.id && showInfo?"Hide":"Show"}</Button>{' '}
                                    <Button onClick={()=>editar(res)}>Editar</Button>{' '}
                                    <Button onClick={()=>eliminar(res)} variant="danger">Eliminar</Button>                             
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