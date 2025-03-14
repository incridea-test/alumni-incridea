import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { Toaster } from "~/components/ui/sonner";
import Navbar from "../components/general/navbar";
import { SessionProvider } from "next-auth/react";
import InfoBar from "~/components/general/infoBar";

export const metadata: Metadata = {
  title: "Alumni | Incridea",
  description: "Alumni portal for Incridea",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <Toaster position="top-center" />
        <SessionProvider>
          <TRPCReactProvider>
            <Navbar />
            <div className="flex min-h-screen w-screen h-screen overflow-scroll flex-col bg-gradient-to-b from-blue-800 to-blue-950">
              {children}
              <InfoBar />
            </div>
          </TRPCReactProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
