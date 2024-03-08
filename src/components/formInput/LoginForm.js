import FormImg from './FormImg';
import logo from '../../assets/img/logo.png';


const LoginForm =()=>{
    return(
        <div className="login-page">
            <FormImg/>
             
             <form action="POST" className='form-input' >
                {/* logo and name of the company */}
                {/* heading saying welcome back */}
                {/* a button saying login with google  */}
                {/* a text saying or with */}
                {/* then it will contain the input fields  */}
                <div className="form-logo">
                    <img src={logo} alt="" />
                    <h1>Dash<span>Me</span></h1>

                </div>
                <h1>welcome back</h1>
                <div className="google-login">
                    {/* google icon */}
                <button>login with google</button>


                </div>
                <h1>or with</h1>
               {/* input fields */}



               
               

                <input type="text" />


                





             </form>


        </div>

    )

}
export default LoginForm;