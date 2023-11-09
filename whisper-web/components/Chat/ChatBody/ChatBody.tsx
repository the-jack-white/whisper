import ChatHeader from "../ChatHeader/ChatHeader";
import ChatInput from "../ChatInput/ChatInput";
import ChatWindow from "../ChatWindow/ChatWindow";

const ChatBody = () => {
  return (
    <section className="flex flex-col justify-between ml-4 w-full h-full">
      <ChatHeader />
      <ChatWindow />
      <ChatInput />
    </section>
  );
};

export default ChatBody;
