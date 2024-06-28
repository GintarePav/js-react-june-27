import firebase from "../firebase";

export const addPhoto = (data) => {
  firebase.firestore().collection("photos").add(data);
};
