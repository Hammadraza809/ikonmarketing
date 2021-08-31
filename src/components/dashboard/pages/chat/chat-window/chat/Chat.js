import React, { Component } from "react";
import firebase from "firebase";
import "../../Content.css";
import send from "../../../../../../assets/images/send.png";
import { sendMessageToDB } from "../../../../firebase";

const moment = require("moment");

export class Chat extends Component {
  constructor() {
    super();
    this.state = {
      info: {},
      senderId: "ZyR3tVmyINdHiYtyG3KgPYHpovF3",
      msgList: [],
      currentUser: "",
      chats: [],
      text: "",
    };
  }

  componentDidMount() {
    this.getConversation(this.getUserId());
  }

  getConversation = (currentId) => {
    firebase
      .firestore()
      .collection("ChatRooms")
      .doc(currentId)
      .collection("messages")
      .orderBy("timestamp")
      .onSnapshot((snapshot) => {
        let messages = [];
        snapshot.forEach((doc) => {
          messages.push(doc.data());
        });
        this.setState({ msgList: messages }, () => {
          const scrollHeight = this.messageList.scrollHeight;
          const height = this.messageList.clientHeight;
          const maxScrollTop = scrollHeight - height;
          this.messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
        });
      });
  };

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.getConversation(this.getUserId());
    }
    this.scrollToBottom();
  }

  getUserId() {
    const { id } = this.props.match.params;
    return id;
  }

  scrollToBottom = () => {
    this.messageList.scrollIntoView({ behavior: "smooth" });
  };

  onSend = () => {
    const { id } = this.props.match.params;
    
    const { receiverId } = this.props.data;
    const { text, msgList } = this.state;
    if (text === "") {
    } else {
      let msgObj = {
        senderId: "ZyR3tVmyINdHiYtyG3KgPYHpovF3", //current user
        message_body: text,
        timestamp: Date.now(),
        receiverId: receiverId, //mobile user
        receiverName: "",
        senderName: "",
      };
      sendMessageToDB(msgObj, id);
      this.setState(
        {
          text: "",
          msgList: [...msgList, msgObj],
        },
        () => {
          const scrollHeight = this.messageList.scrollHeight;
          const height = this.messageList.clientHeight;
          const maxScrollTop = scrollHeight - height;
          this.messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
        }
      );
    }
  };
  emptyClick = (e) => {
    e.preventDefault();
  };

  chatContentBody = () => (
    <div
      className="chat-content-body"
      ref={(el) => (this.messageList = el)}
      style={{ overflow: "scroll" }}
    >
      {this.state.msgList.map((elm, i) => {
        return (
          <>
            {elm.senderId !== this.state.senderId ? (
              <div className="message-wrapper" key={i}>
                <div className="message">
                  <span>{elm.message_body}</span>
                  <br />
                  <span style={{ fontSize: 10, float: "right" }}>
                    {moment(elm.timestamp).format("LT")}
                  </span>
                </div>
              </div>
            ) : (
              <div className="message-wrapper" key={i}>
                <div className="message  sent">
                  <span>{elm.message_body}</span>
                  <br />
                  <span style={{ fontSize: 10, float: "right" }}>
                    {moment(elm.timestamp).format("LT")}
                  </span>
                </div>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
  chatContentFooter = () => (
    <div className="input-box">
      <input
        className="input"
        type="text"
        style={{
          padding: 8,
          width: "95%",
          borderRadius: "5px",
          fontSize: 15,
        }}
        ref={(ref) => {
          this.textInput = ref;
        }}
        value={this.state.text}
        onChange={(e) => this.setState({ text: e.target.value })}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            this.onSend();
          }
        }}
      />
      <button
        type="submit"
        onClick={() => this.onSend()}
        style={{ border: "none", background: "none", marginLeft: 10 }}
      >
        <img alt="send" src={send} style={{ width: 40 }} />
      </button>
    </div>
  );

  render() {
    return (
      <div className="chat-content">
        {/* {this.chatContentHeader(info.name)} */}
        {this.chatContentBody()}
        {this.chatContentFooter()}
      </div>
    );
  }
}

export default Chat;
