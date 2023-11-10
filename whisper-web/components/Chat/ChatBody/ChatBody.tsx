import ChatHeader from "../ChatHeader/ChatHeader";
import ChatInput from "../ChatInput/ChatInput";

const ChatBody = () => {
  return (
    <section className="flex flex-col justify-between w-full h-full">
      <ChatHeader name="Group Chat" status="Online" />
      <ChatInput />
    </section>
  );
};

export default ChatBody;
