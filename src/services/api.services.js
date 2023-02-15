
const APIURL = process.env.REACT_APP_API_URL;

export const ApiServices = {
    getProductos : async (page) => {
        //let response = {} ;
        try {
          const response = await fetch(APIURL+"producto/index?page="+page)
          const data = await response.json();
          return data;
          
        } catch (error) {
            console.error("Se produjo un error", error);
        }
    },
    createProducto:async(data)=>{
        fetch(APIURL+'producto/create', {
            method: 'POST', 
            body: JSON.stringify(data), 
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => console.log('Success:', response));
    },
    updateProduct: async(id,data)=>{
      fetch(APIURL+'producto/update?idProducto='+id, {
        method: 'PUT', 
        body: JSON.stringify(data), 
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
    },
    deleteProduct: async(idProducto)=>{
      fetch(APIURL+'producto/delete?idProducto='+idProducto, { method: 'DELETE' })
      .then(async response => {
          const data = await response.json();

          // verificamos el error en response
          if (!response.ok) {
              // obtener error message from body or default to response status
              const error = (data && data.message) || response.status;
              return Promise.reject(error);
          }
      })
      .catch(error => {
          
          console.error( error);
      });
    },
    removeCategoria: async(idP,idC)=>{
      try {
        const response = await fetch(APIURL+'producto/quitar-categoria?producto_id='+idP+'&categoria_id='+idC)
        const data = await response.json();
        return data;
        
      } catch (error) {
          console.error("Se produjo un error", error);
      }
    },
    getCategoria : async (id) => {
      //let response = {} ;
      try {
        const response = await fetch(APIURL+"producto/get-categoria?id="+id)
        const data = await response.json();
        return data;
        
      } catch (error) {
          console.error("Se produjo un error", error);
      }
  },

    
    
}
