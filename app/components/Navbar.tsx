"use client";
import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Features", link: "#features" },
  { name: "Faq", link: "#faq" },
  { name: "Pricing", link: "#pricing" },
  { name: "Enterprise", link: "#enterprise" },
  { name: "Careers", link: "#careers" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="px-5 py-4 lg:px-0 lg:container flex justify-between items-center">
      <div className="flex items-center gap-20">
        <Image src={Logo} alt="Logo" />
        <ul className="hidden lg:flex gap-x-14">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link
                className="font-medium text-base text-primary"
                href={item.link}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* mobile menu */}
      {open && (
        <div className="lg:hidden fixed top-20 left-4 right-4 z-10 py-8 bg-white drop-shadow-md">
          <div className="flex flex-col items-center space-y-6 font-bold">
            {navLinks.map((item, index) => (
              <Link
                onClick={()=> setOpen(!open)}
                key={index}
                className="font-medium text-base text-primary"
                href={item.link}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      {/* mobile menu */}
      <div className="flex justify-between items-center gap-x-5 lg:gap-x-14">
        <Link className="hidden lg:block font-medium text-[16px]" href="#">
          Open an Account
        </Link>
        <div className="hidden lg:flex justify-between items-center gap-x-3">
          <Image src={User} alt="user" />
          <Link className="font-medium text-[16px]" href="#">
            Sign In
          </Link>
        </div>
        <Image
          className="lg:hidden"
          src={User}
          width="32"
          height="32"
          alt="user"
        />
        <Image
          onClick={()=> setOpen(!open)}
          className="lg:hidden"
          src={Menu}
          width="32"
          height="32"
          alt="menu"
        />
      </div>
    </nav>
  );
};

export default Navbar;
