import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="h-full pb-16">
      <div className="flex justify-center items-center">
        <div className="flex justify-around items-center gradient-box shadow-lg shadow-white w-5/6 py-10 rounded-xl">
          <div>
            <p className="text-xl">
              Let&apos;s Get <br />
              In Touch!
            </p>
          </div>
          <div>
            <input
              type="text"
              id="myInput"
              name="myInput"
              placeholder="Enter your email here..."
              className="py-2 px-1 rounded w-[600px]"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-12">
        <Link href="https://discord.gg/usnMa6hjUK">
          <img className="w-10 mr-4 cursor-pointer" src="/discord.svg" alt="" />
        </Link>
        <Link href="https://www.facebook.com/crutoxapp">
          <img
            className="w-10 mr-4 cursor-pointer"
            src="/Facebook.svg"
            alt=""
          />
        </Link>
        <Link href="https://twitter.com/CrutoxApp">
          <img
            className="w-10 mr-4 cursor-pointer"
            src="/Twitter_X.svg"
            alt=""
          />
        </Link>
        <Link href="https://instagram.com/crutox">
          <img
            className="w-10 mr-4 cursor-pointer"
            src="/instagram.svg"
            alt=""
          />
        </Link>
        <Link href="https://www.youtube.com/@CrutoxApp">
          <img className="w-10 cursor-pointer" src="/youtube.svg" alt="" />
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-5/6 border-b-2 mb-12 mt-28" />
      </div>

      <div className="flex justify-around items-center">
        <div>
          <p className="text-lg">© Crutox Network. All rights reserved.</p>
        </div>
        <div className="flex justify-center items-center">
          <img className="w-10" src="/logo41.png" alt="" />
          <p className="ml-4 text-lg">Crutox</p>
        </div>
        <div className="flex justify-center items-center">
          <Link href="https://crutox.com/terms" className="mr-6">
            <p className="text-lg">Terms & Contitions</p>
          </Link>
          <Link href="https://crutox.com/privacy">
            <p className="text-lg">Privacy Policy</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;