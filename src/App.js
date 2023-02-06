import React, { useEffect, useState } from "react"

 function App() {
  const [usuarios, setPostres] = useState([])

	useEffect(() => {
		fetch("practica/mockdata_usuarios.json")
		.then((response) => response.json())
		.then((datos) => {
      
			setPostres(datos)
		})
	}, [])

  console.log(usuarios)
  

	return (

		<div className="container mt-5" align="center">
      
	      <h4>Lista </h4>          
	         

	           {usuarios.map(item => (

	             <div>
	                <p>{item.nombre}</p>
	                <p>{item.stock}</p>
	                <p>{item.precio}</p>
	               
                </div>               
	            
	            ))}
    </div>
)
 
}
export default  App;