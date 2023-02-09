
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
    }
    
    
    
}
