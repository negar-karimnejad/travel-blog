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

import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Button from "../ui/Button";
import Route from "../ui/Route";
// import useMenuActive from "@/hooks/useMenuActive";

interface MobileMenuProps {
  user: User;
}
const MobileMenu: React.FC<MobileMenuProps> = ({ user }) => {
  const router = useRouter();
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
          className="fixed w-full h-screen top-0 left-0 bg-black/25 z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute h-screen left-0 top-0 w-60 bg-white z-[999] px-5 border-r overflow-y-hidden flex flex-col gap-10"
          >
            <div className="border-b py-5 text-center">
              <Link href={"/"}>
                <h1 className="text-3xl font-extrabold text-secondary">
                  Explore <span className="text-primary">X</span>
                </h1>
              </Link>
              <div className="flex gap-5 text-secondary flex-1 justify-center text-xl mt-5">
                <FaFacebookSquare />
                <FaSquareInstagram />
                <FaSquareXTwitter />
                <FaSquareSnapchat />
              </div>
            </div>
            <ul className="flex items-center justify-center gap-5 flex-col mt-5  py-10 border-b">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Route
                    route={link.route}
                    label={link.label}
                    onClick={() => setOpenMobileMenu(false)}
                    // isActive={useMenuActive(link.route)}
                  />
                </li>
              ))}
            </ul>
            {!user ? (
              <div className="flex flex-col py-5 gap-5 flex-1">
                <Button
                  text="Log In"
                  onClick={() => {
                    router.push("/access");
                    setOpenMobileMenu(false);
                  }}
                  aria="Log in button"
                ></Button>
                <Button
                  text="Sign Up"
                  onClick={() => {
                    signOut();
                    setOpenMobileMenu(false);
                  }}
                  aria="Sign up button"
                ></Button>
              </div>
            ) : (
              <ul className="flex flex-col  gap-5 items-center">
                <Link href={"/create"}>
                  <li onClick={() => setOpenMobileMenu(false)}>
                    Create a post
                  </li>
                </Link>
                <Link href={"/userposts"}>
                  <li onClick={() => setOpenMobileMenu(false)}>My Post</li>
                </Link>
                <li
                  className="cursor-pointer"
                  onClick={() => {
                    signOut();
                    setOpenMobileMenu(false);
                  }}
                >
                  Sign out
                </li>
              </ul>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default MobileMenu;
