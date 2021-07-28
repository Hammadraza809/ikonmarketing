import React from 'react';
import Content from './Content';
import SignIn from './SignIn';
import { auth } from '../../pages/common/Config';
import { useAuthState } from 'react-firebase-hooks/auth';

function Chat({props}) {
    const [user] = useAuthState(auth)
    return (
        <div>
            {user ? <Content props={props.props} /> : <SignIn />}
        </div>
    )
}

export default Chat;