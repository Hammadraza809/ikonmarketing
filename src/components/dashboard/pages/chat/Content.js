import React, { useState, useEffect, useRef } from 'react';
import { db, auth } from '../common/Config';
import SignOut from './SignOut';
import SndMsg from './SendMsg';
import './Content.css'
import Header from './Header';


function Main() {
    const scroll = useRef();
    // console.log(auth.currentUser.displayName, auth.currentUser.email, auth.currentUser.uid, auth.currentUser.phoneNumber)
    // const [messages, setMessages] = useState([]);
    // useEffect(() => {
    //     db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
    //         setMessages(snapshot.docs.map(doc => doc.data()))
    //     })
    // }, [])
    return (
        <div className="main">
            {/* <div>
                <Header />
            </div> */}
            {/* <div className="wrapper">
                <div className='msgs'>
                    {messages.map(({ id, text, photoURL, uid }) => {
                        return (
                            <div>
                                <div key={id} className={`msg ${uid == auth.currentUser.uid ? 'sent' : 'recevied'}`}>
                                    <img className="img" src={photoURL} alt="profile" />
                                    <p className="text">{text}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="sendMsg">
                    <SndMsg scroll={scroll} />
                    <div ref={scroll}></div>
                </div>
            </div> */}
            <div className="main-window">
                <div className="chat-window">
                    <div className="header">
                        <Header />
                    </div>
                    <div className="chat-room">

                    </div>
                    <div className="send-msg">

                    </div>
                </div>
                <div className="chat-users">
                    
                </div>
            </div>
        </div>
    )
}

export default Main;