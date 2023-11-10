"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../utils/config/firebase";
import { AuthContextType, ProviderType } from "../ContextTypes";
import { FirebaseError } from "firebase/app";

const authContextDefaultValues: AuthContextType = {
  currentUser: null,
  signupWithGoogle: () => {},
  logout: () => {},
  serverTimestamp: () => {},
};

const AuthContext = createContext<AuthContextType>(authContextDefaultValues);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: ProviderType) => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const signupWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const authSignUpResult = await signInWithPopup(auth, provider);
      const credential =
        GoogleAuthProvider.credentialFromResult(authSignUpResult);
      const token = credential?.accessToken;
      const user = authSignUpResult.user;

      if (user) {
        const accountObj = {
          authId: user.uid,
          created: Date.now(),
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          metadata: {
            createdAt: user.metadata.creationTime,
            lastLoginAt: user.metadata.lastSignInTime,
          },
        };
        const docRef = await setDoc(doc(db, "accounts", user.uid), accountObj);
        return docRef;
      }
    } catch (err) {
      console.log("[GOOGLE SIGNUP ERROR]: ", err);
      const credential = GoogleAuthProvider.credentialFromError(
        err as FirebaseError
      );
      return credential;
    }
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user: any) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsub;
  }, []);

  const value = {
    currentUser,
    signupWithGoogle,
    logout,
    serverTimestamp,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
