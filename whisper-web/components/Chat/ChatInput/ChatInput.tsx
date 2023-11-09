const ChatInput = () => {
  return (
    <section className="flex items-center gap-4 w-full h-16 rounded-lg bg-tertiary text-primaryDark p-2 mt-4">
      <input
        className="w-full p-2 rounded bg-tertiary text-primaryDark outline-none"
        type="text"
        placeholder="Type a message"
      />
      <button className="bi bi-send text-primaryDark bg-secondaryLight py-2 px-3 text-lg rounded-full" />
    </section>
  );
};

export default ChatInput;
