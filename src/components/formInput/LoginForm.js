import { useState } from 'react';

import FormLogo from './mini/FormLogo';
import GoogleLogin from './mini/GoogleLogin';
import SideForm from './SideForm';
import SignupLink from './mini/SignupLink';
import Forget from './mini/Forget';
import Form from '../form/Form';





const LoginForm =()=>{
   

    const inputs=[
        {
            id:"1",
            name:"email",
            label:"Email Address",
            placeholder:"email ",
            messages:"should contain only 8-12 characters and shouldnt include any special character",
            type:"email",
           
            required:true,
},
        {
            id:"2",
            name:"password",
            label:"password",
            placeholder:"password",
            messages:"should contain only 8-12 characters and shouldnt include any special character",
            type:"password",
            pattern:"^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()-+_])[a-zA-Z\d!@#$%^&*()-+_]{1,8}$",
            required:true,

        }
    ]

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("form was submitted successfully")
        
    }

    


    return(
        <div className="login-page">
            <SideForm/>
             
            <form action="POST" className='form-input' onSubmit={handleSubmit} >
                <FormLogo/>
                <div className="flex-column">
                   <GoogleLogin/>
                   <Form inputs={inputs}/>
                   <Forget/>
                   <button className="login">login</button>
                   <SignupLink/>

                </div>

               

            </form>


        </div>

    )

}
export default LoginForm;