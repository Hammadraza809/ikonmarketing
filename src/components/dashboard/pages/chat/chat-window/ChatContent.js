import React from "react";
import { Route, Switch } from "react-router-dom";
import "../Content.css";
import { ChatWindow } from "./ChatWindow";

const ConversationEmpty = () => (
  <div className="chat-window-wrapper">
    <div className="chat-content-empty">
      <div className="text-center">
        <h1 className="font-weight-light text-center">Start a conversation</h1>
      </div>
    </div>
  </div>
);

class ChatContent extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/dashboard/chat/:id" component={ChatWindow} />
        <Route path="/" component={ConversationEmpty} />
      </Switch>
    );
  }
}

export default ChatContent;
