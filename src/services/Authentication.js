import firebase from "../firebase";
import { app } from "../firebase";
import { db } from "../firebase";
import "firebase/compat/auth";

export const auth = app.auth();

export const registerWithEmailAndPassword = async (
  firstName,
  email,
  password
) => {
  try {
    const register = await auth.createUserWithEmailAndPassword(email, password);
    const user = register.user;
    await db.collection("users").add({
      uid: user.uid,
      firstName,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.log(err);
  }
};

export const login = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.log(err);
  }
};

export const logout = () => {
  auth.signOut();
};

export const getUserData = (user, setUser) => {
  try {
    if (user) {
      firebase
        .firestore()
        .collection("users")
        .where("uid", "==", user.uid)
        .get()
        .then((userData) => {
          setUser(userData.docs[0].data());
        });
    }
  } catch (err) {
    console.log(err);
  }
};
