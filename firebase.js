// import firebase from 'firebase/compat/app';

// const firebaseConfig = {
//     apiKey: "AIzaSyDzC6mdmkNEEp9JU7xj8htmAJoZi6ZN_NE",
//     authDomain: "projectname-63209.firebaseapp.com",
//     databaseURL: "https://projectname-63209.firebaseio.com",
//     projectId: "projectname-63209",
//     storageBucket: "projectname-63209.appspot.com",
//     messagingSenderId: "114224144045",
//     appId: "1:114224144045:web:009e02eec2f13b0da37024",
//     measurementId: "G-Q6R069DXJV"
// };

// if(!firebase.app.length){
//     firebase.initializeApp(firebaseConfig)
// }
// const db = firebase.firestore();
// export default db;

import * as firebase from 'firebase/app';
import { getFirestore, collection, doc, getDocs, onSnapshot } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDzC6mdmkNEEp9JU7xj8htmAJoZi6ZN_NE",
    authDomain: "projectname-63209.firebaseapp.com",
    databaseURL: "https://projectname-63209.firebaseio.com",
    projectId: "projectname-63209",
    storageBucket: "projectname-63209.appspot.com",
    messagingSenderId: "114224144045",
    appId: "1:114224144045:web:009e02eec2f13b0da37024",
    measurementId: "G-Q6R069DXJV"
};
const app = firebase.initializeApp(firebaseConfig)
const db = getFirestore(app)

export { app, db, getFirestore, collection, doc, getDocs, onSnapshot }