import Image from "next/image";

type ChatBubbleType = {
  isMessageSent: boolean;
  time: Date;
  message: string;
  photoURL: string;
  displayName: string;
};

const ChatBubble = ({
  isMessageSent,
  time,
  message,
  photoURL,
  displayName,
}: ChatBubbleType) => {
  return (
    <div
      className={`flex gap-1 my-2 px-4 ${
        isMessageSent && "justify-end"
      } w-full`}
    >
      {!isMessageSent && (
        <Image
          src={photoURL}
          alt="Google Profile Picture"
          className="relative rounded-full w-7 h-7"
          width={35}
          height={35}
        />
      )}
      <div
        className={`flex flex-col w-4/6 px-3 rounded-xl ${
          isMessageSent
            ? "bg-primaryLight rounded-br-none"
            : "bg-secondaryDark rounded-tl-none"
        }`}
      >
        {!isMessageSent && (
          <span className="w-full text-xs pt-1">{displayName}</span>
        )}
        <span
          className={`${
            isMessageSent ? "text-primaryDark" : "text-tertiary"
          } text-xs sm:text-sm pt-1`}
        >
          {message}
        </span>
        <span
          className={`pb-1 w-full text-right text-[0.6rem] sm:text-xs ${
            isMessageSent ? "text-secondaryDark" : "text-tertiary"
          }`}
        >
          {`${time.toDateString()} - ${time.toLocaleTimeString()}`}
        </span>
      </div>
    </div>
  );
};

export default ChatBubble;
