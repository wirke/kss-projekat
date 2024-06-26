import { useContext } from "react";
import { Box, styled, Typography } from "@mui/material"
import { AccountContext } from "../service/accountService";

const ImageContainer = styled(Box)`
    display: flex;
    justify-content: center;
`;

const Image = styled('img') ({
    width: 200,
    height: 200,
    borderRadius: '50%',
    padding: '25px 0'
});

const BoxWrapper = styled(Box)`
    background: #FFFFFF;
    padding: 12px 30px 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    & :first-child {
        font-size: 13px;
        color: #009688;
        font-weight: 200;
    };
    & :last-child {
        margin: 14px 0;
        color: #4A4A4A;
    }
`;

const Profile = () => {

    const { account } = useContext(AccountContext);

    return (
        <>
            <ImageContainer>
                <Image src={account.picture} alt="displaypicture" />
            </ImageContainer>
            <BoxWrapper>
                <Typography>Vaše ime</Typography>
                <Typography>{account.name}</Typography>
            </BoxWrapper>
            <BoxWrapper>
                <Typography>O meni</Typography>
                <Typography>Zamrzlo. ne diraj, znači radi!</Typography>
            </BoxWrapper>
        </>
    )
}

export default Profile;