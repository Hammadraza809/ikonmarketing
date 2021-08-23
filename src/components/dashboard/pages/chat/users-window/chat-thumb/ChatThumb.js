import React, { Component } from "react";

export class ChatThumb extends Component {
  render() {
    const { username, userImage } = this.props.data;
    return (
      <div className="main-recent-chats">
        <div className="chat-thumb">
          <div className="avatar">
            <img
              alt="userprofile"
              src={userImage}
              style={{ height: 50, width: 50, borderRadius: 50 }}
            />
          </div>
          <div className="content">
            <div className="name">{username}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatThumb;
