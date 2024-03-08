import FormImg from './FormImg';
import logo from '../../assets/img/logo.png';
import google from '../../assets/img/google.png';
import InputFields from './mini/InputFields';



const LoginForm =()=>{
    return(
        <div className="login-page">
            <FormImg/>
             
            <form action="POST" className='form-input' >
                <div className="form-logo">
                    <img src={logo} alt="" />
                    <h1>Dash<span>Me</span></h1>

                </div>
                <h1 className='logo-header'>welcome Back</h1>
                <div className="google-login">
                    {/* google icon */}
                <button className='form-btn'>
                    <img src={google} alt="" />
                    log in With google

                </button>


                </div>
                <h1 className='or'>or login with</h1>
               {/* input fields */}
               <InputFields/>
            </form>


        </div>

    )

}
export default LoginForm;