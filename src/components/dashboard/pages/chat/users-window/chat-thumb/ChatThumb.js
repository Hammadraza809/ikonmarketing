import React, { Component } from "react";

export class ChatThumb extends Component {
  render() {
    const { userName, userImage } = this.props.data;
    return (
      <div className="main-recent-chats">
        <div className="chat-thumb">
          <img
            alt="user"
            src={userImage}
            style={{ height: 50, width: 50, borderRadius: 50 }}
          />
          <div className="content">
            <div className="name">{userName}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatThumb;
