import React, { useState, useEffect } from 'react';
import { ApiServices } from "../services/api.services"



export default function Producto() {


    const [data, setData] = useState([]);
    const [paginacion, setPaginacion] = useState([]);
    const [page, setPage]=useState();

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
            <button onClick={() => setPage(paginacion.paginaAnterior)}>Anterior</button>
            <button onClick={() => setPage(paginacion.PaginaSiguiente)}>Siguiente</button>
        </div>
    );


}