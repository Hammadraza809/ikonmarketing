import React, { useState, useEffect, useRef } from 'react';
import { db, auth } from '../common/Config';
import SignOut from './SignOut';
import SndMsg from './SendMsg';
import './Content.css'


function Main() {
    const scroll = useRef();
    console.log(auth.currentUser.displayName, auth.currentUser.email, auth.currentUser.uid, auth.currentUser.phoneNumber)
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    return (
        <div>
            <SignOut />
            <div className='msgs'>
                {messages.map(({ id, text, photoURL, uid }) => {
                    return (
                        <div>
                            <div key={id} className={`msg ${uid == auth.currentUser.uid ? 'sent' : 'recevied'}`}>
                                {/* <img className="img" src={photoURL} alt="profile" /> */}
                                <p className="text">{text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <SndMsg scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    )
}

export default Main;