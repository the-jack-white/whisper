"use client";

import {
  AppContainer,
  AuthContainer,
  ChatBody,
  ChatContainer,
  Login,
  Navigation,
} from "@/components";
import { useAuth } from "@/context/AuthContext/AuthContext";

export default function Home() {
  const { currentUser, signupWithGoogle } = useAuth();

  return (
    <AppContainer>
      {currentUser ? (
        <ChatContainer>
          {/* <Navigation /> */}
          <ChatBody />
        </ChatContainer>
      ) : (
        <AuthContainer>
          <Login callback={signupWithGoogle} />
        </AuthContainer>
      )}
    </AppContainer>
  );
}
