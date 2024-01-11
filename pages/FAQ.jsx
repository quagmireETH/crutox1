import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";

function FAQ() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);

  const [rotation, setRotation] = useState(0);
  const [rotation2, setRotation2] = useState(0);
  const [rotation3, setRotation3] = useState(0);
  const [rotation4, setRotation4] = useState(0);
  const [rotation5, setRotation5] = useState(0);
  const [rotation6, setRotation6] = useState(0);
  const [rotation7, setRotation7] = useState(0);
  const [rotation8, setRotation8] = useState(0);

  const handleClick = () => {
    setRotation((prevRotation) => {
      if (prevRotation === 0) {
        return 180;
      } else {
        return 0;
      }
    });
    toggleCollapse();
  };

  const handleClick2 = () => {
    setRotation2((prevRotation) => {
      if (prevRotation === 0) {
        return 180;
      } else {
        return 0;
      }
    });
    toggleCollapse2();
  };

  const handleClick3 = () => {
    setRotation3((prevRotation) => {
      if (prevRotation === 0) {
        return 180;
      } else {
        return 0;
      }
    });
    toggleCollapse3();
  };

  const handleClick4 = () => {
    setRotation4((prevRotation) => {
      if (prevRotation === 0) {
        return 180;
      } else {
        return 0;
      }
    });
    toggleCollapse4();
  };

  const handleClick5 = () => {
    setRotation5((prevRotation) => {
      if (prevRotation === 0) {
        return 180;
      } else {
        return 0;
      }
    });
    toggleCollapse5();
  };

  const handleClick6 = () => {
    setRotation6((prevRotation) => {
      if (prevRotation === 0) {
        return 180;
      } else {
        return 0;
      }
    });
    toggleCollapse6();
  };

  const handleClick7 = () => {
    setRotation7((prevRotation) => {
      if (prevRotation === 0) {
        return 180;
      } else {
        return 0;
      }
    });
    toggleCollapse7();
  };

  const handleClick8 = () => {
    setRotation8((prevRotation) => {
      if (prevRotation === 0) {
        return 180;
      } else {
        return 0;
      }
    });
    toggleCollapse8();
  };

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
    setIsOpen6(false);
    setIsOpen7(false);
    setIsOpen8(false);
    setRotation2(rotation2 >= 5 ? 0 : rotation2);
    setRotation3(rotation3 >= 5 ? 0 : rotation3);
    setRotation4(rotation4 >= 5 ? 0 : rotation4);
    setRotation5(rotation5 >= 5 ? 0 : rotation5);
    setRotation6(rotation6 >= 5 ? 0 : rotation6);
    setRotation7(rotation7 >= 5 ? 0 : rotation7);
    setRotation8(rotation8 >= 5 ? 0 : rotation8);
  };

  const toggleCollapse2 = () => {
    setIsOpen(false);
    setIsOpen2(!isOpen2);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
    setIsOpen6(false);
    setIsOpen7(false);
    setIsOpen8(false);
    setRotation(rotation >= 5 ? 0 : rotation);
    setRotation3(rotation3 >= 5 ? 0 : rotation3);
    setRotation4(rotation4 >= 5 ? 0 : rotation4);
    setRotation5(rotation5 >= 5 ? 0 : rotation5);
    setRotation6(rotation6 >= 5 ? 0 : rotation6);
    setRotation7(rotation7 >= 5 ? 0 : rotation7);
    setRotation8(rotation8 >= 5 ? 0 : rotation8);
  };

  const toggleCollapse3 = () => {
    setIsOpen(false);
    setIsOpen2(false);
    setIsOpen3(!isOpen3);
    setIsOpen4(false);
    setIsOpen5(false);
    setIsOpen6(false);
    setIsOpen7(false);
    setIsOpen8(false);
    setRotation(rotation >= 5 ? 0 : rotation);
    setRotation2(rotation2 >= 5 ? 0 : rotation2);
    setRotation4(rotation4 >= 5 ? 0 : rotation4);
    setRotation5(rotation5 >= 5 ? 0 : rotation5);
    setRotation6(rotation6 >= 5 ? 0 : rotation6);
    setRotation7(rotation7 >= 5 ? 0 : rotation7);
    setRotation8(rotation8 >= 5 ? 0 : rotation8);
  };

  const toggleCollapse4 = () => {
    setIsOpen(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(!isOpen4);
    setIsOpen5(false);
    setIsOpen6(false);
    setIsOpen7(false);
    setIsOpen8(false);
    setRotation(rotation >= 5 ? 0 : rotation);
    setRotation2(rotation2 >= 5 ? 0 : rotation2);
    setRotation3(rotation3 >= 5 ? 0 : rotation3);
    setRotation5(rotation5 >= 5 ? 0 : rotation5);
    setRotation6(rotation6 >= 5 ? 0 : rotation6);
    setRotation7(rotation7 >= 5 ? 0 : rotation7);
    setRotation8(rotation8 >= 5 ? 0 : rotation8);
  };

  const toggleCollapse5 = () => {
    setIsOpen(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(!isOpen5);
    setIsOpen6(false);
    setIsOpen7(false);
    setIsOpen8(false);
    setRotation(rotation >= 5 ? 0 : rotation);
    setRotation2(rotation2 >= 5 ? 0 : rotation2);
    setRotation3(rotation3 >= 5 ? 0 : rotation3);
    setRotation4(rotation4 >= 5 ? 0 : rotation4);
    setRotation6(rotation6 >= 5 ? 0 : rotation6);
    setRotation7(rotation7 >= 5 ? 0 : rotation7);
    setRotation8(rotation8 >= 5 ? 0 : rotation8);
  };

  const toggleCollapse6 = () => {
    setIsOpen(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
    setIsOpen6(!isOpen6);
    setIsOpen7(false);
    setIsOpen8(false);
    setRotation(rotation >= 5 ? 0 : rotation);
    setRotation2(rotation2 >= 5 ? 0 : rotation2);
    setRotation3(rotation3 >= 5 ? 0 : rotation3);
    setRotation4(rotation4 >= 5 ? 0 : rotation4);
    setRotation5(rotation5 >= 5 ? 0 : rotation5);
  };

  const toggleCollapse7 = () => {
    setIsOpen(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
    setIsOpen6(false);
    setIsOpen7(!isOpen7);
    setIsOpen8(false);
    setRotation(rotation >= 5 ? 0 : rotation);
    setRotation2(rotation2 >= 5 ? 0 : rotation2);
    setRotation3(rotation3 >= 5 ? 0 : rotation3);
    setRotation4(rotation4 >= 5 ? 0 : rotation4);
    setRotation5(rotation5 >= 5 ? 0 : rotation5);
    setRotation6(rotation6 >= 5 ? 0 : rotation6);
    setRotation8(rotation8 >= 5 ? 0 : rotation8);
  };

  const toggleCollapse8 = () => {
    setIsOpen(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
    setIsOpen6(false);
    setIsOpen7(false);
    setIsOpen8(!isOpen8);
    setRotation(rotation >= 5 ? 0 : rotation);
    setRotation2(rotation2 >= 5 ? 0 : rotation2);
    setRotation3(rotation3 >= 5 ? 0 : rotation3);
    setRotation4(rotation4 >= 5 ? 0 : rotation4);
    setRotation5(rotation5 >= 5 ? 0 : rotation5);
    setRotation6(rotation6 >= 5 ? 0 : rotation6);
    setRotation7(rotation7 >= 5 ? 0 : rotation7);
  };

  return (
    <div className="overflow-x-hidden h-full">
      <Header />

      <div className="mt-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="flex flex-col justify-center items-center"
        >
          <p className="text-4xl font-[ethnocentric]">Roadmap</p>
          <div className="w-72 border-b-2 my-5" />
          <p className="font-[ubuntu]">FREQUENTLY ASKED QUESTIONS</p>
        </motion.div>
      </div>

      <div className="flex justify-center items-center">
        <div className="mt-24 mb-44 shadow-[0_0_30px_0] bg-[#32143B] shadow-purple-400 rounded-xl px-10 py-8 w-5/6 max-[710px]:px-4 max-[535px]:px-2">
          <div className=" max-[1000px]:flex max-[1000px]:justify-center">
            <div className="flex flex-col justify-center max-[1000px]:mb-4">
              <div className="w-full h-16 mb-12 rounded-2xl flex justify-between items-center">
                <p className="text-3xl font-[ethnocentric] ml-10 max-[535px]:ml-4 max-[415px]:text-2xl max-[415px]:ml-0">
                  1.
                </p>
                <p className="text-xl font-[ethnocentric] text-center mr-20 ml-20 max-[950px]:text-lg max-[950px]:mr-10 max-[950px]:ml-10 max-[620px]:text-base max-[561px]:mr-5 max-[561px]:ml-5 max-[450px]:text-sm ">
                  What is Crutox?
                </p>
                <img
                  className="w-12 mr-2 cursor-pointer max-[415px]:w-8"
                  onClick={handleClick}
                  src="/arrow.png"
                  style={{
                    transform: `rotate(${rotation}deg)`,
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
              </div>

              <div
                className={`${
                  isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden transition-all duration-300 ease-in-out  -mt-4`}
              >
                <div className="mb-4">
                  <p className="font-[ubuntu] text-center max-[415px]:text-sm">
                    Crutox is a crypto mining application designed to help users
                    mine our crypto coin efficiently. It offers a user-friendly
                    interface and powerful features to streamline the mining
                    process.
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <div className="w-3/4 border-b-2 mt-5 mb-10" />
              </div>

              <div className="w-full h-16 mb-12 rounded-2xl flex justify-between items-center">
                <p className="text-3xl font-[ethnocentric] ml-10 max-[535px]:ml-4 max-[415px]:text-2xl max-[415px]:ml-0 ">
                  2.
                </p>
                <p className="text-xl font-[ethnocentric] text-center mr-20 ml-20 max-[950px]:text-lg max-[950px]:mr-10 max-[950px]:ml-10 max-[620px]:text-base max-[561px]:mr-5 max-[561px]:ml-5 max-[450px]:text-sm ">
                  How do I mine more Crutox coins?
                </p>
                <img
                  className="w-12 mr-2 cursor-pointer max-[415px]:w-8"
                  onClick={handleClick2}
                  src="/arrow.png"
                  style={{
                    transform: `rotate(${rotation2}deg)`,
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
              </div>

              <div
                className={`${
                  isOpen2 ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden transition-all duration-300 ease-in-out  -mt-4`}
              >
                <div className="mb-4">
                  <p className="font-[ubuntu] text-center max-[415px]:text-sm">
                    Crutox Network’s mining mechanism is simple and
                    meritocratic: The more you contribute to the network in
                    diverse ways, the higher your mining rate is. In addition to
                    mining everyday, you can boost your individual mining rate
                    by doing one or more of the activities below. Keep in mind
                    that the mining stops along with all types of mining rewards
                    when a mining session is no longer active (that is, after
                    the end of a 12-hour mining session and before you start
                    another mining session on the app). Therefore, it’s best to
                    set an app notification to remind you when it is time to
                    start a new mining session.
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <div className="w-3/4 border-b-2 mt-5 mb-10" />
              </div>

              <div className="w-full h-16 rounded-2xl flex justify-between items-center">
                <p className="text-3xl font-[ethnocentric] ml-10 max-[535px]:ml-4 max-[415px]:text-2xl max-[415px]:ml-0">
                  3.
                </p>
                <p className="text-xl font-[ethnocentric] text-center mr-20 ml-20 max-[950px]:text-lg max-[950px]:mr-10 max-[950px]:ml-10 max-[620px]:text-base max-[561px]:mr-5 max-[561px]:ml-5 max-[450px]:text-sm ">
                  What is the utility of Crutox?
                </p>
                <img
                  className="w-12 mr-2 cursor-pointer max-[415px]:w-8"
                  onClick={handleClick3}
                  src="/arrow.png"
                  style={{
                    transform: `rotate(${rotation3}deg)`,
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
              </div>

              <div
                className={`${
                  isOpen3 ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden transition-all duration-300 ease-in-out  mt-4`}
              >
                <div className="mb-4">
                  <p className="font-[ubuntu] text-center max-[415px]:text-sm text-white">
                    Crutox utility will be backed by the time, attention, goods,
                    and services offered by other members of the network in
                    exchange for Crutox. By pooling our attention, goods and
                    services around a common currency, Crutox members are
                    building the network together. Because this is a network
                    supported by blockchain technology, the network can help its
                    members reduce their costs and prevent slippage that
                    typically goes to banks, technology giants (e.g., Facebook,
                    Amazon) and other intermediaries. Today, we are laying the
                    infrastructure for this digital currency and for a
                    utilities-driven app ecosystem by distributing the currency,
                    building the community, developing the technology to ensure
                    its security and designing new types of online social
                    experience.
                  </p>
                  <br />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="w-3/4 border-b-2 mt-5 mb-10" />
          </div>

          <div className=" max-[1000px]:flex max-[1000px]:justify-center">
            <div className="flex flex-col justify-center">
              <div className="w-full h-16 mb-12 rounded-2xl flex justify-between items-center">
                <p className="text-3xl font-[ethnocentric] ml-10 max-[535px]:ml-4 max-[415px]:text-2xl max-[415px]:ml-0">
                  4.
                </p>
                <p className="text-xl font-[ethnocentric] text-center mr-20 ml-20 max-[950px]:text-lg max-[950px]:mr-10 max-[950px]:ml-10 max-[620px]:text-base max-[561px]:mr-5 max-[561px]:ml-5 max-[450px]:text-sm ">
                  How can I use my Crutox on the Mainnet?
                </p>
                <img
                  className="w-12 mr-2 cursor-pointer max-[415px]:w-8"
                  onClick={handleClick4}
                  src="/arrow.png"
                  style={{
                    transform: `rotate(${rotation4}deg)`,
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
              </div>

              <div
                className={`${
                  isOpen4 ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden transition-all duration-300 ease-in-out  -mt-4`}
              >
                <div className="mb-4">
                  <p className="font-[ubuntu] text-center max-[415px]:text-sm">
                    Crutox Network is building a peer-to-peer ecosystem
                    including marketplaces where our members will be able to
                    directly spend Crutox to buy goods and services. Once users
                    are able to pass KYC verification and migrate their mobile
                    Crutox balance to Mainnet, this option will be available.
                    When Crutox apps transition from Testnet to Mainnet, this
                    option will be scaled and diversified across the ecosystem.
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <div className="w-3/4 border-b-2 mt-5 mb-10 max-[585px]:mb-16" />
              </div>

              <div className="w-full h-16 mb-12 rounded-2xl flex justify-between items-center">
                <p className="text-3xl font-[ethnocentric] ml-10 max-[535px]:ml-4 max-[415px]:text-2xl max-[415px]:ml-0">
                  5.
                </p>
                <p className="text-xl font-[ethnocentric] text-center mr-20 ml-20 max-[950px]:text-lg max-[950px]:mr-10 max-[950px]:ml-10 max-[620px]:text-base max-[561px]:mr-5 max-[561px]:ml-5 max-[450px]:text-sm ">
                  How can the mining of Crutox crypto be free? Are you using my
                  phone resources?
                </p>
                <img
                  className="w-12 mr-2 cursor-pointer max-[415px]:w-8"
                  onClick={handleClick5}
                  src="/arrow.png"
                  style={{
                    transform: `rotate(${rotation5}deg)`,
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
              </div>

              <div
                className={`${
                  isOpen5 ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden transition-all duration-300 ease-in-out -mt-4 max-[395px]:-mt-2 max-[371px]:mt-0`}
              >
                <div className="mb-4">
                  <p className="font-[ubuntu] text-center max-[415px]:text-sm">
                    Allowing users to mine crutox coin for free is a conscious
                    network choice in service of ensuring accessibility to
                    cryptocurrency to people regardless of their financial
                    background. Crutox Network does NOT use your phone’s
                    resources – hardware, network, or anything else. The main
                    Crutox app uses as much phone battery just as any other
                    regular app. Please refer to the next answer to understand
                    why Crutox mining does not consume your phone resources.
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <div className="w-3/4 border-b-2 mt-5 mb-10 max-[780px]:mb-20" />
              </div>

              <div className="w-full h-16 rounded-2xl flex justify-between items-center">
                <p className="text-3xl font-[ethnocentric] ml-10 max-[535px]:ml-4 max-[415px]:text-2xl max-[415px]:ml-0">
                  6.
                </p>
                <p className="text-xl font-[ethnocentric] text-center mr-20 ml-20 max-[950px]:text-lg max-[950px]:mr-10 max-[950px]:ml-10 max-[620px]:text-base max-[561px]:mr-5 max-[561px]:ml-5 max-[450px]:text-sm ">
                  How can Crutox be mined on mobile phones without energy
                  consumption typically known in “crypto mining”?
                </p>
                <img
                  className="w-12 mr-2 cursor-pointer max-[415px]:w-8"
                  onClick={handleClick6}
                  src="/arrow.png"
                  style={{
                    transform: `rotate(${rotation6}deg)`,
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
              </div>

              <div
                className={`${
                  isOpen6 ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden transition-all duration-300 ease-in-out mt-8 max-[1150px]:mt-12 max-[775px]:mt-16 max-[648px]:mt-20`}
              >
                <div className="mb-4">
                  <p className="font-[ubuntu] text-center max-[415px]:text-sm">
                    Crutox achieves this by using a different type of consensus
                    algorithm in its blockchain, rather than the widely known
                    Proof of Work (POW) algorithm that consumes a lot of energy.
                    Crutox consensus algorithm is adapted from the Stellar
                    Consensus Protocol (SCP) and an algorithm called Federated
                    Byzantine Agreement (FBA), which do not require energy
                    consumption to reach consensus in order to secure a ledger.
                    This type of consensus algorithm requires the nodes to form
                    quorums and exchange messages with each other based on a
                    trust graph composed of individual quorum slices to come to
                    a “consensus” on what the next block should be. Mining is
                    making contributions to the consensus algorithm to secure
                    the ledger in blockchain for rewards. While POW mining
                    requires nodes to “work” to solve mathematical puzzles to
                    help the algorithm reach consensus and incidentally consume
                    a lot of energy, Crutox mining requires a distributed trust
                    graph. The security circles of each individual mobile miners
                    will aggregate into a global trust graph that will feed the
                    consensus algorithm of the Crutox blockchain. Therefore,
                    each mobile miner is mining Crutox by contributing to the
                    intersectionality, security and feasibility of the consensus
                    algorithm of the Crutox blockchain in order to secure the
                    Crutox ledger. While POW miners’ contribution to those
                    blockchains is the energy, Crutox mobile miners’
                    contribution to Crutox Blockchain is their trust
                    relationships and the active confirming of such
                    relationships. The heavy lifting of running the consensus
                    algorithm based on the trust graph that the mobile phones
                    are creating is still falling into computer nodes. In fact,
                    the Crutox Testnet already has more than 10K such computer
                    nodes that will be soon migrated to the Crutox Mainnet,
                    placing Crutox into a good path into creating a very
                    decentralized blockchain network.
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <div className="w-3/4 border-b-2 mt-5 mb-10 max-[780px]:mb-14 max-[780px]:mt-10 max-[655px]:mt-14" />
              </div>

              <div className="w-full h-16 rounded-2xl flex justify-between items-center">
                <p className="text-3xl font-[ethnocentric] ml-10 max-[535px]:ml-4 max-[415px]:text-2xl max-[415px]:ml-0">
                  7.
                </p>
                <p className="text-xl font-[ethnocentric] text-center mr-20 ml-20 max-[950px]:text-lg max-[950px]:mr-10 max-[950px]:ml-10 max-[620px]:text-base max-[561px]:mr-5 max-[561px]:ml-5 max-[450px]:text-sm ">
                  Do I need to leave the app open to mine? Does the app drain my
                  battery or data?
                </p>
                <img
                  className="w-12 mr-2 cursor-pointer max-[415px]:w-8"
                  onClick={handleClick7}
                  src="/arrow.png"
                  style={{
                    transform: `rotate(${rotation7}deg)`,
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
              </div>

              <div
                className={`${
                  isOpen7 ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden transition-all duration-300 ease-in-out mt-4 max-[1200px]:mt-6 max-[805px]:mt-10 max-[650px]:mt-14 max-[620px]:mt-11`}
              >
                <div className="mb-4">
                  <p className="font-[ubuntu] text-center max-[415px]:text-sm">
                    You do not need to leave the app open to mine. Crutox does
                    not affect your phone’s performance, drain your battery, nor
                    use your network data any more than other regular apps. Once
                    you hit the Start button that initiates a new mining session
                    and confirms your security circle, you can even close the
                    app and you will continue to mine Crutox. However, making
                    diverse contributions to the network, such as using Crutox
                    apps, running computer nodes or inviting friends, will boost
                    your mining rate. Any mobile usage of Crutox apps will not
                    consume more energy or resources than other regular mobile
                    apps.
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <div className="w-3/4 border-b-2 mt-5 mb-10 max-[780px]:mt-10" />
              </div>

              <div className="w-full h-16 rounded-2xl flex justify-between items-center">
                <p className="text-3xl font-[ethnocentric] ml-10 max-[535px]:ml-4 max-[415px]:text-2xl max-[415px]:ml-0">
                  8.
                </p>
                <p className="text-xl font-[ethnocentric] text-center mr-20 ml-20 max-[950px]:text-lg max-[950px]:mr-10 max-[950px]:ml-10 max-[620px]:text-base max-[561px]:mr-5 max-[561px]:ml-5 max-[450px]:text-sm ">
                  How does the Crutox app work?
                </p>
                <img
                  className="w-12 mr-2 cursor-pointer max-[415px]:w-8"
                  onClick={handleClick8}
                  src="/arrow.png"
                  style={{
                    transform: `rotate(${rotation8}deg)`,
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
              </div>

              <div
                className={`${
                  isOpen8 ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden transition-all duration-300 ease-in-out  mt-4`}
              >
                <div className="mb-4">
                  <p className="font-[ubuntu] text-center max-[415px]:text-sm">
                    The Crutox app allows you to mine Crutox Coin by making
                    diverse contributions to the network. The more you
                    contribute, the more Crutox you mine. The app is also the
                    home for your Crutox account where you can stay tuned on the
                    network updates of the Crutox community. To start mining
                    Crutox, check in every 12 hours and hit the lightning
                    button. Once you are mining, you can boost your hourly rate
                    by inviting trusted friends and family to join the
                    community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default FAQ;
