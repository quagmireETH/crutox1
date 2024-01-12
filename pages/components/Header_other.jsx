import React, { useState } from "react";
import Navbar from "./BurgerNav_other";
import Link from "next/link";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="flex justify-between items-center pb-6 mt-6 px-16 relative max-[1065px]:px-10 max-[1015px]:px-10">
      <Link href="/">
        <div className="flex justify-center items-center">
          <img className="w-16" src="/logo41.png" alt="" />
          <p className="ml-4 text-xs font-[ethnocentric]">Crutox</p>
        </div>
      </Link>
      <div className="flex justify-between items-center w-[680px] max-[1015px]:hidden">
        <Link href="/">
          <p className="text-lg font-[ethnocentric] cursor-pointer underline">
            Service
          </p>
        </Link>
        <Link href="/">
          <p className="text-lg font-[ethnocentric] cursor-pointer underline">
            About
          </p>
        </Link>
        <Link href="/">
          <p className="text-lg font-[ethnocentric] cursor-pointer underline">
            Roadmap
          </p>
        </Link>
        <Link href="/">
          <p className="text-lg font-[ethnocentric] cursor-pointer underline">
            Team
          </p>
        </Link>
        <button
          onClick={toggleDropdown}
          className="text-lg text-white font-[ethnocentric] cursor-pointer underline"
        >
          Others
        </button>
        {isOpen && (
          <div className="absolute right-16 top-10 mt-2 py-2 w-44 bg-white rounded-lg shadow-xl flex flex-col justify-center items-center">
            <Link
              href="FAQ"
              className="block px-4 py-2 border-b-2 border-black w-[95%] text-center text-gray-800 hover:bg-gray-100"
            >
              FAQs
            </Link>
            <Link
              href="Terms"
              className="block px-4 py-2 border-b-2 border-black w-[95%] text-center text-gray-800 hover:bg-gray-100"
            >
              Terms & Conditions
            </Link>
            <Link
              href="Privacy"
              className="block px-4 py-2 w-[95%] text-center text-gray-800 hover:bg-gray-100"
            >
              Privacy Policy
            </Link>
          </div>
        )}
      </div>

      <Navbar />
    </div>
  );
}

export default Header;
