import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";

function Roadmap() {
  const CustomLeftArrow = ({ onClick }) => (
    <button onClick={() => onClick()} className="custom-left-arrow">
      {"<"}
    </button>
  );

  const CustomRightArrow = ({ onClick }) => (
    <button onClick={() => onClick()} className="custom-right-arrow">
      {">"}
    </button>
  );

  return (
    <div className="h-full pb-44 relative" id="Roadmap">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="flex flex-col justify-center items-center"
      >
        <p className="text-4xl font-[ethnocentric]">Roadmap</p>
        <div className="w-72 border-b-2 my-5" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="pl-16 max-[390px]:pl-12"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            superLargeDesktop: {
              breakpoint: { max: 4000, min: 3000 },
              items: 5,
              partialVisibilityGutter: 40,
            },
            desktop: {
              breakpoint: { max: 3000, min: 1325 },
              items: 3,
            },
            tablet: {
              breakpoint: { max: 1325, min: 885 },
              items: 2,
            },
            mobile: {
              breakpoint: { max: 885, min: 0 }, // Adjust these values as needed
              items: 1,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          <div className="p-4 w-96 shadow-[0_0_30px_0] bg-[#32143B] shadow-purple-400 rounded-xl my-10 max-[500px]:w-72">
            <div className="border-b-2 w-full mb-2">
              <p className="font-[ethnocentric] text-lg">Q2 2024</p>
            </div>

            <p className="text-center font-[ubuntu] text-[#949295]">
              Social Media Setup and App Launch
            </p>

            <div className="flex justify-center items-center mt-4">
              <div className="border-[3px] mb-20 border-[#263F5F] rounded-full p-2 mr-3">
                <div className="bg-[#8ECBDF] p-1 rounded-full" />
              </div>
              <p>
                Establish a strong presence on social media platforms, including
                Twitter, Facebook, Discord, and others relevant to our audience.
              </p>
            </div>

            <div className="flex justify-center items-center mt-4">
              <div className="border-[3px] mb-20 border-[#263F5F] rounded-full p-2 mr-3">
                <div className="bg-[#8ECBDF] p-1 rounded-full" />
              </div>
              <p>
                Develop a robust content strategy for social media, keeping our
                community updated on project progress and sharing Crutox
                insights.
              </p>
            </div>

            <div className="flex justify-center items-center mt-4">
              <div className="border-[3px] mb-8 border-[#263F5F] rounded-full p-2 mr-3">
                <div className="bg-[#8ECBDF] p-1 rounded-full" />
              </div>
              <p>
                Launch the Crutox mobile mining app, designed to enable users to
                mine Crutox on their mobile devices efficiently.
              </p>
            </div>

            <div className="flex justify-center items-center mt-4">
              <div className="border-[3px] mb-14 border-[#263F5F] rounded-full p-2 mr-3">
                <div className="bg-[#8ECBDF] p-1 rounded-full" />
              </div>
              <p>
                Promote the mobile mining app through our social media channels
                to attract users to our platform.
              </p>
            </div>
          </div>

          <div className="p-4 w-96 shadow-[0_0_30px_0] bg-[#32143B] shadow-purple-400 rounded-xl my-10 max-[500px]:w-72">
            <div className="border-b-2 w-full mb-2">
              <p className="font-[ethnocentric] text-lg">Q3 2024</p>
            </div>

            <p className="text-center font-[ubuntu] text-[#949295]">
              Blockchain Development and Mainnet Preparation
            </p>

            <div className="flex justify-center items-center mt-4">
              <div className="border-[3px] mb-5 border-[#263F5F] rounded-full p-2 mr-3">
                <div className="bg-[#8ECBDF] p-1 rounded-full" />
              </div>
              <p>
                Continue the development of the Crutox blockchain, focusing on
                coding, consensus mechanisms, and technical aspects.
              </p>
            </div>

            <div className="flex justify-center items-center mt-4">
              <div className="border-[3px] mb-[70px] border-[#263F5F] rounded-full p-2 mr-3">
                <div className="bg-[#8ECBDF] p-1 rounded-full" />
              </div>
              <p>
                Finalize the design and technical details of the blockchain,
                ensuring alignment with our project objectives and robust
                security.
              </p>
            </div>

            <div className="flex justify-center items-center mt-4">
              <div className="border-[3px] mb-10 border-[#263F5F] rounded-full p-2 mr-3">
                <div className="bg-[#8ECBDF] p-1 rounded-full" />
              </div>
              <p>
                Prepare for the mainnet launch, including initial testing,
                security audits, and vulnerability resolution.
              </p>
            </div>
          </div>

          <div className="p-4 w-96 shadow-[0_0_30px_0] bg-[#32143B] shadow-purple-400 rounded-xl my-10 max-[500px]:w-72">
            <div className="border-b-2 w-full mb-2">
              <p className="font-[ethnocentric] text-lg">Q4 2024</p>
            </div>

            <p className="text-center font-[ubuntu] text-[#949295]">
              Wallet and Exchange Development
            </p>

            <div className="flex justify-center items-center mt-4">
              <div className="border-[3px] mb-14 border-[#263F5F] rounded-full p-2 mr-3">
                <div className="bg-[#8ECBDF] p-1 rounded-full" />
              </div>
              <p>
                Concentrate on the development of the Crutox crypto wallet,
                emphasizing user-friendliness and robust security for Crutox and
                other cryptocurrencies.
              </p>
            </div>

            <div className="flex justify-center items-center mt-4">
              <div className="border-[3px] mb-14 border-[#263F5F] rounded-full p-2 mr-3">
                <div className="bg-[#8ECBDF] p-1 rounded-full" />
              </div>
              <p>
                Continue developing the Crutox exchange platform, enabling users
                to trade Crutox and potentially other cryptocurrencies with
                lowest fees ever.
              </p>
            </div>

            <p className="text-center font-[ubuntu] text-[#949295] mt-8">
              Exchange Launch and Marketing
            </p>

            <div className="flex justify-center items-center mt-4">
              <div className="border-[3px] mb-14 border-[#263F5F] rounded-full p-2 mr-3">
                <div className="bg-[#8ECBDF] p-1 rounded-full" />
              </div>
              <p>
                Launch the Crutox mainnet, allowing users to transfer and mine
                the coin.
              </p>
            </div>

            <div className="flex justify-center items-center mt-4">
              <div className="border-[3px] mb-14 border-[#263F5F] rounded-full p-2 mr-3">
                <div className="bg-[#8ECBDF] p-1 rounded-full" />
              </div>
              <p>
                Prepare the exchange for launch, addressing legal and technical
                requirements to ensure a secure and compliant platform.
              </p>
            </div>
          </div>

          <div className="p-4 w-96 shadow-[0_0_30px_0] bg-[#32143B] shadow-purple-400 rounded-xl my-10 max-[500px]:w-72">
            <div className="border-b-2 w-full mb-2">
              <p className="font-[ethnocentric] text-lg">Q1 2025</p>
            </div>

            <p className="text-center font-[ubuntu] text-[#949295]">
              Exchange Launch and Marketing
            </p>

            <div className="flex justify-center items-center mt-4">
              <div className="border-[3px] mb-8 border-[#263F5F] rounded-full p-2 mr-3">
                <div className="bg-[#8ECBDF] p-1 rounded-full" />
              </div>
              <p>
                Launch the Crutox exchange, enabling users to start trading the
                cryptocurrency.
              </p>
            </div>

            <div className="flex justify-center items-center mt-4">
              <div className="border-[3px] mb-14 border-[#263F5F] rounded-full p-2 mr-3">
                <div className="bg-[#8ECBDF] p-1 rounded-full" />
              </div>
              <p>
                Implement our marketing strategy to promote the exchange,
                attract traders, and build awareness within the cryptocurrency
                community.
              </p>
            </div>
            <p className="text-center font-[ubuntu] text-[#949295] mt-8">
              Exchange Launch and Marketing
            </p>

            <div className="flex justify-center items-center mt-4">
              <div className="border-[3px] mb-14 border-[#263F5F] rounded-full p-2 mr-3">
                <div className="bg-[#8ECBDF] p-1 rounded-full" />
              </div>
              <p>
                Continue building and engaging with the Crutox community on
                social media and other platforms.
              </p>
            </div>

            <div className="flex justify-center items-center mt-4">
              <div className="border-[3px] mb-14 border-[#263F5F] rounded-full p-2 mr-3">
                <div className="bg-[#8ECBDF] p-1 rounded-full" />
              </div>
              <p>
                Provide ongoing support, updates, and improvements to the
                exchange and wallet to maintain user satisfaction.
              </p>
            </div>
          </div>

          <div className="p-4 w-96 shadow-[0_0_30px_0] bg-[#32143B] shadow-purple-400 rounded-xl my-10 max-[500px]:w-72">
            <div className="border-b-2 w-full mb-2">
              <p className="font-[ethnocentric] text-lg">Q2 2025</p>
            </div>

            <p className="text-center font-[ubuntu] text-[#949295]">
              Legal Compliance and Expansion
            </p>

            <div className="flex justify-center items-center mt-4">
              <div className="border-[3px] mb-8 border-[#263F5F] rounded-full p-2 mr-3">
                <div className="bg-[#8ECBDF] p-1 rounded-full" />
              </div>
              <p>
                Ensure ongoing compliance with cryptocurrency regulations and
                adapt as necessary to changing legal requirements.
              </p>
            </div>

            <div className="flex justify-center items-center mt-4">
              <div className="border-[3px] mb-14 border-[#263F5F] rounded-full p-2 mr-3">
                <div className="bg-[#8ECBDF] p-1 rounded-full" />
              </div>
              <p>
                Explore expansion opportunities, such as forming partnerships,
                introducing additional features, and expanding into new markets.
              </p>
            </div>
          </div>
        </Carousel>
      </motion.div>
    </div>
  );
}

export default Roadmap;
