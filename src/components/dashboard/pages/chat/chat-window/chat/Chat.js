import { Button } from "bootstrap";
import React, { Component } from "react";
import firebase from "firebase";
import "../../Content.css";
import send from "../../../../../../assets/images/send.png";
import { sendMessageToDB } from "../../../../firebase";

const moment = require('moment')


export class Chat extends Component {
  constructor() {
    super();
    this.state = {
      info: {},
      userId: 1,
      msgList: [],
      currentUser: "",
      chats: [],
      text: "",
    };
  }

  componentDidMount() {
    this.getMessagesFromServer();
  }

  getMessagesFromServer = async () => {
    const roomId = '5n8XNB801hYwtM3q1Awy' //this.props.match.params.id
    firebase.firestore().collection('chatroom').doc(roomId).collection('messages')
    .orderBy('timestamp')
    .onSnapshot((snapshot)=>{
      let messages = []
        snapshot.forEach((doc) =>{
            messages.push(doc.data())
        })
        this.setState({msgList: messages},()=>{
          const scrollHeight = this.messageList.scrollHeight
          const height = this.messageList.clientHeight
          const maxScrollTop = scrollHeight - height
          this.messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0
        })
    })
  };

  onSend = () => {
    const roomId = '5n8XNB801hYwtM3q1Awy' //this.props.match.params.id
    const { text, msgList } = this.state;
    if (text === "") {
      console.log("ha ");
    } else {
      let msgObj = {
        userId: 1, //current user
        message_body: text,
        timestamp: Date.now(),
      };
      sendMessageToDB(msgObj, roomId);
      this.setState({
        text: "",
        msgList: [...msgList, msgObj],
      });
    }
  };
  emptyClick = (e) => {
    e.preventDefault();
  };

  chatContentBody = () => (
    <div className="chat-content-body" ref={(el) => this.messageList = el} style={{overflow: 'scroll'}}>
      {this.state.msgList.map((elm, i) => {
       
        return (
          <>
            {elm.userId != this.state.userId ? (
              <div className="message-wrapper" key={i}>
                <div className="message">
                  <span>{elm.message_body}</span>
                  <br />
                  <span style={{fontSize:12}}>{moment(elm.timestamp).format('LT')}</span>
                </div>
              </div>
            ) : (
              <div className="message-wrapper" key={i}>
                <div className="message  sent">
                  <span>{elm.message_body}</span>
                  <br />
                  <span style={{fontSize:12}}>{moment(elm.timestamp).format('LT')}</span>
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
        type="text"
        ref={(ref) => {
          this.textInput = ref;
        }}
        value={this.state.text}
        onChange={(e) => this.setState({ text: e.target.value })}
      />
      <input
        style={{
          background: `url(${send})`,
        }}
        type="button"
        // value="send"
        onClick={() => this.onSend()}
      />
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
