import React, { useState } from 'react';
import {Button,Stack,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




function Formulario({createUpdateProducto,handleClose,setValue,value}) {
   
    
    const inicialValues = {
        nombre: "",
        descripcion: "",
        precio: "",
        stock: "",
        marca_id: "",
        seccion_id: "",
    }

    const handleChange = (e) => {
        //console.log(e.target.value)
            setValue({
                ...value, [e.target.name]: e.target.value,
            })
        
       
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(value)
        createUpdateProducto()
        setValue(inicialValues)
    }


    return (
        <div className='contenedor-form'>
            <div className='contenido-form' >
                <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="nombre">Nombre</Form.Label>
                        <Form.Control
                            id="nombre"
                            type="text"
                            name="nombre"
                            value={value.nombre}
                            onChange={handleChange}
                            

                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="descripcion">Descripcion</Form.Label>
                        <Form.Control
                            id="descripcion"
                            type="text"
                            name="descripcion"
                            value={value.descripcion}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="precio">Precio</Form.Label>
                        <Form.Control
                            id="precio"
                            type="number"
                            name="precio"
                            value={value.precio}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="stock">Stock</Form.Label>
                        <Form.Control
                            id="stock"
                            type="number"
                            name="stock"
                            value={value.stock}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="marca">Marca</Form.Label>
                        <Form.Control
                            id="marca_id"
                            type="number"
                            name="marca_id"
                            value={value.marca_id}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="seccion">Seccion</Form.Label>
                        <Form.Control
                            id="seccion_id"
                            type="number"
                            name="seccion_id"
                            value={value.seccion_id}
                            onChange={handleChange}
                        />
                    </Form.Group>
   {/*                  <Form.Group className="mb-3">
                        <Form.Label htmlFor="marca">Marca</Form.Label>
                        <Form.Select
                            id="marca_id"
                            name="marca_id"
                            value={value.marca_id}
                            onChange={handleChange}
                        >
                            <option value="" ></option>
                            <option value={1} >1</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="seccion">Seccion</Form.Label>
                        <Form.Select
                            id="seccion_id"
                            name="seccion_id"
                            value={value.seccion_id}
                            onChange={handleChange}
                        >
                            <option value=""></option>
                            <option value={1} >1</option>
                        </Form.Select>
                    </Form.Group> */}
                    <Stack direction="horizontal" gap={3}>
                        <Button className=" ms-auto" type="submit">Guardar</Button>
                        <Button className="" variant="danger" onClick={handleClose}>Cancelar</Button>
                    </Stack>


                </Form>
            </div>

        </div>

    );
}

export default Formulario;