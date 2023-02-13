import React, { useState, useEffect } from 'react';
import { ApiServices } from "../services/api.services"
import toast, { Toaster } from 'react-hot-toast';
import Formulario from './Formulario';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Tabla from './Tabla';
import Informacion from './Informacion';

export default function Producto() {


    const [data, setData] = useState([]);
    const [paginacion, setPaginacion] = useState([]);
    const [page, setPage] = useState(1);
    const [show, setShow] = useState(false);
    const [info, setInfo] = useState([])
    const [showInfo,setShowInfo]=useState(false)
    const [edicion,setEdicion] = useState(true)
    


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    const [value, setValue] = useState({
        nombre: "",
        descripcion: "",
        precio: "",
        stock: "",
        marca_id: 0,
        seccion_id: 0,
    })
    const crearProducto = async () => {
        await ApiServices.createProducto(value)
            .then(res => console.log(res))
    }
    const loadProducto = async () => {
        await ApiServices.getProductos(page)
            .then(res => {
                setData(res.data)
                setPaginacion(res.pagination)                          
       
            }
            )
           

    }


    useEffect(() => {
        loadProducto()
    },[page])


    const notify = () => toast('Hello World', {
        duration: 4000,
        position: 'top-center',

        // Styling
        style: {},
        className: '',

        // Custom Icon
        icon: '👏',

        // Change colors of success/error/loading icon
        iconTheme: {
            primary: '#000',
            secondary: '#fff',
        },

        // Aria
        ariaProps: {
            role: 'status',
            'aria-live': 'polite',
        },
    });
   
    return (
        <div>
            <Toaster /> 
            {
                showInfo ? <Informacion info={info}/> : ""
            }
            
            <Button onClick={handleShow}>Crear</Button>
            <Modal
                show={show} onHide={handleClose}
                dialogClassName="modal-90w"
                animation={false}
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Body>
                    <Formulario
                        crearProducto={crearProducto}
                        handleClose={handleClose}
                        setValue={setValue}
                        value={value}
                        info={info}
                        edicion={edicion}
                    />
                </Modal.Body>
            </Modal>
          
            <Tabla data={data} setInfo={setInfo} info={info} showInfo={showInfo} setShowInfo={setShowInfo} handleShow={handleShow} setEdicio={setEdicion}/>
            
            <button onClick={() => setPage(paginacion.paginaAnterior)} disabled={paginacion.paginaAnterior==null? true:false}>Anterior</button>
            <button onClick={() => setPage(paginacion.PaginaSiguiente)} disabled={paginacion.PaginaSiguiente==null? true:false}>Siguiente</button>
        </div>
    );


}
