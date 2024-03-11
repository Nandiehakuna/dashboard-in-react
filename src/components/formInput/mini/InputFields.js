const InputFields =()=>{
    return(
        <div className="input-fields">
            <div className="email">
            <label htmlFor="" className="label">EmailAddress</label>
            <input type="email" placeholder='Email Address' />

            </div>
            <div className="password">
            <label htmlFor="" className="label"> password</label>
            <input type="password" placeholder='password'/>

            </div>
       

      

       <div className="pass-forget">
        
       </div>

       </div>
    )

}
export default InputFields;