import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
    <div className="h-full pb-44">
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl font-[ethnocentric]">
          Roadmap
        </p>
        <div className="w-72 border-b-2 my-5" />
      </div>

      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="pl-16"
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
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        <div className="p-4 w-96 shadow-lg shadow-purple-500 rounded-xl my-10">
          <div className="border-b-2 w-full mb-2">
            <p className="font-[ethnocentric] text-lg">Q1 2024</p>
          </div>

          <p className="text-center font-[ubuntu] text-[#949295]">
            Blockchain Development and Mainnet Preparation
          </p>

          <div className="flex justify-center items-center mt-4">
            <div className="border-[3px] mb-14 border-[#263F5F] rounded-full p-2 mr-3">
              <div className="bg-[#8ECBDF] p-1 rounded-full" />
            </div>
            <p>
              Continue the development of the Crutox blockchain, focusing on
              coding, consensus mechanisms, and technical aspects.
            </p>
          </div>

          <div className="flex justify-center items-center mt-4">
            <div className="border-[3px] mb-14 border-[#263F5F] rounded-full p-2 mr-3">
              <div className="bg-[#8ECBDF] p-1 rounded-full" />
            </div>
            <p>
              Continue the development of the Crutox blockchain, focusing on
              coding, consensus mechanisms, and technical aspects.
            </p>
          </div>
          <div className="flex justify-center items-center mt-4">
            <div className="border-[3px] mb-14 border-[#263F5F] rounded-full p-2 mr-3">
              <div className="bg-[#8ECBDF] p-1 rounded-full" />
            </div>
            <p>
              Continue the development of the Crutox blockchain, focusing on
              coding, consensus mechanisms, and technical aspects.
            </p>
          </div>
        </div>

        <div className="p-4 w-96 shadow-lg shadow-purple-500 rounded-xl my-10">
          <div className="border-b-2 w-full mb-2">
            <p className="font-[ethnocentric] text-lg">Q2 2024</p>
          </div>

          <p className="text-center font-[ubuntu] text-[#949295]">
            Wallet and Exchange Development
          </p>

          <div className="flex justify-center items-center mt-4">
            <div className="border-[3px] mb-20 border-[#263F5F] rounded-full p-2 mr-3">
              <div className="bg-[#8ECBDF] p-1 rounded-full" />
            </div>
            <p>
              Concentrate on the development of the Crutox crypto wallet,
              emphasizing user-friendliness and robust security for Crutox and
              other cryptocurrencies.
            </p>
          </div>

          <div className="flex justify-center items-center mt-4">
            <div className="border-[3px] mb-20 border-[#263F5F] rounded-full p-2 mr-3">
              <div className="bg-[#8ECBDF] p-1 rounded-full" />
            </div>
            <p>
              Continue developing the Crutox exchange platform, enabling users
              to trade Crutox and potentially other cryptocurrencies with lowest
              fees ever.
            </p>
          </div>
          <p className="text-center font-[ubuntu] text-[#949295] mt-8">
            Mainnet Launch and Exchange Setup
          </p>

          <div className="flex justify-center items-center mt-4">
            <div className="border-[3px] mb-8 border-[#263F5F] rounded-full p-2 mr-3">
              <div className="bg-[#8ECBDF] p-1 rounded-full" />
            </div>
            <p>
              Launch the Crutox mainnet, allowing users to transfer and mine the
              coin.
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

        <div className="p-4 w-96 shadow-lg shadow-purple-500 rounded-xl my-10">
          <div className="border-b-2 w-full mb-2">
            <p className="font-[ethnocentric] text-lg">Q3 2024</p>
          </div>

          <p className="text-center font-[ubuntu] text-[#949295]">
            Exchange Launch and Marketing
          </p>

          <div className="flex justify-center items-center mt-4">
            <div className="border-[3px] mb-14 border-[#263F5F] rounded-full p-2 mr-3">
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
              Implement our marketing strategy to promote the exchange, attract
              traders, and build awareness within the cryptocurrency community.
            </p>
          </div>
          <p className="text-center font-[ubuntu] text-[#949295] mt-8">
            Post-Launch Activities and Community Building
          </p>

          <div className="flex justify-center items-center mt-4">
            <div className="border-[3px] mb-8 border-[#263F5F] rounded-full p-2 mr-3">
              <div className="bg-[#8ECBDF] p-1 rounded-full" />
            </div>
            <p>
              Continue building and engaging with the Crutox community on social
              media and other platforms.
            </p>
          </div>

          <div className="flex justify-center items-center mt-4">
            <div className="border-[3px] mb-14 border-[#263F5F] rounded-full p-2 mr-3">
              <div className="bg-[#8ECBDF] p-1 rounded-full" />
            </div>
            <p>
              Provide ongoing support, updates, and improvements to the exchange
              and wallet to maintain user satisfaction.
            </p>
          </div>
        </div>

        <div className="p-4 w-96 shadow-lg shadow-purple-500 rounded-xl my-10">
          <div className="border-b-2 w-full mb-2">
            <p className="font-[ethnocentric] text-lg">Q4 2024</p>
          </div>

          <p className="text-center font-[ubuntu] text-[#949295]">
            Legal Compliance and Expansion
          </p>

          <div className="flex justify-center items-center mt-4">
            <div className="border-[3px] mb-14 border-[#263F5F] rounded-full p-2 mr-3">
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
          <div className="flex justify-center items-center mt-4">
            <div className="border-[3px] mb-14 border-[#263F5F] rounded-full p-2 mr-3">
              <div className="bg-[#8ECBDF] p-1 rounded-full" />
            </div>
            <p>
              This roadmap outlines our strategic approach for the next year,
              showcasing our dedication to the Crutox project and our commitment
              to delivering value to our community.
            </p>
          </div>

          <div className="flex justify-center items-center mt-4">
            <div className="border-[3px] mb-14 border-[#263F5F] rounded-full p-2 mr-3">
              <div className="bg-[#8ECBDF] p-1 rounded-full" />
            </div>
            <p>
              Stay tuned for updates and milestones as we continue to develop
              and grow Crutox!
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Roadmap;
