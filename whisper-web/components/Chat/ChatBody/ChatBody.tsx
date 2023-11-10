import ChatHeader from "../ChatHeader/ChatHeader";
import ChatInput from "../ChatInput/ChatInput";

const ChatBody = () => {
  return (
    <section className="flex flex-col justify-between ml-4 w-full h-full">
      <ChatHeader name="Whisper Bot" status="Online" />
      <ChatInput />
    </section>
  );
};

export default ChatBody;
