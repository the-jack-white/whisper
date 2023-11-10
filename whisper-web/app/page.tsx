"use client";

import {
  AppContainer,
  AuthContainer,
  ChatBody,
  ChatContainer,
  Navigation,
} from "@/components";
import { useAuth } from "@/context/AuthContext/AuthContext";

export default function Home() {
  const { currentUser, signupWithGoogle } = useAuth();

  return (
    <AppContainer>
      {currentUser ? (
        <ChatContainer>
          <Navigation />
          <ChatBody />
        </ChatContainer>
      ) : (
        <AuthContainer>
          <button
            className="p-2 rounded border border-primaryDark hover:bg-secondaryDark hover:border-secondaryDark hover:text-tertiary"
            onClick={signupWithGoogle}
          >
            Login with Google
          </button>
        </AuthContainer>
      )}
    </AppContainer>
  );
}
