type ChatBubbleType = {
  isMessageSent: boolean;
  time: Date;
  message: string;
};

const ChatBubble = ({ isMessageSent, time, message }: ChatBubbleType) => {
  console.log({ isMessageSent, time, message });

  return (
    <div className={`flex my-2 px-4 ${isMessageSent && "justify-end"} w-full`}>
      <div
        className={`flex flex-col w-4/6 px-3 pt-3 rounded-2xl ${
          isMessageSent
            ? "bg-primaryLight rounded-br-none"
            : "bg-secondaryDark rounded-bl-none"
        }`}
      >
        <span className="text-primaryDark text-sm">{message}</span>
        <span
          className={`pb-1 w-full text-right text-xs ${
            isMessageSent ? "text-secondaryDark" : "text-primaryDark"
          }`}
        >
          {`${time.toDateString()} - ${time.toLocaleTimeString()}`}
        </span>
      </div>
    </div>
  );
};

export default ChatBubble;
