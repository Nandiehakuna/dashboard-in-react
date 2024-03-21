import google from '../../../assets/img/google.png';
const GoogleLogin=()=>{
    return(
        <div className="google-login">
        
           <button className='form-btn'>
               <img src={google} alt="" />
                   log in With google

            </button>
            <span className='or'>OR LOGIN WITH</span>
        
        </div>

    )

}

export default GoogleLogin;