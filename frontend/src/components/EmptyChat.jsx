import { Box, styled, Typography, Divider } from '@mui/material';

const Component = styled(Box)`
    background: #f8f9fa;
    padding: 30px 0;
    text-align: center;
    height: 100%;
`;

const Container = styled(Box)`
    padding: 0 200px;
`;
   
const Title = styled(Typography)`
    font-size: 32px;
    font-family: inherit;
    font-weight: 300;
    color: #41525d;
    margin-top: 25px 0 0 0;
`;

const StyledDivider = styled(Divider)`
    margin: 40px 0;
    opacity: 0.4;
`;

const EmptyChat = () => {
    
    return (
        <Component>
            <Container>
                <Title>Započnite ćaskanje</Title>
                <StyledDivider />
            </Container>
        </Component>
    )
}

export default EmptyChat;