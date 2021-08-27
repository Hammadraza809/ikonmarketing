import React from "react";
import { Route, Switch, Router, BrowserRouter } from "react-router-dom";
// import Chat from "./chat/Chat";
import { ChatWindow } from "./ChatWindow";
// import emptyImage from "../../assets/images/emptychating.png";
const ConversationEmpty = () => (
  <div className="chat-window-wrapper">
    <div className="chat-content-empty">
      <div className="text-center">
        {/* <img src={emptyImage} alt="Start a Conversation" /> */}
        <h1 className="font-weight-light text-center">Start a conversation</h1>
        <ChatWindow></ChatWindow>
      </div>
    </div>
  </div>
);

class ChatContent extends React.Component {
  render() {
   
    return (
      <Switch>
        <Route path="/chat/:id" component={ChatWindow} />
        {/* <Route  path="/" component={ChatWindow} /> */}
        <Route path="/" component={ConversationEmpty} />
      </Switch>
    );
  }
}

export default ChatContent;
