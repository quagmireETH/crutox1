import React, { useState, useEffect } from "react";
import ScrollButton from "./ScrollButton";
import Link from "next/link";

function MobileNav({ open, setOpen }) {
  const [shouldRender, setShouldRender] = useState(open);

  useEffect(() => {
    // Render the MobileNav component only after mounting on the client-side
    setShouldRender(true);
  }, []);

  return shouldRender ? (
    <div
      className={`fixed top-0 bottom-0 right-0 h-screen w-[37%] z-30 bg-[#320156] border-l-[#b41dbf] border-b-[#b41dbf] border-l-2 border-b-2 element transform ${
        open ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out filter  `}
    >
      <div className="flex flex-col justify-start items-start mt-10 p-5">
        <a className="my-4 border-b-2 border-[#b41dbf] w-full">
          <ScrollButton targetId="Service">
            <p className="text-2xl mb-4">Service</p>
          </ScrollButton>
        </a>
        <a className="my-4 border-b-2 border-[#b41dbf] w-full">
          <ScrollButton targetId="About">
            <p className="text-2xl mb-4">About</p>
          </ScrollButton>
        </a>
        <a className="my-4 border-b-2 border-[#b41dbf] w-full">
          <ScrollButton targetId="Roadmap">
            <p className="text-2xl mb-4">Roadmap</p>
          </ScrollButton>
        </a>
        <a className="my-4 border-b-2 border-[#b41dbf] w-full">
          <ScrollButton targetId="Team">
            <p className="text-2xl mb-4">Team</p>
          </ScrollButton>
        </a>

        <Link
          href="https://discord.gg/usnMa6hjUK"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="/discord.svg"
            className="w-8 my-2 mb-4 cursor-pointer"
            alt=""
          />
        </Link>
        <Link
          href="https://www.facebook.com/crutoxapp"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="/Facebook.svg"
            className="w-8 mb-4 cursor-pointer"
            alt=""
          />
        </Link>
        <Link
          href="https://twitter.com/CrutoxApp"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="/Twitter_X.svg"
            className="w-8 mb-4 cursor-pointer"
            alt=""
          />
        </Link>
        <Link
          href="https://instagram.com/crutox"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="/instagram.svg"
            className="w-8 mb-2 cursor-pointer"
            alt=""
          />
        </Link>
        <Link
          href="https://www.youtube.com/@CrutoxApp"
          rel="noreferrer"
          target="_blank"
        >
          <img src="/youtube.svg" className="w-8 my-2 cursor-pointer" alt="" />
        </Link>
      </div>
    </div>
  ) : null;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="hidden max-[1015px]:contents">
      <MobileNav open={open} setOpen={setOpen} />
      <div>
        <div
          className="group z-50 relative w-9 h-6 cursor-pointer flex-col justify-between items-center flex"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 bg-[#b41dbf] rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-2.5" : ""
            } ${open ? "fixed" : ""} ${open ? "w-[37px]" : "w-full"}`}
          />
          <span
            className={`h-1 bg-[#b41dbf] rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 bg-[#b41dbf] rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-2.5" : ""
            } ${open ? "fixed" : ""} ${open ? "w-[37px]" : "w-full"} ${
              open ? "mt-[19px]" : ""
            } ${open ? "mr-[2px]" : ""}`}
          />
        </div>
      </div>
    </div>
  );
}
