import React from "react";
import "./Content.css";
import UsersWindow from "./users-window/UsersWindow";
import ChatContent from "./chat-window/ChatContent";
import {
  requestFirebaseNotificationPermission,
  db,
  auth,
} from "../common/Config";

function Main({ props }) {
  const uid = auth.currentUser.uid;
  requestFirebaseNotificationPermission()
    .then((firebaseToken) => {
      console.log("Token: " + firebaseToken);
      db.collection("FcmTokens").doc(uid).set({ fcm_token: firebaseToken });
    })
    .catch((err) => {
      return err;
    });
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
