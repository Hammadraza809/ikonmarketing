import React, { Component } from "react";
import "../Content.css";
import ChatThumb from "./chat-thumb/ChatThumb";
import firebase from "firebase";

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
    console.log("chl rha hy");
    firebase
      .firestore()
      .collection("messages")
      .get()
      .then((data) => {
        // console.log(data)
        data.forEach((snapshot) => {
          console.log(snapshot.data());
        });
      });
  }
  showChat(id) {
    this.props.push(`/chat/1`);
  }
  render() {
    const { data } = this.state;
    return (
      <div className="user-window-wraper">
        <div className="user-window">
          <div className="new-recent-chat">
            <div className="recent-chats-heading">
              <p>RECENT CHATS</p>
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
