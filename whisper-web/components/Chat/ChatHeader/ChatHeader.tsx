import { useAuth } from "@/context/AuthContext/AuthContext";

type ChatHeaderProps = {
  name: string;
  status: string;
};

const ChatHeader = ({ name, status }: ChatHeaderProps) => {
  const { logout } = useAuth();
  return (
    <section className="flex justify-between items-center w-full h-20 px-2">
      <div className="flex gap-2">
        <a className="bi bi-person-circle text-5xl text-secondaryDark" />
        <div>
          <h3 className=" text-primaryDark">{name}</h3>
          <span className="text-xs text-secondaryDark">{status}</span>
        </div>
      </div>
      <a
        className="bi bi-three-dots text-2xl text-primaryDark"
        onClick={logout}
      />
    </section>
  );
};

export default ChatHeader;
