import React, { Component } from "react";
import "../Content.css";
import ChatThumb from "./chat-thumb/ChatThumb";
import firebase from "firebase";
import { Link } from "react-router-dom";
import { getChatRoom } from "../../../firebase";

class UsersWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          user_name: "mahad",
          time: 2,
        },
      ],
    };
  }

  componentDidMount() {
    this.getChatRooms();
  }
  getChatRooms = async () => {
    try {
      const room = await getChatRoom();
      this.setState({ data: room });
    } catch (error) { }
  };
  showChat(e) {
    console.log(e);
    localStorage.setItem(
      "UserInfo",
      JSON.stringify({ userName: e.userName, userImage: e.userImage })
    );
  }
  render() {
    const { data } = this.state;
    return (
      <div className="user-window-wraper">
        <div className="user-window">
          <div className="new-recent-chat">
            <div className="recent-chats-heading">
              <p>recent chats</p>
            </div>
          </div>
          <div className="recent-chats">
            {data.map((e, i) => {
              return (
                <Link to={`/dashboard/chat/${e.id}`}
                  onClick={() => this.showChat(e)}
                  key={i}>
                  <ChatThumb data={e} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default UsersWindow;
