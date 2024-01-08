import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function Footer() {
  return (
    <div className="h-full pb-16 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="flex justify-center items-center"
      >
        <div className="flex justify-around items-center gradient-box shadow-lg shadow-white w-5/6 py-10 rounded-xl max-[1025px]:flex-col max-[1025px]:pt-4">
          <div>
            <p className="text-xl mb-5 font-[ethnocentric] max-[1025px]:text-2xl">
              Let&apos;s Get <br className="max-[1025px]:hidden" />
              In Touch!
            </p>
          </div>
          <div>
            <input
              type="text"
              id="myInput"
              name="myInput"
              placeholder="Enter your email here..."
              className="py-2 px-1 rounded w-[600px] max-[780px]:w-[500px] max-[650px]:w-[400px] max-[530px]:w-[300px]"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="flex justify-center items-center mt-12"
      >
        <Link
          href="https://discord.gg/usnMa6hjUK"
          rel="noreferrer"
          target="_blank"
        >
          <img className="w-10 mr-4 cursor-pointer" src="/discord.svg" alt="" />
        </Link>
        <Link href="https://www.facebook.com/crutoxapp">
          <img
            className="w-10 mr-4 cursor-pointer"
            src="/Facebook.svg"
            alt=""
          />
        </Link>
        <Link
          href="https://twitter.com/CrutoxApp"
          rel="noreferrer"
          target="_blank"
        >
          <img
            className="w-10 mr-4 cursor-pointer"
            src="/Twitter_X.svg"
            alt=""
          />
        </Link>
        <Link
          href="https://instagram.com/crutox"
          rel="noreferrer"
          target="_blank"
        >
          <img
            className="w-10 mr-4 cursor-pointer"
            src="/instagram.svg"
            alt=""
          />
        </Link>
        <Link
          href="https://www.youtube.com/@CrutoxApp"
          rel="noreferrer"
          target="_blank"
        >
          <img className="w-10 cursor-pointer" src="/youtube.svg" alt="" />
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: "20%" }}
        whileInView={{ opacity: 1, y: "0%" }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="flex justify-center items-center"
      >
        <div className="w-5/6 border-b-2 mb-12 mt-28" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: "20%" }}
        whileInView={{ opacity: 1, y: "0%" }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="flex justify-around items-center"
      >
        <div>
          <p className="text-lg">
            © Crutox Network. <br className="hidden max-[860px]:block" /> All
            rights reserved.
          </p>
        </div>
        <div className="flex justify-center items-center max-[600px]:hidden">
          <img className="w-10" src="/logo41.png" alt="" />
          <p className="ml-4 text-lg">Crutox</p>
        </div>
        <div className="flex justify-center items-center max-[860px]:flex-col max-[860px]:items-end">
          <Link
            href="https://crutox.com/terms"
            rel="noreferrer"
            target="_blank"
            className="mr-6 max-[860px]:mr-0"
          >
            <p className="text-lg">Terms & Contitions</p>
          </Link>
          <Link
            href="https://crutox.com/privacy"
            rel="noreferrer"
            target="_blank"
          >
            <p className="text-lg">Privacy Policy</p>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Footer;
