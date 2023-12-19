"use client";
import { navLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookSquare } from "react-icons/fa";
import {
  FaSquareInstagram,
  FaSquareSnapchat,
  FaSquareXTwitter,
} from "react-icons/fa6";
import Route from "../ui/Route";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="py-5 w-full bg-secondary text-white mt-10">
      <div className="w-[95%] mx-auto max-w-[1450px] flex items-center justify-between pb-5 border-b border-gray-300 border-opacity-20 max-md:flex-col max-md:gap-8">
        <div className="flex-1">
          <Link href={"/"}>
            <h1 className="text-3xl font-extrabold">
              Explore <span className="text-primary">X</span>
            </h1>
          </Link>
        </div>
        <ul className="flex items-center justify-center gap-16 flex-1 max-md:flex-col max-md:gap-5">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Route
                route={link.route}
                label={link.label}
                isActive={pathname === link.route ? true : false}
              />
            </li>
          ))}
        </ul>
        <div className="flex gap-5 flex-1 justify-center text-2xl">
          <FaFacebookSquare />
          <FaSquareInstagram />
          <FaSquareXTwitter />
          <FaSquareSnapchat />
        </div>
      </div>
      <div className="w-full text-center mt-3 text-sm">
        <span>All Rights Reserved ExploreX.com</span>
      </div>
    </footer>
  );
}
