// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS8rVBdXspDPiEMUSh0JTySCbM7d5er-s",
  authDomain: "instgram-clone-yt.firebaseapp.com",
  projectId: "instgram-clone-yt",
  storageBucket: "instgram-clone-yt.appspot.com",
  messagingSenderId: "57243131309",
  appId: "1:57243131309:web:89775e3ffab65577be9524"
};

// Initialize Firebase

let app ;
if(firebase.apps.length === 0){
    app = initializeApp(firebaseConfig)
}else {
    app = firebase.app()
}

const auth = firebase.auth()
export {auth}
// const app = initializeApp(firebaseConfig);