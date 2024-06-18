import { useState, useContext } from 'react';
import { MoreVert } from '@mui/icons-material';
import { Menu, MenuItem, styled } from '@mui/material';
//import { googleLogout } from '@react-oauth/google';
//import { AccountContext } from '../service/accountService';
//import { UserContext } from '../service/userService';

const MenuOption = styled(MenuItem)`
    font-size: 14px
    padding: 15px 60px 5px 24px;
    color: #4A4A4A;
`;

//const Logout = styled(googleLogout)`
//    border: none;
//    box-shadow: none;
//`;

const HeaderMenu = () => {
    
    const [open, setOpen] = useState(false);
    const [setOpenDrawer] = useState(false);
    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };

//    const onSignoutSuccess = () => {
//       alert("You have been logged out successfully");
//        console.clear();
//        setShowlogoutButton(false);
//        setShowloginButton(true);
//        setAccount('');
//        setPerson({});
//    };

    const toggleDrawer = () => {
        setOpenDrawer(true);
    }

    return (
        <>
            <MoreVert onClick={handleClick} />
            <Menu
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuOption onClick={() => { handleClose(); toggleDrawer()}}>Profile</MenuOption>
                <MenuOption onClick={() => { handleClose(); }}>
                {/* { showlogoutButton ?
                    <Logout
                        clientId={clientId}
                        buttonText="Logout"
                        onLogoutSuccess={onSignoutSuccess}
                    >
                    </Logout> : null
                } */}
                </MenuOption>
            </Menu>
        </>
    )
}

export default HeaderMenu;
