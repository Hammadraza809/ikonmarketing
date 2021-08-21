import React from "react";
import "./Content.css";
import UsersWindow from "./users-window/UsersWindow";
import ChatContent from "./chat-window/ChatContent";

function Main({ props }) {
  return (
    <div className="main-wrapper">
      <div className="main__chatbody">
        <UsersWindow {...props} />
        <ChatContent {...props} />
      </div>
    </div>
  );
}

export default Main;
