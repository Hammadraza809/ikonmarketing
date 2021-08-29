import React, { Component } from "react";
import "../../Content.css";

export class ChatHeader extends Component {
  render() {
    const data = this.props.data ? this.props.data : {};

    return (
      <div className="chat-header">
        <div className="chat-info">
          <div
            style={{
              height: 70,
              width: 70,
              borderRadius: "50px",
            }}
          >
            <img alt="user" src={data.userImage} />
          </div>
          <div className="name-last-seen">
            <p style={{ margin: 0 }}>{data.userName}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatHeader;
