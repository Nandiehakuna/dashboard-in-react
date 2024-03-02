import ImageUrl from "../../assets/img/profile.png" 
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const ProfileImg=()=>{
    const [dropdown , setDropdown]=useState(null)
    const[menuOpen, setMenuOpen] =useState('')

    const handleOpen = (event) => {
        setDropdown(event.currentTarget);
        setMenuOpen(true);
    };

    const handleClose = () => {
        setDropdown(null);
        setMenuOpen(false);
    };
    
    return(
        <div>        <Button onClick={handleOpen}  ><img src={ImageUrl} alt="" className="profile-img" /></Button>
        
        <Menu
                id="dropdown-menu"
                anchorEl={dropdown}
                open={menuOpen}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Login</MenuItem>
                <MenuItem onClick={handleClose}>Sign Up</MenuItem>
                <MenuItem>view profile</MenuItem>
            </Menu>


        </div>

    )

}
export default ProfileImg;