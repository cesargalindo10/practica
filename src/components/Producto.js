import { ApiServices } from "../services/api.services"
import React, { useEffect, useState } from 'react';


export default function Producto() {


    const [producto, setProducto] = useState([])

    const loadProducto = async () => {
        ApiServices.getProductos()
            .then((response) => {
            
                setProducto(response)
                console.log(response)
            })
    }

    useEffect(() => {
        loadProducto()
    }, [])

    return (
        <div>

        </div>
    );


}