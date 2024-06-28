import firebase from "../firebase";

export const addPhoto = (data) => {
  firebase.firestore().collection("photos").add(data);
};

export const getPhotos = (setGallery, user) => {
  try {
    if (user) {
      firebase
        .firestore()
        .collection("photos")
        .where("userUid", "==", user.uid)
        .onSnapshot((snapshot) => {
          const newPhoto = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setGallery(newPhoto);
        });
    }
  } catch (err) {
    console.log(err);
  }
};

export const deletePhoto = (id) => {
  firebase.firestore().collection("photos").doc(id).delete();
};
