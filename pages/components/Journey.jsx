import React from "react";

function Journey() {
  return (
    <div className="pb-44">
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl font-[ethnocentric]">
          Your Journey with <span className="font-bold">Crutox</span>!
        </p>
        <div className="w-72 border-b-2 my-5" />
        <p className="font-[ubuntu] text-lg text-[#949295] text-center">
          Joining Crutox means joining a community of forward-thinkers,
          investors, and individuals who are passionate about the
          <br /> future of digital currency. Here&apos;s what you can expect
        </p>
      </div>

      <div>
        <div className="my-20 flex justify-evenly items-center">
          <img className="w-32" src="/icons/mining.svg" alt="" />
          <div className="w-[800px]">
            <p className="text-xl mb-2 font-[ethnocentric]">
              Effortless Mining
            </p>
            <p className="font-[ubuntu] text-lg text-[#949295] text-start">
              Start mining with a few simple taps on your mobile device. Our app
              takes care of the technical aspects, so you can focus on earning.
            </p>
          </div>
        </div>
        <div className="my-20 flex justify-evenly items-center">
          <img className="w-32" src="/icons/payout.svg" alt="" />
          <div className="w-[800px]">
            <p className="text-xl mb-2 font-[ethnocentric]">Regular Payouts</p>
            <p className="font-[ubuntu] text-lg text-[#949295] text-start">
              Watch your earnings grow and receive regular payouts, giving you
              real-time access to your cryptocurrency assets.
            </p>
          </div>
        </div>
        <div className="my-20 flex justify-evenly items-center">
          <img className="w-32" src="/icons/education.svg" alt="" />
          <div className="w-[800px]">
            <p className="text-xl mb-2 font-[ethnocentric]">
              Educational Resources
            </p>
            <p className="font-[ubuntu] text-lg text-[#949295] text-start">
              New to crypto? No problem. We provide resources and information to
              help you understand the world of cryptocurrency better.
            </p>
          </div>
        </div>
        <div className="my-20 flex justify-evenly items-center">
          <img className="w-32" src="/icons/features.svg" alt="" />
          <div className="w-[800px]">
            <p className="text-xl mb-2 font-[ethnocentric]">
              Innovative Features
            </p>
            <p className="font-[ubuntu] text-lg text-[#949295] text-start">
              We're constantly improving and adding new features to make your
              crypto journey even more rewarding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Journey;
