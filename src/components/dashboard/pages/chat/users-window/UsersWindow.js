import React, { Component } from "react";
import '../Content.css'
import ChatThumb from "./chat-thumb/ChatThumb";
class UsersWindow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [{
        user_name: "mahad",
        time: 2
      }],
    };
  }
  showChat(id) {
 
    this.props.push(`/chat/1`);
  }
  render() {
    const { data } = this.state
    return (
      <div className="user-window-wraper">
        <div className="user-window">
          <div className="new-recent-chat">
            <div className="recent-chats-heading">
              <p>RECENT CHATS</p>
            </div>
            <div style={{ paddingRight: 10 }}>

            </div>
          </div>
          <div className="recent-chats">

            {data.map((e, i) => {
              return (
                <div onClick={() => this.showChat(1)} key={i}>
                  <ChatThumb data={e} />
                </div>
              );
            })}

          </div>
        </div>
      </div>
    );
  }
}


export default UsersWindow;
