"use client"
import Image from "next/image";
import Link from "next/link";
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import {useState} from "react";
import Navlinks from "../navlinks";

const navLinks = Navlinks;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed w-full h-24 shadow-xl bg-white">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="/">
          <Image
            src="/logo-512.png"
            alt="Logo"
            width="150"
            height="150"
            className="cursor-pointer"
            priority
          />
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            { navLinks.map((link) => {
                return (
                  <Link href={link.path} key={link.path.substring(1)}>
                    <li className="ml-10 uppercase hover:border-b text xl">{link.text}</li>
                  </Link>
                )
              })
            }
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <GiHamburgerMenu size={25} />
        </div>
      </div>
      <div className={
        menuOpen
        ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
        : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
      }>
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul>
            <Link href="/">
              <li
                onClick={()=> setMenuOpen(false)}
                className="py-4 cursor-pointer">Home</li>
            </Link>
            { navLinks.map((link) => {
                return (
                  <Link href={link.path} key={link.path.substring(1)+'-mb'}>
                    <li
                      onClick={()=> setMenuOpen(false)}
                      className="py-4 cursor-pointer">{link.text}</li>
                  </Link>
                )
              })
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;