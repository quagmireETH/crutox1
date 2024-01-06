import React from "react";
import Link from "next/link";

function Team() {
  return (
    <div className="h-full pb-44">
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl font-[ethnocentric]">Meet our team!</p>
        <div className="w-72 border-b-2 my-5" />
      </div>

      <div className="flex justify-evenly items-center mt-14">
        <div className="flex flex-col justify-center items-center">
          <p className="mb-4 text-xl font-[ethnocentric]">Founder</p>
          <img
            className="w-56 rounded-full border-8 border-[#821F86]"
            src="/team/founder.jpg"
            alt=""
          />
          <div className="flex justify-center items-center mt-4">
            <p className="font-[ubuntu] text-lg mr-10">Zozo</p>
            <Link href="https://twitter.com/0x_zozo">
              <img className="w-10" src="/Twitter_X.svg" alt="" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="mb-4 text-xl font-[ethnocentric]">Co-Founder</p>
          <img
            className="w-56 rounded-full border-8 border-[#821F86]"
            src="/team/co-founder.jpg"
            alt=""
          />
          <div className="flex justify-center items-center mt-4">
            <p className="font-[ubuntu] text-lg mr-10">Jinzo</p>
            <Link href="https://twitter.com/yukicious">
              <img className="w-10" src="/Twitter_X.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-evenly items-center mt-32">
        <div className="flex flex-col justify-center items-center">
          <p className="mb-4 text-xl font-[ethnocentric]">
            Lead Marketing Manager
          </p>
          <img
            className="w-56 rounded-full border-8 border-[#821F86]"
            src="/team/Lead-MM.jpg"
            alt=""
          />
          <div className="flex justify-center items-center mt-4">
            <p className="font-[ubuntu] text-lg">Camilo Garcia</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="mb-4 text-xl font-[ethnocentric]">Marketing Manager</p>
          <img
            className="w-56 rounded-full border-8 border-[#821F86]"
            src="/team/MM.jpg"
            alt=""
          />
          <div className="flex justify-center items-center mt-4">
            <p className="font-[ubuntu] text-lg">Mert Ozturk</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="mb-4 text-xl font-[ethnocentric]">
            Lead Community Manager
          </p>
          <img
            className="w-56 h-56 rounded-full border-8 border-[#821F86]"
            src="/team/Lead-CM.jpg"
            alt=""
          />
          <div className="flex justify-center items-center mt-4">
            <p className="font-[ubuntu] text-lg">Luca Costa</p>
          </div>
        </div>
      </div>

      <div className="flex justify-evenly items-center mt-32">
        <div className="flex flex-col justify-center items-center">
          <p className="mb-4 text-xl font-[ethnocentric]">
            Lean Blockchain Developer
          </p>
          <img
            className="w-56 rounded-full border-8 border-[#821F86]"
            src="/team/BC-manager.jpg"
            alt=""
          />
          <div className="flex justify-center items-center mt-4">
            <p className="font-[ubuntu] text-lg">Carlo Rodriguez</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="mb-4 text-xl font-[ethnocentric]">App Developer</p>
          <img
            className="w-56 rounded-full border-8 border-[#821F86]"
            src="/team/Dev.jpg"
            alt=""
          />
          <div className="flex justify-center items-center mt-4">
            <p className="font-[ubuntu] text-lg">Emre Yilmaz</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
