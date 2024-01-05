import React from "react";

function Header() {
  return (
    <div className="flex justify-between items-center py-6 px-16">
      <div>
        <img className="w-14" src="/logo41.png" alt="" />
      </div>
      <div className="flex justify-between items-center w-[560px]">
        <p className="text-lg font-[ethnocentric]">Home</p>
        <p className="text-lg font-[ethnocentric]">About</p>
        <p className="text-lg font-[ethnocentric]">Roadmap</p>
        <p className="text-lg font-[ethnocentric]">Others</p>
      </div>
    </div>
  );
}

export default Header;
