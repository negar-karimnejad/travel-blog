import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import AuthProvider from "@/context/AuthProvider";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { Roboto } from "next/font/google";
import { EdgeStoreProvider } from '../lib/edgestore';
import { authOptions } from "./utils/auth";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "ExploreX",
  description: "Travel Blog",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const user = session?.user as string;

  return (
    <html lang="en">
      <body className={`${roboto.className} overflow-x-hidden bg-light`}>
        <AuthProvider>
          <EdgeStoreProvider>
            <Navbar user={user as any} />
            {children}
            <Footer />
          </EdgeStoreProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
