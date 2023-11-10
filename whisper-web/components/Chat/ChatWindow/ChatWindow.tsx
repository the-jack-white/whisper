"use client";

import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  query,
  DocumentData,
  orderBy,
  limit,
} from "firebase/firestore";
import ChatBubble from "../ChatBubble/ChatBubble";

import { db } from "../../../utils/config/firebase";
import { useAuth } from "@/context/AuthContext/AuthContext";

const ChatWindow = ({ reference }: { reference: any }) => {
  const { currentUser } = useAuth();
  const [allMessages, setAllMessages] = useState<any[]>([]);

  const getMessagesHandler = async () => {
    const snapshot = query(
      collection(db, "messages"),
      orderBy("_timeStamp", "asc")
    );
    const unsub = onSnapshot(snapshot, (query) => {
      const messages: DocumentData[] = [];

      query.forEach((message) => {
        messages.push(message.data());
      });

      setAllMessages(messages);
    });
  };

  useEffect(() => {
    getMessagesHandler();
  }, []);

  return (
    <section className="w-full h-full  p-4">
      <div className="flex flex-col justify-end w-full h-[70vh] ">
        <div className="h-full overflow-auto">
          {allMessages.map(({ messageId, userId, createdAt, message }) => (
            <ChatBubble
              key={messageId}
              isMessageSent={userId === currentUser.uid}
              time={new Date(createdAt?.seconds * 1000)}
              message={message}
            />
          ))}
          <span ref={reference} className=""></span>
        </div>
      </div>
    </section>
  );
};

export default ChatWindow;
