import Header from "./components/Header";
import Services from "./components/Services";
import Journey from "./components/Journey";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex justify-evenly items-center h-full pb-[275px] relative">
      <img
        className="absolute w-full h-full -z-50"
        src="/background.jpg"
        alt=""
      />
        <div className="flex flex-col mt-12">
          <p className="mb-7 font-[ethnocentric] text">
            Crypto <br /> Without Limitations
          </p>
          <p className="w-[900px] font-[ubuntu] text-2xl bg-black bg-opacity-70 p-2 rounded-lg">
            Crutox is your gateway to a simplified and accessible cryptocurrency
            experience. Mine digital assets effortlessly using your mobile
            device, join a thriving crypto community, and stay at the forefront
            of blockchain innovation. Start your journey with Crutox today and
            be part of the crypto revolution.
          </p>
          <div className="flex justify-start items-center">
            <div className="gradient-button rounded-xl py-2.5 px-32 mt-16 flex justify-center items-center">
              <p className="text-2xl font-[ubuntu]">Download</p>
            </div>
          </div>
        </div>
        <div>
          <img className="mt-12" src="/C.png" alt="" />
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
