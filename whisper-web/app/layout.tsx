import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Providers } from "@/components";

const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Chat | Whisper",
  description: "Use Whisper to instantly chat with friends and family",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
