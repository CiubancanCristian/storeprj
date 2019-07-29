import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCrMFeW4eAjaKyJObq9OP-q9j3LoaREGl8",
    authDomain: "storeprj-add52-e4508.firebaseapp.com",
    databaseURL: "https://storeprj-add52-e4508.firebaseio.com",
    projectId: "storeprj-add52",
    storageBucket: "",
    messagingSenderId: "256405132975",
    appId: "1:256405132975:web:51efa19f1596118e"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`Users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
