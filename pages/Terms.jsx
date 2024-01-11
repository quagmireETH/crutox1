import React from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Terms() {
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
          <p className="text-4xl font-[ethnocentric] text-center">Terms & Conditions</p>
          <div className="w-72 border-b-2 my-5" />
        </motion.div>
      </div>

      <div className="mt-24 mb-44 flex flex-col justify-center items-center">
        <div className="mb-5 w-5/6">
          <p className="font-[ethnocentric] text-2xl">Terms & Conditions</p>
          <p className="font-[ubuntu] ml-6">
            These Terms and Conditions of Use (&ldquo;Terms&ldquo;) govern your access and
            use of the Crutox mobile mining app (&ldquo;App&ldquo;) and the associated
            services offered therein. By accessing or using the App, you agree
            to be bound by these Terms. If you do not agree to these Terms,
            please do not use the App.
          </p>
        </div>
        <div className="w-3/4 border-b-2 my-5" />
        <div className="my-5 w-5/6">
          <p className="font-[ethnocentric] text-2xl">Acceptance of Terms</p>
          <p className="font-[ubuntu] ml-6">
            By using the App, you acknowledge that you have read, understood,
            and agree to be bound by these Terms and any additional policies or
            guidelines that may be provided by Crutox from time to time.
          </p>
        </div>
        <div className="w-3/4 border-b-2 my-5" />
        <div className="my-5 w-5/6">
          <p className="font-[ethnocentric] text-2xl">Eligibility</p>
          <p className="font-[ubuntu] ml-6">
            You must be at least 18 years old to use the App. By using the App,
            you represent and warrant that you are of legal age to form a
            binding contract with Crutox and meet all eligibility requirements.
          </p>
        </div>
        <div className="w-3/4 border-b-2 my-5" />
        <div className="my-5 w-5/6">
          <p className="font-[ethnocentric] text-2xl">User Accounts</p>
          <p className="font-[ubuntu] ml-6">
            To access certain features of the App, you may be required to
            register for an account. You are responsible for maintaining the
            confidentiality of your account and password. You agree to accept
            responsibility for all activities that occur under your account.
          </p>
        </div>
        <div className="w-3/4 border-b-2 my-5" />
        <div className="my-5 w-5/6">
          <p className="font-[ethnocentric] text-2xl">Privacy</p>
          <p className="font-[ubuntu] ml-6">
            Your use of the App is also governed by our Privacy Policy, which
            outlines how we collect, use, and disclose your personal
            information. By using the App, you consent to our collection and use
            of your personal data as outlined in the Privacy Policy.
          </p>
        </div>
        <div className="w-3/4 border-b-2 my-5" />
        <div className="my-5 w-5/6">
          <p className="font-[ethnocentric] text-2xl">Intellectual Property</p>
          <p className="font-[ubuntu] ml-6">
            The App, including all content, features, and functionality, is
            owned by Crutox and protected by intellectual property laws. You may
            not use the App or its content for any purpose without our express
            written consent.
          </p>
        </div>
        <div className="w-3/4 border-b-2 my-5" />
        <div className="my-5 w-5/6">
          <p className="font-[ethnocentric] text-2xl">Prohibited Activities</p>
          <p className="font-[ubuntu] ml-6 mb-2">
            You agree not to engage in any of the following activities :
          </p>
          <li className="ml-6 my-2 font-[ubuntu]">Violating any applicable laws or regulations.</li>
          <li className="ml-6 my-2 font-[ubuntu]">
            Attempting to interfere with or disrupt the security, functionality,
            or availability of the App.
          </li>
          <li className="ml-6 my-2 font-[ubuntu]">Impersonating any person or entity.</li>
          <li className="ml-6 my-2 font-[ubuntu]">
            Collecting or storing personal data of other users without their
            consent.
          </li>
          <li className="ml-6 my-2 font-[ubuntu]">Using the App for any illegal or unauthorized purpose.</li>
        </div>
        <div className="w-3/4 border-b-2 my-5" />
        <div className="my-5 w-5/6">
          <p className="font-[ethnocentric] text-2xl">Termination</p>
          <p className="font-[ubuntu] ml-6">
            Crutox reserves the right to terminate or suspend your account and
            access to the App for any reason, without prior notice or liability.
          </p>
        </div>
        <div className="w-3/4 border-b-2 my-5" />
        <div className="my-5 w-5/6">
          <p className="font-[ethnocentric] text-2xl">
            Disclaimer of Warranties
          </p>
          <p className="font-[ubuntu] ml-6">
            The App is provided &ldquo;as is&ldquo; and &ldquo;as available&ldquo; without any
            warranties, either expressed or implied. Crutox makes no
            representations or warranties regarding the accuracy, availability,
            or reliability of the App.
          </p>
        </div>
        <div className="w-3/4 border-b-2 my-5" />
        <div className="my-5 w-5/6">
          <p className="font-[ethnocentric] text-2xl">
            Limitation of Liability
          </p>
          <p className="font-[ubuntu] ml-6">
            Crutox and its affiliates will not be liable for any indirect,
            incidental, special, or consequential damages arising out of or in
            any way connected with your use of the App.
          </p>
        </div>
        <div className="w-3/4 border-b-2 my-5" />
        <div className="my-5 w-5/6">
          <p className="font-[ethnocentric] text-2xl">Changes to Terms</p>
          <p className="font-[ubuntu] ml-6">
            Crutox reserves the right to update or modify these Terms at any
            time without notice. It is your responsibility to review these Terms
            periodically. Your continued use of the App after any changes
            signifies your acceptance of the modified terms.
          </p>
        </div>
        <div className="w-3/4 border-b-2 my-5" />
        <div className="my-5 w-5/6">
          <p className="font-[ethnocentric] text-2xl">Governing Law</p>
          <p className="font-[ubuntu] ml-6">
            These Terms are governed by and construed in accordance with the
            laws of [Your Jurisdiction], without regard to its conflict of law
            principles.
          </p>
        </div>
        <div className="w-3/4 border-b-2 my-5" />
        <div className="mt-5 w-5/6">
          <p className="font-[ethnocentric] text-2xl">Contact Information</p>
          <p className="font-[ubuntu] ml-6">
            For any questions or concerns regarding these Terms, please contact
            us at support@crutox.com.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Terms;
