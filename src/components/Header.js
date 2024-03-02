import Logo from "./logo/Logo";
import Search from "./mini-components/Search";
import Notification from "./mini-components/Notification";
import Profile from "./Profile/Profile";


const Header=()=>{
    return(
        <header className="header-container">
            <Logo/>
            <Search/>
            <div className="header-end">
            <Notification/>
            <Profile/>
            
            

            </div>
         </header>

    )

}
export default Header;


