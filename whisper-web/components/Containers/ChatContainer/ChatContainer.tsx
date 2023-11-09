import { ComponentChildren } from "@/types/index.types";

const ChatContainer = ({ children }: ComponentChildren) => {
  return (
    <section className="flex w-full h-full rounded-md p-4">{children}</section>
  );
};

export default ChatContainer;
