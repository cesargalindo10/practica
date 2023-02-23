import React, { useState, useEffect } from 'react';
import { ApiServices } from "../services/api.services"
import toast, { Toaster } from 'react-hot-toast';
import Formulario from './Formulario';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Tabla from './Tabla';
import Informacion from './Informacion';

export default function Producto() {
    
    const inicialValues={
        nombre: "",
        descripcion: "",
        precio: "",
        stock: "",
        marca_id: "",
        seccion_id: "",
    }

    const [data, setData] = useState([]);
    const [paginacion, setPaginacion] = useState([]);
    const [page, setPage] = useState(1);
    const [show, setShow] = useState(false);
    const [showInfo,setShowInfo]=useState(false)
    const [edicion,setEdicion] = useState(false)
    const [value, setValue] = useState(inicialValues)

    


    //console.log(value)
    const handleClose = () => {
        setShow(false)
        setEdicion(false)
        setValue(inicialValues)
    };
    const handleShow = () => setShow(true);


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

    const updateProducto = async() =>{

        await ApiServices.updateProduct(value.id, value)
        .then(res=>console.log(res))
        loadProducto()
    }
    const deleteProduct = async(res) =>{
  
        await ApiServices.deleteProduct(res.id)
        .then(res=>loadProducto())        
        loadProducto()
    }

    const getCategoria = async(idP) =>{
        await ApiServices.getCategoria(idP)
        .then(res => {
            //setCatId(res.data)
        }
            
            )
    }

    const quitarCategoria = async(idP,idC)=>{
        
        await ApiServices.removeCategoria(idP,idC)
        .then(res => console.log(res))
        
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
                showInfo ? <Informacion value={value}/> : ""
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
                        //crearProducto={crearProducto}
                        //updateProduct={updateProducto}
                        createUpdateProducto={edicion?updateProducto:crearProducto}
                        handleClose={handleClose}
                        setValue={setValue}
                        value = {value}
                       
                    />
                </Modal.Body>
            </Modal>
          
            <Tabla data={data} showInfo={showInfo} setShowInfo={setShowInfo} handleShow={handleShow} 
                setValue={setValue} value={value} setEdicion={setEdicion}deleteProduct={deleteProduct}/>
            <button onClick={() => setPage(paginacion.paginaAnterior)} disabled={paginacion.paginaAnterior==null? true:false}>Anterior</button>
            <button onClick={() => setPage(paginacion.PaginaSiguiente)} disabled={paginacion.PaginaSiguiente==null? true:false}>Siguiente</button>
        </div>
    );


}
