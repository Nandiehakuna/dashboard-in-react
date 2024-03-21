import { useState } from "react";

const Input=(props)=>{
    const {type, name, placeholder,change, ...otherProps}=props;
    const [focussed , setFocussed ] =useState(false)

    const handleFocussed=()=>{
        setFocussed(true);
    }

    return(
        <div className="inputs">
            <input 
            className="in" 
            onBlur={handleFocussed}
            focussed={focussed.toString()}

            placeholder={placeholder} 
            type={type} 
            onChange={change} 
            name={name}  
            {...otherProps} />
            


        </div>
    )
}

export default Input;