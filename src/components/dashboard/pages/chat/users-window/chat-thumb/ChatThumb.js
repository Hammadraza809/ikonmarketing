import React, { Component } from "react";

export class ChatThumb extends Component {
  render() {
    const { user_picture, user_name, time } = this.props.data;

    return (
      <div className="chat-thumb">
        <div className="avatar">
          {/* <Avatar src={`${user_image}${user_picture}`} size={52} /> */}
        </div>
        <div className="content">
          <div className="name">Mahad</div>
          <div className="time">4654654</div>
        </div>
      </div>
    );
  }
}

export default ChatThumb;
