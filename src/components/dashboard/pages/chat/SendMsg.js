import React, { useState } from 'react';
import { Input, Button } from '@material-ui/core'
import { db, auth } from '../common/Config';
import firebase from 'firebase';

function SendMsg({scroll}) {
    const [msg, setMsg] = useState(['']);

    async function sendMessage(e) {
        e.preventDefault();
        const { uid, photoURL } = auth.currentUser;

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('');
        scroll.current.scrollIntoView({behavior : 'smooth'})
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <Input
                    placeholder="Type a message.."
                    value={msg}
                    onChange={(e) => {
                        setMsg(e.target.value);
                    }}
                />
                <Button
                    type="submit"
                >
                    Send
                </Button>
            </form>
        </div>
    )
}

export default SendMsg;