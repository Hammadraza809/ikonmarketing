import { Button } from "bootstrap";
import React, { Component } from "react";
import '../../Content.css'
export class Chat extends Component {

  constructor() {
    super()
    this.state = {
      info: {},
      userId: 1,
      msgList: [{
        id: 1,
        userId: 1,
        message_body: 'hi'
      },
      {
        id: 2,
        userId: 2,
        message_body: 'bye'
      }],
      currentUser: "",
      chats: [],
      text: ''
    };

  }
  onSend = () => {
    const { text, msgList } = this.state
    let msgObj = {
      id: 1,
      userId: 1,
      message_body: text
    }

    this.setState({
      text: '',
      msgList: [...msgList, msgObj]
    })


  };
  emptyClick = (e) => {
    e.preventDefault();
  };

  chatContentBody = () => (
    <div className="chat-content-body">
      {this.state.msgList.map((elm, i) => {

        return (
          <>
            {elm.userId != this.state.userId ?
              <div className="message-wrapper" key={i} >
                <div className="message">

                  {elm.message_body}
                </div>
              </div>
              :
              <div className="message-wrapper" key={i} >
                <div className="message  sent">

                  {elm.message_body}
                </div>
              </div>
            }
          </>
        )
      })
      }

      {/* </Scrollbars> */}
    </div>
  );
  chatContentFooter = () => (
    <div className="input-box">
      <input type="text"
        ref={(ref) => { this.textInput = ref }}
        value={this.state.text}
        onChange={(e) => this.setState({ text: e.target.value })}
      />
      <input type="button" value="send" onClick={() => this.onSend()} />
      {/* <Button>Send</Button> */}
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
