"use client";

import React, { createContext, useContext } from "react";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../utils/config/firebase";
import {
  Entry,
  EntryById,
  File,
  ProviderType,
  StoreContextType,
} from "../ContextTypes";

const storeContextDefaultValues: StoreContextType = {
  addEntry: () => {},
  getAllEntries: () => {},
  getEntry: () => {},
  updateEntry: () => {},
  deleteEntry: () => {},
  uploadFile: () => {},
  getFile: () => {},
};

const StoreContext = createContext<StoreContextType>(storeContextDefaultValues);

export const useStore = () => {
  return useContext(StoreContext);
};

export const StoreProvider = ({ children }: ProviderType) => {
  const addEntry = async ({ collectionName, entry }: Entry) => {
    try {
      const docRef = await setDoc(
        doc(db, collectionName, entry.messageId),
        entry
      );
      return docRef;
    } catch (e) {
      return e;
    }
  };

  const getAllEntries = async (collectionName: string) => {
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));

      return querySnapshot;
    } catch (e) {
      return e;
    }
  };

  const getEntry = async ({ collectionName, docId }: EntryById) => {
    try {
      return await getDoc(doc(db, collectionName, docId));
    } catch (e) {
      return e;
    }
  };

  const updateEntry = async ({ collectionName, entry }: Entry) => {
    try {
      return await updateDoc(doc(db, collectionName, entry.authId), entry);
    } catch (e) {
      return e;
    }
  };

  const deleteEntry = async ({ collectionName, docId }: EntryById) => {
    try {
      return await deleteDoc(doc(db, collectionName, docId));
    } catch (e) {
      return e;
    }
  };

  const uploadFile = ({ userId, imageStage, file }: File) => {
    return new Promise((resolve, reject) => {
      try {
        const imageRef = ref(
          storage,
          `ReactEventImages/${userId}/${imageStage}/${file.name}`
        );
        uploadBytes(imageRef, file).then((snapshot: any) => {
          resolve(snapshot);
        });
      } catch (error) {
        reject(error);
      }
    });
  };

  const getFile = ({ userId, imageStage, file }: File) => {
    return new Promise((resolve, reject) => {
      try {
        const imageRef = ref(
          storage,
          `ReactEventImages/${userId}/${imageStage}/${file}`
        );
        getDownloadURL(imageRef).then((url: any) => {
          resolve(url);
        });
      } catch (error) {
        reject(error);
      }
    });
  };

  const value = {
    addEntry,
    getAllEntries,
    getEntry,
    updateEntry,
    deleteEntry,
    uploadFile,
    getFile,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
