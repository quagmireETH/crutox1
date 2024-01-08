import React from "react";
import { motion } from "framer-motion";

function Services() {
  return (
    <div className="h-full pb-44" id="Service">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="flex  flex-col justify-center items-center"
      >
        <p className="text-4xl font-[ethnocentric]">OUR SERVICES</p>
        <div className="w-72 border-b-2 my-5" />
        <p className="font-[ubuntu] text-lg text-[#949295] text-center">
          Crutox isn&apos;t just another cryptocurrency app. <br /> Here&apos;s
          what sets us apart!
        </p>
      </motion.div>

      <div className="mt-10 flex justify-center items-center">
        <div>
          <div className="flex justify-evenly items-center mt-16 max-[600px]:flex-col">
            <motion.div
              initial={{ opacity: 0, y: "-20%" }}
              whileInView={{ opacity: 1, y: "0%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="flex justify-start items-center mb-10 w-[35%] bg-black bg-opacity-25 p-2 rounded-xl max-[600px]:w-3/4"
            >
              <div className="border-[3px] mb-[85px] border-[#263F5F] rounded-full p-2 mr-3">
                <div className="bg-[#8ECBDF] p-1 rounded-full" />
              </div>
              <p className="font-[ubuntu] text-lg text-[#949295]">
                <span className="text-white font-[ethnocentric] text-xl">
                  Mobile Mining
                </span>{" "}
                <br /> Our app lets you mine cryptocurrency effortlessly. No
                expensive equipment or technical expertise required. Simply use
                your mobile device and start earning.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: "-20%" }}
              whileInView={{ opacity: 1, y: "0%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="flex justify-start items-center mb-10 w-[35%] bg-black bg-opacity-25 p-2 rounded-xl max-[600px]:w-3/4"
            >
              <div className="border-[3px] mb-[85px] border-[#263F5F] rounded-full p-2 mr-3">
                <div className="bg-[#8ECBDF] p-1 rounded-full" />
              </div>
              <p className="font-[ubuntu] text-lg text-[#949295]">
                <span className="text-white font-[ethnocentric] text-xl">
                  User-Focused
                </span>{" "}
                <br /> We put our users at the forefront. Our intuitive app
                design, regular updates, and responsive support team ensure you
                have the best experience.
              </p>
            </motion.div>
          </div>

          <div className="flex justify-evenly items-center mt-6 max-[600px]:flex-col">
            <motion.div
              initial={{ opacity: 0, y: "-20%" }}
              whileInView={{ opacity: 1, y: "0%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="flex justify-start items-center mb-10 w-[35%] bg-black bg-opacity-25 p-2 rounded-xl max-[600px]:w-3/4"
            >
              <div className="border-[3px] mb-[55px] border-[#263F5F] rounded-full p-2 mr-3">
                <div className="bg-[#8ECBDF] p-1 rounded-full" />
              </div>
              <p className="font-[ubuntu] text-lg text-[#949295]">
                <span className="text-white font-[ethnocentric] text-xl">
                  Innovation
                </span>{" "}
                <br /> Crutox is at the forefront of blockchain technology,
                bringing you the latest advancements in the crypto world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: "-20%" }}
              whileInView={{ opacity: 1, y: "0%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="flex justify-start items-center mb-10 w-[35%] bg-black bg-opacity-25 p-2 rounded-xl max-[600px]:w-3/4"
            >
              <div className="border-[3px] mb-14 border-[#263F5F] rounded-full p-2 mr-3">
                <div className="bg-[#8ECBDF] p-1 rounded-full" />
              </div>
              <p className="font-[ubuntu] text-lg text-[#949295]">
                <span className="text-white font-[ethnocentric] text-xl">
                  Security
                </span>{" "}
                <br /> Your security is our priority. We employ robust security
                measures to keep your earnings safe.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
