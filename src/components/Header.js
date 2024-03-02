import Logo from "./logo/Logo";
import Search from "./mini-components/Search";
import Notification from "./mini-components/Notification";

const Header=()=>{
    return(
        <header className="header-container">
            <Logo/>
            <Search/>
            <div className="header-end">
            <Notification/>

            </div>
         


        </header>

    )

}
export default Header;


