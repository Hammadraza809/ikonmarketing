import React from 'react';
import Content from './Content';
import SignIn from './SignIn';
import { useAuthState } from 'react-firebase-hooks';

function Chat() {
    return (
        <div>
            <SignIn />
           
        </div>
    )
}

export default Chat;