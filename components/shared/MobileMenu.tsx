import { navLinks } from "@/constants";
import Link from "next/link";
import { useState } from "react";
import { CgClose, CgMenuGridO } from "react-icons/cg";
import { FaFacebookSquare } from "react-icons/fa";
import {
  FaSquareInstagram,
  FaSquareSnapchat,
  FaSquareXTwitter,
} from "react-icons/fa6";

import Button from "../ui/Button";
import Route from "../ui/Route";
import useMenuActive from "../../hooks/useMenuActive";

export default function MobileMenu() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const mobileMenuHandle = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  return (
    <>
      <div className="md:hidden" onClick={mobileMenuHandle}>
        {openMobileMenu ? <CgClose size={25} /> : <CgMenuGridO size={25} />}
      </div>
      {openMobileMenu ? (
        <div
          onClick={() => setOpenMobileMenu(false)}
          className="bg-black/25 z-50 w-full h-full fixed left-0 top-0"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white flex flex-col gap-10 border-r overflow-y-hidden w-60 h-screen absolute left-0 top-0 px-5 z-[999]"
          >
            <div className="border-b pb-4">
              <Link href={"/"}>
                <h1 className="text-3xl font-extrabold text-secondary">
                  Explore <span className="text-primary">X</span>
                </h1>
              </Link>
            </div>
            <div className="flex gap-5 text-secondary flex-1 justify-center text-xl mt-5">
              <FaFacebookSquare />
              <FaSquareInstagram />
              <FaSquareXTwitter />
              <FaSquareSnapchat />
            </div>
            <ul className="flex flex-col items-center justify-center gap-10 flex-1 mt-5 py-5 border-b">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Route
                    route={link.route}
                    label={link.label}
                    onClick={() => setOpenMobileMenu(false)}
                    isActive={useMenuActive(link.route)}
                  />
                </li>
              ))}
            </ul>
            <div className="flex flex-col py-5 gap-5 flex-1">
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
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
