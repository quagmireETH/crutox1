import Header from "./components/Header";
import Services from "./components/Services";
import Journey from "./components/Journey";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="flex justify-evenly items-center mt-10 pb-44 h-full">
        <div className="flex flex-col">
          <p className="text-4xl mb-7 font-[ethnocentric]">
            Crutox: Crypto <br /> Without Limitations
          </p>
          <p className="text-[#949295] w-[600px] font-[ubuntu] text-xl">
            Crutox is your gateway to a simplified and accessible cryptocurrency
            experience. Mine digital assets effortlessly using your mobile
            device, join a thriving crypto community, and stay at the forefront
            of blockchain innovation. Start your journey with Crutox today and
            be part of the crypto revolution.
          </p>
          <div className="flex justify-center items-center">
            <div className="gradient-button rounded-xl py-2.5 px-32 mt-10 flex justify-center items-center">
              <p className="text-xl font-[ubuntu]">Download</p>
            </div>
          </div>
        </div>
        <div>
          <img className="" src="/C.png" alt="" />
        </div>
      </div>

      <Services />
      <Journey />
      <Roadmap />
      <Team />
      <Footer />
    </div>
  );
}
