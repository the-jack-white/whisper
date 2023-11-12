"use client";

import { useAuth } from "@/context/AuthContext/AuthContext";
import Image from "next/image";
import { Contacts } from "..";

const Navigation = () => {
  const { currentUser, logout } = useAuth();
  const { photoURL } = currentUser;

  return (
    <nav className="w-1/4 h-full rounded-lg bg-tertiary text-primaryDark">
      <div className="flex justify-between items-center w-full h-16 rounded-t-lg bg-primaryLight px-2">
        <Image
          src={photoURL}
          alt="Google Profile Picture"
          className="rounded-full"
          width={45}
          height={45}
        />
        <button
          className="bi bi-three-dots-vertical text-2xl text-primaryDark"
          onClick={logout}
        />
      </div>
      <div className="py-2 pl-2">
        <Contacts />
      </div>
    </nav>
  );
};

export default Navigation;
