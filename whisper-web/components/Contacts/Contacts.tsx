"use client";

import { useState } from "react";
import { ContactsItem } from "..";

const Contacts = () => {
  const mockContacts = [
    {
      id: 0,
      displayName: "Group Chat",
      messageGroup: "messages",
      userId: "123",
    },
    {
      id: 1,
      displayName: "Jack White",
      messageGroup: "private",
      userId: "234",
    },
    {
      id: 2,
      displayName: "Taylor White",
      messageGroup: "private",
      userId: "345",
    },
    {
      id: 3,
      displayName: "Pippa White",
      messageGroup: "private",
      userId: "456",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const selectedContactHandler = (index: number, selectedUserId: string) => {
    console.log("SelectedContact: ", { index, selectedUserId });
    setSelectedIndex(index);
  };

  return (
    <div className="flex flex-col gap-1">
      {mockContacts.map((contact, index) => (
        <ContactsItem
          key={contact.id}
          displayName={contact.displayName}
          index={index}
          userId={contact.userId}
          selectedIndex={selectedIndex}
          callback={selectedContactHandler}
        />
      ))}
    </div>
  );
};

export default Contacts;
