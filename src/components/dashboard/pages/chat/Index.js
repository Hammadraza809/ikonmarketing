import React from 'react';
import Content from './Content';
import SignIn from './SignIn';
import { auth } from '../../pages/common/Config';
import { useAuthState } from 'react-firebase-hooks/auth';

function Chat() {
    const [user] = useAuthState(auth)
    return (
        <div>
            {user ? <Content /> : <SignIn />}
        </div>
    )
}

export default Chat;