import React, { useState, useEffect } from 'react';
import { ApiServices } from "../services/api.services"
import toast, { Toaster } from 'react-hot-toast';


export default function Producto() {


    const [data, setData] = useState([]);
    const [paginacion, setPaginacion] = useState([]);
    const [page, setPage]=useState(1);

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
    const loadProducto = async () => {
        await ApiServices.getProductos(page)
            .then(res => {
                setData(res.data)
                setPaginacion(res.pagination)
            }
            )
        

    }
    const producto={
            nombre:'Spli coco',
            descripciom: 'rico rico',
            precio:933,
            stock: 34,
            marca_id: 1119,
            seccion_id: 1,

    }
    const crearProducto = async()=>{
        await ApiServices.createProducto(producto)
        .then(res=>console.log(res))
    }
    console.log(page)
    useEffect(() => {
        loadProducto()
    }, [page])

    return (
        <div>
            {
                data.map((item) =>
                    <div key={item.id}>
                        <h3 key={item.id}>{item.nombre}</h3>
                    </div>
                )
            }
            <Toaster />
            <button onClick={() => setPage(paginacion.paginaAnterior)}>Anterior</button>
            <button onClick={() => setPage(paginacion.PaginaSiguiente)}>Siguiente</button>
            <button onClick={crearProducto}> Crear</button>
        </div>
    );


}
