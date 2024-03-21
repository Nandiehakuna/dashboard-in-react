import Label from "./Label";
import Error from './Error';
import Input from './Input';
import { useState } from "react";


const Form =({inputs})=>{

 const [values , setValues]=useState({
        email:"",
        password:""
    });

    
    const onChange=(e)=>{
        setValues({...values, [e.target.name]:e.target.value})
    }
    return(

        <div className="form-container">
            <form action="" className="column">
                {inputs.map((input, index)=>(
                     <div key={index} change={onChange}>
                          <Label label={input.label}  />
                          
                           <Input placeholder={input.placeholder} />
                           <Error  messages={input.messages}/>

                     </div>
                ))}
           
               
            </form>

        </div>
    )

}
export default Form;