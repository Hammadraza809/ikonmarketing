import React, { Component } from "react";
import "../Content.css";
import ChatThumb from "./chat-thumb/ChatThumb";
import { Link } from "react-router-dom";
import { getAllUser } from "../../../firebase";

class NewUsersWindow extends Component {
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
    this.getAllUsers();
  }

  getAllUsers = async () => {
    try {
      const users = await getAllUser();
      this.setState({ data: users });
    } catch (e) {}
  };

  showChat(e) {
    localStorage.setItem(
      "UserInfo",
      JSON.stringify({
        userName: e.name,
        userImage: e.userImage,
        receiverId: e.id,
      })
    );
  }
  render() {
    const { data } = this.state;
    return (
      <div className="user-window-wraper">
        <div className="user-window">
          <div className="new-recent-chat">
            <div className="recent-chats-heading">
              <p>start new chat</p>
            </div>
          </div>

          <div className="recent-chats">
            {data.map((e, i) => {
              return (
                <Link
                  to={`/dashboard/chat/${e.id}`}
                  onClick={() => {
                    this.showChat(e);
                  }}
                  key={i}
                >
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

export default NewUsersWindow;
