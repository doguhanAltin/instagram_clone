// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { userHandle } from "./utils";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjliRdMMU4eH2Bznoz2cJ0RooWARSYej0",
  authDomain: "dou-insta.firebaseapp.com",
  projectId: "dou-insta",
  storageBucket: "dou-insta.appspot.com",
  messagingSenderId: "1014644658467",
  appId: "1:1014644658467:web:c1efb309bc2e35af933c96",
  measurementId: "G-B3FZ8E0VLB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore(app);

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const dbUser = await getDoc(doc(db, "users", user.uid));
    let data = {
      uid: user.uid,
      fullName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      ...dbUser.data(),
    };
    userHandle(data);
  } else {
    userHandle(false);
  }
});
export const login = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);

    return response;
  } catch (error) {
    toast.error(error.message);
  }
};

export const getUserInfo = async (uname)=>{
  const username = await getDoc(doc(db,"usernames",uname));
  if(username.exists()){
   return await (await getDoc(doc(db,"users",username.data().user_id))).data()
   
  }else{
    toast.error("kullanıcı yok")
throw new Error("Kullanıcı Yok")  }


}

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    toast.error(error.code);
  }
};

export const register = async ({ email, password, fullName, username }) => {
  try {
    // users koleksiyonuna kullanıcı ekleme

    const user = await getDoc(doc(db, "usernames", username));
    if (user.exists()) {
      toast.error("Kullanıcı adı zaten var");
    } else {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setDoc(doc(db, "usernames", username), {
        user_id: response.user.uid,
      });

      await setDoc(doc(db, "users", response.user.uid), {
        fullName,
        username,
        followers: [],
        following: [],
        notifications: [],
        website: "",
        bio: "",
        phoneNumber: "",
        gender: "",
        posts: 0,
      });

      await updateProfile(auth.currentUser, {
        displayName: fullName,
      });
      return response.user;
    }
  } catch (error) {
    toast.error(error.message);
  }
};
