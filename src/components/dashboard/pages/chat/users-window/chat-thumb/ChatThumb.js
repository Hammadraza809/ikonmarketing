import React, { Component } from "react";

export class ChatThumb extends Component {
  render() {
    const { name } = this.props.data;
    return (
      <div className="main-recent-chats">
        <div className="chat-thumb">
          <div
            // alt="user"
            // src={userImage}
            style={{ height: 50 }}
          />
          <div className="content">
            <div className="name">{name}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatThumb;
