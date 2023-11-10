"use client";

import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  collection,
  onSnapshot,
  query,
  DocumentData,
  orderBy,
  limit,
} from "firebase/firestore";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { useStore } from "@/context/StoreContext/StoreContext";

import ChatBubble from "../ChatBubble/ChatBubble";
import { db } from "../../../utils/config/firebase";

const ChatInput = () => {
  const { currentUser, serverTimestamp } = useAuth();
  const { addEntry } = useStore();
  const [inputValue, setInputValue] = useState<string>("");
  const [allMessages, setAllMessages] = useState<any[]>([]);

  const scroll = useRef<any>();

  const scrollToViewHandler = () => {
    setTimeout(() => {
      scroll.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "end",
      });
    }, 500);
  };

  const sendMessageHandler = async () => {
    const { uid, photoURL } = currentUser;
    try {
      const entry = {
        collectionName: "messages",
        entry: {
          _timeStamp: Date.now(),
          message: inputValue,
          createdAt: serverTimestamp(),
          messageId: uuidv4(),
          userId: uid,
          photoURL,
        },
      };

      addEntry(entry);

      setInputValue("");

      scrollToViewHandler();
    } catch (error) {
      console.log("[ERROR SENDING MESSAGE]: ", error);
    }
  };

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
    scrollToViewHandler();
  }, []);

  return (
    <section>
      <div className="flex flex-col justify-end w-full h-[70vh]">
        <div className="h-full overflow-auto no-scrollbar">
          {allMessages.map(({ messageId, userId, createdAt, message }) => (
            <ChatBubble
              key={messageId}
              isMessageSent={userId === currentUser.uid}
              time={new Date(createdAt?.seconds * 1000)}
              message={message}
            />
          ))}
          <span id="scrollSpan" ref={scroll} className=""></span>
        </div>
      </div>
      <div className="flex items-center gap-4 w-full h-16 rounded-lg bg-tertiary text-primaryDark p-2 mt-4">
        <input
          className="w-full p-2 rounded bg-tertiary text-primaryDark outline-none"
          type="text"
          value={inputValue}
          placeholder="Type a message"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessageHandler();
            }
          }}
        />
        <button
          onClick={sendMessageHandler}
          className="bi bi-send text-primaryDark bg-secondaryLight py-2 px-3 text-lg rounded-full"
          disabled={!inputValue}
        />
      </div>
    </section>
  );
};

export default ChatInput;
