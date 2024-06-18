import { useContext, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { UserContext } from '../service/userService';
import { AccountContext } from '../service/accountService';
import { getConversation } from '../service/apiService';
import ChatHeader from './ChatHeader';
import Messages from './Messages';

const ChatBox = () => {
    const { person } = useContext(UserContext);
    const { account } = useContext(AccountContext);

    const [conversation, setConversation] = useState({});
    
    useEffect(() => {
        const getConversationDetails = async () => {
            let data = await getConversation({ senderId: account.sub, receiverId: person.sub });
            setConversation(data);
        }
        getConversationDetails();
    }, [person.sub]);

    return (
        <Box>
            <ChatHeader person={person} />
            <Messages person={person} conversation={conversation} />
        </Box>
    )
}

export default ChatBox;