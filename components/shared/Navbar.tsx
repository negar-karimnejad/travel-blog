"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Route from "../ui/Route";
import Button from "../ui/Button";
import MobileMenu from "./MobileMenu";
import useMenuActive from "../../hooks/useMenuActive";
import clsx from "clsx";

export default function Navbar() {
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
          "w-[95%] mx-auto max-w-[1450px] flex items-center justify-between pb-5 border-b border-gray-100",
          isScrolling && "border-none pb-0"
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
        <div className="flex justify-end gap-5 flex-1 max-md:hidden">
          <Button
            text="Log In"
            onClick={() => null}
            aria="Log in button"
          ></Button>
          <Button
            text="Sign Up"
            onClick={() => null}
            aria="Sign up button"
          ></Button>
        </div>
        <div>
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
