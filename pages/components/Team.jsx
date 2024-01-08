import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function Team() {
  return (
    <div className="h-full pb-44 relative" id="Team">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="flex flex-col justify-center items-center"
      >
        <p className="text-4xl font-[ethnocentric] text-center">
          Meet our team!
        </p>
        <div className="w-72 border-b-2 my-5" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: "-20%" }}
        whileInView={{ opacity: 1, y: "0%" }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="flex justify-evenly items-center mt-14 max-[600px]:flex-col"
      >
        <div className="flex flex-col justify-center items-center">
          <p className="mb-4 text-xl font-[ethnocentric]">Founder</p>
          <img
            className="w-56 rounded-full border-8 border-[#821F86] shadow-lg shadow-purple-400"
            src="/team/founder.jpg"
            alt=""
          />
          <div className="flex justify-center items-center mt-5 max-[600px]:mb-32">
            <p className="font-[ubuntu] text-lg mr-10">Zozo</p>
            <Link href="https://twitter.com/0x_zozo">
              <img className="w-10" src="/Twitter_X.svg" alt="" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="mb-4 text-xl font-[ethnocentric]">Co-Founder</p>
          <img
            className="w-56 rounded-full border-8 border-[#821F86] shadow-lg shadow-purple-400"
            src="/team/co-founder.jpg"
            alt=""
          />
          <div className="flex justify-center items-center mt-5">
            <p className="font-[ubuntu] text-lg mr-10">Jinzo</p>
            <Link href="https://twitter.com/yukicious">
              <img className="w-10" src="/Twitter_X.svg" alt="" />
            </Link>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: "-20%" }}
        whileInView={{ opacity: 1, y: "0%" }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="flex justify-evenly items-center mt-32 max-[600px]:flex-col"
      >
        <div className="flex flex-col justify-center items-center">
          <p className="mb-4 text-xl font-[ethnocentric] text-center">
            Lead Marketing <br /> Manager
          </p>
          <img
            className="w-56 rounded-full border-8 border-[#821F86] shadow-lg shadow-purple-400"
            src="/team/Lead-MM.jpg"
            alt=""
          />
          <div className="flex justify-center items-center mt-5 max-[600px]:mb-32">
            <p className="font-[ubuntu] text-lg">Camilo Garcia</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center max-[900px]:hidden">
          <p className="mb-4 text-xl font-[ethnocentric] text-center">
            Marketing <br /> Manager
          </p>
          <img
            className="w-56 rounded-full border-8 border-[#821F86] shadow-lg shadow-purple-400"
            src="/team/MM.jpg"
            alt=""
          />
          <div className="flex justify-center items-center mt-5">
            <p className="font-[ubuntu] text-lg">Mert Ozturk</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="mb-4 text-xl font-[ethnocentric] text-center">
            Lead Community <br /> Manager
          </p>
          <img
            className="w-56 h-56 rounded-full border-8 border-[#821F86] shadow-lg shadow-purple-400"
            src="/team/Lead-CM.jpg"
            alt=""
          />
          <div className="flex justify-center items-center mt-5">
            <p className="font-[ubuntu] text-lg">Luca Costa</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: "-20%" }}
        whileInView={{ opacity: 1, y: "0%" }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="flex justify-evenly items-center mt-32 max-[900px]:mt-24"
      >
        <div className="flex-col justify-center items-center hidden max-[900px]:flex">
          <p className="mb-4 text-xl font-[ethnocentric] text-center">
            Marketing <br /> Manager
          </p>
          <img
            className="w-56 rounded-full border-8 border-[#821F86] shadow-lg shadow-purple-400"
            src="/team/MM.jpg"
            alt=""
          />
          <div className="flex justify-center items-center mt-5">
            <p className="font-[ubuntu] text-lg">Mert Ozturk</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: "-20%" }}
        whileInView={{ opacity: 1, y: "0%" }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="flex justify-evenly items-center mt-32 max-[900px]:mt-24 max-[600px]:flex-col"
      >
        <div className="flex flex-col justify-center items-center">
          <p className="mb-4 text-xl font-[ethnocentric] text-center">
            Lead Blockchain <br /> Developer
          </p>
          <img
            className="w-56 rounded-full border-8 border-[#821F86] shadow-lg shadow-purple-400"
            src="/team/BC-manager.jpg"
            alt=""
          />
          <div className="flex justify-center items-center mt-5 max-[600px]:mb-32">
            <p className="font-[ubuntu] text-lg">Carlo Rodriguez</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="mb-4 text-xl font-[ethnocentric] text-center">
            App <br /> Developer
          </p>
          <img
            className="w-56 rounded-full border-8 border-[#821F86] shadow-lg shadow-purple-400"
            src="/team/Dev.jpg"
            alt=""
          />
          <div className="flex justify-center items-center mt-5">
            <p className="font-[ubuntu] text-lg">Emre Yilmaz</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Team;
