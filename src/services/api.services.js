const APIURL = process.env.REACT_APP_API_URL;
export const ApiServices = {
    getProductos: async()=>{
        const resultado = await  fetch(APIURL+"producto/index").then((res)=>{
            console.log(res)
        }).catch((error)=>{
            console.log(error)
        })
    }
}