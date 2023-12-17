import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import AuthProvider from "@/context/AuthProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import Navbar from "@/components/shared/Navbar";
import prisma from "./utils/db";

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

  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email as string,
    },
  });

  return (
    <html lang="en">
      <body className={`${roboto.className} overflow-x-hidden bg-light`}>
        <AuthProvider>
          <Navbar user={user as any} />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
