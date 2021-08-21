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
              backgroundColor: "red",
              borderRadius: "50px",
            }}
          >
            {/* image  */}
          </div>
          <div className="name-last-seen">
            <p style={{ margin: 0 }}>Mahad</p>
            <p style={{ margin: 0 }}>last seen yesterday at 9:15 PM</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatHeader;
