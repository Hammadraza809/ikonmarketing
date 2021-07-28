import React, { Component } from 'react'
import ChatHeader from './chat-header/ChatHeader'
import Chat from './chat/Chat'
import '../Content.css'

export class ChatWindow extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        const { currentUserChat } = this.props;
        return (
            <div className="chat-window-wrapper">
                <div>
                    <ChatHeader />
                </div>

                <div className="chat-wrapper">
                    <Chat />
                </div>
            </div>
        )
    }
}





export default ChatWindow;
