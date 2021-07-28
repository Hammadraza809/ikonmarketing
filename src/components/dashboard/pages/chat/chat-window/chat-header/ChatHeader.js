import React, { Component } from 'react'
import '../../Content.css'

export class ChatHeader extends Component {
    render() {
        const data = this.props.data ? this.props.data : {};

        return (
            <div className="chat-header">
                <div className="chat-info">
                    <div style={{ height: 70, width: 70, backgroundColor: 'red' }}>
                        {/* <Avatar size="large" src={data.avatar} /> */}
                    </div>
                    <div className="name-last-seen">
                        <p>Mahad</p>
                        <p>last seen yesterday at 9:15 PM</p>
                    </div>
                </div>
                <div className="serach-icon">
                    {/* <img src={require('./../../../assets/images/icons/magnifying-glass-dark.png')} /> */}
                </div>
            </div>
        )
    }
}

export default ChatHeader
