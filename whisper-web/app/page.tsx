import {
  AppContainer,
  ChatBody,
  ChatContainer,
  Navigation,
} from "@/components";

export default function Home() {
  return (
    <AppContainer>
      <ChatContainer>
        <Navigation />
        <ChatBody />
      </ChatContainer>
    </AppContainer>
  );
}
