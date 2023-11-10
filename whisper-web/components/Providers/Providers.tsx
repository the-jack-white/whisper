"use client";

import { AuthProvider, StoreProvider } from "@/context";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <StoreProvider>{children}</StoreProvider>
    </AuthProvider>
  );
};

export default Providers;
