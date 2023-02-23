import React, { useState } from 'react';
import { ApiServices } from '../../services/api.services';

export  function Login(){
    const inicialValues={
        username:"",
        password:""
    }
    const  [value, setValue]=useState(inicialValues);
    const handleChange = (e) => {
        //console.log(e.target.value)
            setValue({
                ...value, [e.target.name]: e.target.value,
            })
        
       
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(value)
        loginUser(value.username,value.password)
        //setValue(inicialValues)
    }
    const loginUser=async(username,password)=>{
        ApiServices.login(username,password)
        .then(res=>console.log(res))
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div style={{display:"flex"}}>
                    <label>Usuario</label>
                    <input
                        id='username'
                        name='username'
                        type="text"
                        value={value.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        id='password'
                        name='password'
                        value={value.password}
                        onChange={handleChange}
                    />
                </div>
                
                <input type='submit' value="Login"/>
                
            </form>
        </div>
    );
}