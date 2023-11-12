"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

type ContactsProps = {
  displayName: string;
  photoURL?: string;
  index: number;
  userId: string;
  selectedIndex: number;
  callback: (index: number, selectedUserId: string) => void;
};

const ContactsItem = ({
  selectedIndex,
  index,
  userId,
  displayName,
  photoURL,
  callback,
}: ContactsProps) => {
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    index === selectedIndex ? setActive(true) : setActive(false);
  }, [index, selectedIndex]);

  return (
    <div
      onClick={() => {
        callback(index, userId);
      }}
      className={`w-full ${
        active && "bg-secondaryLight"
      } p-1 rounded-l-lg cursor-pointer`}
    >
      <div className="flex gap-2">
        {photoURL ? (
          <Image
            src={photoURL}
            alt="Google Profile Picture"
            className="rounded-full"
            width={45}
            height={45}
          />
        ) : (
          <a className="bi bi-person-circle text-5xl text-secondaryDark" />
        )}
        <div>
          <h3
            className={`${active ? "text-primaryDark" : "text-secondaryDark"}`}
          >
            {displayName}
          </h3>
          <span className="text-xs text-secondaryDark">Description</span>
        </div>
      </div>
    </div>
  );
};

export default ContactsItem;
