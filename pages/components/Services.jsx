import React from "react";

function Services() {
  return (
    <div className="h-full pb-28">
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl font-[ethnocentric]">OUR SERVICES</p>
        <div className="w-72 border-b-2 my-5" />
        <p className="font-[ubuntu] text-lg text-[#949295] text-center">
          Crutox isn't just another cryptocurrency app. <br /> Here's what sets
          us apart!
        </p>
      </div>

      <div className="mt-10 flex justify-center items-center">
        <div>
          <div className="flex justify-evenly items-center mt-16">
            <div className="flex justify-start items-center mb-10 w-[35%]">
              <div className="border-[3px] mb-[85px] border-[#263F5F] rounded-full p-2 mr-3">
                <div className="bg-[#8ECBDF] p-1 rounded-full" />
              </div>
              <p className="font-[ubuntu] text-lg text-[#949295]">
                <span className="text-white font-[ethnocentric] text-xl">Mobile Mining</span> <br /> Our app
                lets you mine cryptocurrency effortlessly. No expensive
                equipment or technical expertise required. Simply use your
                mobile device and start earning.
              </p>
            </div>

            <div className="flex justify-start items-center mb-10 w-[35%]">
              <div className="border-[3px] mb-[85px] border-[#263F5F] rounded-full p-2 mr-3">
                <div className="bg-[#8ECBDF] p-1 rounded-full" />
              </div>
              <p className="font-[ubuntu] text-lg text-[#949295]">
                <span className="text-white font-[ethnocentric] text-xl">User-Focused</span> <br /> We put
                our users at the forefront. Our intuitive app design, regular
                updates, and responsive support team ensure you have the best
                experience.
              </p>
            </div>
          </div>
          <div className="flex justify-evenly items-center">
            <div className="flex justify-start items-center mb-10 w-[35%]">
              <div className="border-[3px] mb-[85px] border-[#263F5F] rounded-full p-2 mr-3">
                <div className="bg-[#8ECBDF] p-1 rounded-full" />
              </div>
              <p className="font-[ubuntu] text-lg text-[#949295]">
                <span className="text-white font-[ethnocentric] text-xl">Innovation</span> <br /> Crutox is
                at the forefront of blockchain technology, bringing you the
                latest advancements in the crypto world.
              </p>
            </div>

            <div className="flex justify-start items-center mb-10 w-[35%]">
              <div className="border-[3px] mb-16 border-[#263F5F] rounded-full p-2 mr-3">
                <div className="bg-[#8ECBDF] p-1 rounded-full" />
              </div>
              <p className="font-[ubuntu] text-lg text-[#949295]">
                <span className="text-white font-[ethnocentric] text-xl">Security</span> <br /> Your
                security is our priority. We employ robust security measures to
                keep your earnings safe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
