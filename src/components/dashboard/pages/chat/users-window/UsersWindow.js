import React, { Component } from "react";
import "../Content.css";
import ChatThumb from "./chat-thumb/ChatThumb";
import { Link } from "react-router-dom";
import { getChatRoom } from "../../../firebase";
import NewUserWindow from "../users-window/NewUsersWindow";

class UsersWindow extends Component {
  constructor(props) {
    super(props);
    this.isContact = false;
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
    } catch (error) {}
  };
  showChat(e) {
    localStorage.setItem(
      "UserInfo",
      JSON.stringify({
        userName: e.name,
        userImage: e.userImage,
        receiverId: e.senderId,
      })
    );
  }
  render() {
    const { data, isContact } = this.state;
    return (
      <div className="user-window-wraper">
        <div className="user-window">
          <div className="new-recent-chat">
            <div className="recent-chats-heading">
              <p>recent chats</p>
            </div>
            <div
              style={{ cursor: "pointer" }}
              className="new-chats-heading"
              onClick={(e) => {
                this.setState({ isContact: !isContact });
              }}
            >
              +
            </div>
          </div>
          {!isContact ? (
            <div className="recent-chats">
              {data.map((e, i) => {
                return (
                  <Link
                    to={`/dashboard/chat/${e.id}`}
                    onClick={() => {
                      this.showChat(e);
                      console.log(e);
                    }}
                    key={i}
                  >
                    <ChatThumb data={e} />
                  </Link>
                );
              })}
            </div>
          ) : (
            <NewUserWindow />
          )}
        </div>
      </div>
    );
  }
}

export default UsersWindow;
