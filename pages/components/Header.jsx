import React from "react";
import Navbar from "./BurgerNav";
import ScrollButton from "./ScrollButton";

function Header() {
  return (
    <div className="flex justify-between items-center pb-6 mt-6 px-16  max-[1065px]:px-10 max-[1015px]:px-10">
      <div className="flex justify-center items-center">
        <img className="w-16" src="/logo41.png" alt="" />
        <p className="ml-4 text-xs font-[ethnocentric]">Crutox</p>
      </div>
      <div className="flex justify-between items-center w-[680px] max-[1015px]:hidden">
        <ScrollButton targetId="Service">
          <p className="text-lg font-[ethnocentric] cursor-pointer underline">
            Service
          </p>
        </ScrollButton>
        <ScrollButton targetId="About">
          <p className="text-lg font-[ethnocentric] cursor-pointer underline">
            About
          </p>
        </ScrollButton>
        <ScrollButton targetId="Roadmap">
          <p className="text-lg font-[ethnocentric] cursor-pointer underline">
            Roadmap
          </p>
        </ScrollButton>
        <ScrollButton targetId="Team">
          <p className="text-lg font-[ethnocentric] cursor-pointer underline">
            Team
          </p>
        </ScrollButton>
        <p className="text-lg font-[ethnocentric] cursor-pointer underline">
          Others
        </p>
      </div>

      <Navbar />
    </div>
  );
}

export default Header;
