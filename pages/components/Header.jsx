import React from "react";

function Header() {
  return (
    <div className="flex justify-between items-center pb-6 mt-6 px-16">
      <div className="flex justify-center items-center">
        <img className="w-16" src="/logo41.png" alt="" />
        <p className="ml-4 text-xs font-[ethnocentric]">Crutox</p>
      </div>
      <div className="flex justify-between items-center w-[560px]">
        <p className="text-lg font-[ethnocentric] cursor-pointer">Home</p>
        <p className="text-lg font-[ethnocentric] cursor-pointer">About</p>
        <p className="text-lg font-[ethnocentric] cursor-pointer">Roadmap</p>
        <p className="text-lg font-[ethnocentric] cursor-pointer">Others</p>
      </div>
    </div>
  );
}

export default Header;
