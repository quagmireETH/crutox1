import Header from "./components/Header";
import Services from "./components/Services";
import Journey from "./components/Journey";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="flex justify-evenly items-center h-full pb-[275px] relative max-[750px]:justify-center">
        <img
          className="absolute w-full h-full -z-50"
          src="/background.jpg"
          alt=""
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="flex flex-col mt-12 max-[1330px]:pl-10 max-[750px]:pl-0 max-[750px]:justify-center max-[750px]:items-center"
        >
          <p className="mb-7 font-[ethnocentric] text max-[1330px]:w-[600px] max-[1060px]:w-[500px] max-[960px]:w-[400px] max-[750px]:text-center max-[750px]:w-5/6 max-[500px]:w-full">
            Crypto <br /> Without Limitations
          </p>
          <p className="w-[800px] font-[ubuntu] text-lg bg-black bg-opacity-70 p-2 rounded-lg max-[1330px]:w-[600px] max-[1060px]:w-[500px] max-[960px]:w-[400px] max-[750px]:w-5/6">
            Crutox is your gateway to a simplified and accessible cryptocurrency
            experience. Mine digital assets effortlessly using your mobile
            device, join a thriving crypto community, and stay at the forefront
            of blockchain innovation. Start your journey with Crutox today and
            be part of the crypto revolution.
          </p>
          <div className="flex justify-start items-center max-[750px]:justify-center">
            <Link href="https://play.google.com/store/apps/details?id=com.mine.crutox&hl=en&gl=US">
              <div className="gradient-button rounded-xl py-2.5 px-32 mt-16 flex justify-center items-center shadow-md shadow-purple-400 active:translate-y-2 active:shadow-none max-[500px]:px-16">
                <p className="text-2xl font-[ubuntu]">Download</p>
              </div>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "20%" }}
          whileInView={{ opacity: 1, x: "0%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <img
            className="mt-12 max-[960px]:w-[450px] max-[750px]:hidden"
            src="/C.png"
            alt=""
          />
        </motion.div>
      </div>

      <Services />
      <Journey />
      <Roadmap />
      <Team />
      <Footer />
    </div>
  );
}
