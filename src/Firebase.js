import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTmpKVHt8L4B9jz99P9YzxDPsOzstsz6M",
  authDomain: "movie-116f7.firebaseapp.com",
  projectId: "movie-116f7",
  storageBucket: "movie-116f7.appspot.com",
  messagingSenderId: "354266523097",
  appId: "1:354266523097:web:c8f31a72d55c5af8ede5c8",
};

const app = initializeApp(firebaseConfig);

// export const authentication = getAuth(app);

export const storage = getStorage();

export const db = getFirestore();

// export const provider = new GoogleAuthProvider();

export const auth = getAuth();
