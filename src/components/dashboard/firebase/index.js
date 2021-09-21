import firebase from "firebase";
function getChatRoom() {
  let chatroom = [];
  return new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection("ChatRooms")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const obj = { id: doc.id, ...doc.data() };
          chatroom.push(obj);
        });
        resolve(chatroom);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function getAllUser() {
  let users = [];
  return new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection("Users")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const obj = { id: doc.id, ...doc.data() };
          users.push(obj);
        });
        resolve(users);
      })
      .catch((err) => reject(err));
  });
}

function sendMessageToDB(obj, roomId) {
  firebase
    .firestore()
    .collection("ChatRooms")
    .doc(roomId)
    .collection("messages")
    .add(obj);
}



export {
  getChatRoom,
  sendMessageToDB,
  getAllUser,
};
