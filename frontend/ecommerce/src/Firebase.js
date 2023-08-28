
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider,signInWithPopup} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDAptP2ynEr2aB-b-6EvOH3vStcnjdMxMs",
  authDomain: "auth-dce62.firebaseapp.com",
  projectId: "auth-dce62",
  storageBucket: "auth-dce62.appspot.com",
  messagingSenderId: "597115298955",
  appId: "1:597115298955:web:c31709865686ebdf80a08e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

const provider = new GoogleAuthProvider()


export const signInWithGoogle =()=>{
   signInWithPopup(auth,provider).then((result)=>{
    console.log(result);
   const name = result.user.displayName
   const email = result.user.email
   const profilePic = result.user.photoURL;
   localStorage.setItem("name",name)
   localStorage.setItem("email",email)
   localStorage.setItem("profilePic",profilePic)
   }).catch((error)=>{
    console.log(error);
   })
}