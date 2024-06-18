import { useContext, useState } from 'react';
import { Box, styled } from '@mui/material';
import { AccountContext } from '../service/accountService';
import InfoDrawer from './Drawer';

const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;
    
const Image = styled('img') ({
    height: 40,
    width: 40,
    borderRadius: '50%'
})

const Header = () => {
    
    const [openDrawer, setOpenDrawer] = useState(false);

    const { account } = useContext(AccountContext);
    
    const toggleDrawer = () => {
        setOpenDrawer(true);
    }

    return (
        <>
            <Component>
                <Image src={account.picture} onClick={() => toggleDrawer()} />
            </Component>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} profile={true} />
        </>
    )
}

export default Header;