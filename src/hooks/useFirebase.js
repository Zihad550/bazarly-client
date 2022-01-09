import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentic from "../Firebase/Firebase.init";

const googleProvider = new GoogleAuthProvider();
initializeAuthentic();

const useFirebase = () => {
  /* states */
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const auth = getAuth();

  const signInWithGoogles = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const registerCreatePassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // ...
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const updateName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
        // window.location.reload();
        const newUser = { ...user, displayName: name };
        setUser(newUser);
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };
  const signOutPlace = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  /* ===============
  observe the user */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setError("");
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);
  return {
    user,
    setUser,
    signInWithGoogles,
    registerCreatePassword,
    signInPassword,
    signOutPlace,
    isLoading,
    setIsLoading,
    updateName,
    setError,
  };
};
export default useFirebase;
