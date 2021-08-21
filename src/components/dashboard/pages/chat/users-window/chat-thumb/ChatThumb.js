import React, { Component } from "react";

export class ChatThumb extends Component {
  render() {
    const { username, userImage } = this.props.data;
    return (
      <div className="chat-thumb">
        <div className="avatar">
          {/* <Avatar src={`${user_image}${user_picture}`} size={52} /> */}
          <img src={userImage} style={{ height: 50, width: 50 }} />
        </div>
        <div className="content">
          <div className="name">{username}</div>
        </div>
      </div>
    );
  }
}

export default ChatThumb;
