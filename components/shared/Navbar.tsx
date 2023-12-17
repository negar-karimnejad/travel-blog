"use client";

import { navLinks } from "@/constants";
import clsx from "clsx";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import useMenuActive from "../../hooks/useMenuActive";
import Button from "../ui/Button";
import Route from "../ui/Route";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { User } from "@prisma/client";

interface NavbraProps {
  user: User;
}

const Navbar: React.FC<NavbraProps> = ({ user }) => {
  const router = useRouter();
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={clsx(
        "py-4 w-full",
        isScrolling ? "fixed top-0 bg-white z-10 shadow-lg" : "relative"
      )}
    >
      <div
        className={clsx(
          "w-[95%] mx-auto max-w-[1450px] flex items-center justify-between border-b border-gray-100",
          isScrolling && "border-none pb-0",
          !isScrolling && "pb-5"
        )}
      >
        <div className="flex-1">
          <Link href={"/"}>
            <h1 className="text-3xl font-extrabold text-secondary">
              Explore <span className="text-primary">X</span>
            </h1>
          </Link>
        </div>
        <ul className="flex items-center justify-center gap-16 flex-2 max-md:hidden">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Route
                route={link.route}
                label={link.label}
                isActive={useMenuActive(link.route)}
              />
            </li>
          ))}
        </ul>
        {user ? (
          <div className="flex gap-5 items-center flex-1 justify-end max-md:hidden">
            <h1 className="text-primary font-extrabold">{user.name}</h1>
            <Image
              src={user.image as string}
              width={50}
              height={50}
              alt={`Image for ${user.name}`}
              className="rounded-full border-4 border-primary cursor-pointer"
            />
          </div>
        ) : (
          <div className="flex justify-end gap-5 flex-1 max-md:hidden">
            <Button
              text="Log In"
              onClick={() => router.push("/access")}
              aria="Log in button"
            ></Button>
            <Button
              text="Sign Up"
              onClick={() => signOut()}
              aria="Sign up button"
            ></Button>
          </div>
        )}

        <div>
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
