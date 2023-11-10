import { ReactNode } from "react";

export type AuthContextType = {
  currentUser: any;
  signupWithGoogle: () => void;
  logout: () => void;
  serverTimestamp: () => void;
};

type StoreContextType = {
  addEntry: ({ collectionName, entry }: Entry) => void;
  getAllEntries: (collectionName: string) => Promise;
  getEntry: ({ collectionName, docId }: EntryById) => void;
  updateEntry: ({ collectionName, entry }: Entry) => void;
  deleteEntry: ({ collectionName, docId }: EntryById) => void;
  uploadFile: ({ userId, imageStage, file }: File) => void;
  getFile: ({ userId, imageStage, file }: File) => void;
};

export type ProviderType = {
  children: ReactNode;
};

type Entry = {
  collectionName: string;
  entry: any;
};

type EntryById = {
  collectionName: string;
  docId: string;
};

type File = {
  userId: string;
  imageStage: string;
  file: any;
};
