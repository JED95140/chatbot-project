import { MultiChatWindow, MultiChatSocket, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '001eec7d-abc2-49c7-95df-480a2149e5ea',
        props.user.username,
        props.user.secret
    );
    return (
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{height: '100vh'}} />
        </div> 
    )
}

export default ChatsPage