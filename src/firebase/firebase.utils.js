import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBvfwJgx7AhgMiMT1KUfrZXETqLU4HfPwY",
    authDomain: "ruhabolt-db.firebaseapp.com",
    databaseURL: "https://ruhabolt-db.firebaseio.com",
    projectId: "ruhabolt-db",
    storageBucket: "ruhabolt-db.appspot.com",
    messagingSenderId: "989918436723",
    appId: "1:989918436723:web:ef20510c24b294f611f906",
    measurementId: "G-FE3QRM3YGJ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    //console.log(snapShot);

    if(!snapShot.exist) {
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email, 
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('hiba a felhasználó létrehozásakor', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'Válassz fiókot!'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;