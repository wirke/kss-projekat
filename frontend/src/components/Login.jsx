import { useContext } from 'react';
import { Dialog, Typography, Box, styled } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { addUser } from '../service/apiService';
import { AccountContext } from '../service/accountService';

const Component = styled(Box)`
    display: flex; 
`;

const Container = styled(Box)`
    padding: 56px 0 56px 56px;
`;

const Title = styled(Typography)`
    font-size: 26px;
    margin-bottom: 25px;
    color: #525252;
    font-family: Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif;
    font-weight: 300;
`;

const dialogStyle = {
    marginTop: '12%',
    height: '95%',
    width: '60%',
    maxWidth: '100',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'hidden'
}

const LoginDialog = () => {

    const { setAccount,showloginButton, setShowloginButton, setShowlogoutButton } = useContext(AccountContext);

    const onLoginSuccess = async (res) => {
        let decoded = jwt_decode(res.credential);
        setAccount(decoded);
        setShowloginButton(false);
        setShowlogoutButton(true);
        await addUser(decoded);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    // const onSignoutSuccess = () => {
    //     alert("You have been logged out successfully");
    //     console.clear();
    //     setShowloginButton(true);
    //     setShowlogoutButton(false);
    // };

    return (
        <Dialog
            open={true}
            BackdropProps={{style: {backgroundColor: 'unset'}}}
            maxWidth={'md'}
            PaperProps={{ sx: dialogStyle }}
        >
            <Component>
                <Container>
                    <Title>Dobrodošli u poruke</Title>
                </Container>
                    <Box style={{position: 'absolute', top: '15%', transform: 'translateX(25%) translateY(-25%)'}}>
                        { showloginButton ?
                            <GoogleLogin
                                buttonText=""
                                onSuccess={onLoginSuccess}
                                onError={onLoginFailure}
                            /> : null}
                    </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog;