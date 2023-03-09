"use client";
import { UserContext } from "./lib/context";
import "./globals.css";
import Navbar from "./components/NavBar";
import { useUserData } from "./lib/hooks";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userData = useUserData();
  return (
    <html lang='en'>
      <UserContext.Provider value={userData}>
        <body>
          <Navbar />
          {children}
        </body>
      </UserContext.Provider>
    </html>
  );
}
