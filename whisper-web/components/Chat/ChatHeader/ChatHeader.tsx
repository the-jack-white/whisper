const ChatHeader = () => {
  return (
    <section className="flex justify-between items-center w-full h-20 px-2">
      <div className="flex gap-2">
        <a className="bi bi-person-circle text-5xl text-primaryDark" />
        <div>
          <h3 className="font-bold text-primaryDark">Taylor White</h3>
          <span className="text-xs text-secondaryDark">Online</span>
        </div>
      </div>
      <a className="bi bi-three-dots text-2xl text-primaryDark" />
    </section>
  );
};

export default ChatHeader;
