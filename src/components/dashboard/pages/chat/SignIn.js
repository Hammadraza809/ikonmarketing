import React from 'react';
import { Button } from '@material-ui/core';
import firebase from 'firebase';
import { auth } from '../../pages/common/Config';

function SignIn() {
    function SignInWithGoogle() {
        const providor = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(providor);
    }

    return (
        <div>
            <Button onClick={SignInWithGoogle}>Sign In with Google</Button>
        </div>
    )
}

export default SignIn;