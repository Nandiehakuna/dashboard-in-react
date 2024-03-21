import { Link } from "react-router-dom";
const Forget =()=>{
    return(
        <div className="pass-forget">
        <label htmlFor="">
            <input type="text" className='input-keep' />
                 keep me logged in
         </label>
 
          <Link>forget your password?</Link>
 
     </div> 
    )
}
export default Forget;