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
          <p className="text-4xl font-[ethnocentric] text-center">
            Privacy Policy
          </p>
          <div className="w-72 border-b-2 my-5" />
        </motion.div>
      </div>

      <div className="mt-24 mb-44 flex flex-col justify-center items-center">
        <div className="mb-5 w-5/6">
          <p className="font-[ethnocentric] text-2xl">
            1. Information We Collect
          </p>
          <p className="font-[ubuntu] ml-6">
            We collect personal information through various means, including :
          </p>
        </div>
        <div className="w-3/4 border-b-2 my-5" />
        <div className="my-5 w-5/6 ml-14">
          <p className="font-[ethnocentric] text-2xl">
            1.1 Information You Provide:
          </p>
          <p className="font-[ubuntu] ml-6">
            Contact and identity information, such as your name, phone number,
            email address. Feedback and correspondence, including survey
            responses, customer support inquiries, and issue reports. Marketing
            information, including your preferences for marketing communications
            and your interaction with ads.
          </p>
        </div>
        <div className="w-3/4 border-b-2 my-5" />
        <div className="my-5 w-5/6 ml-14">
          <p className="font-[ethnocentric] text-2xl">
            1.2 Know Your Customer (KYC) Verification Information:
          </p>
          <p className="font-[ubuntu] ml-6">
            In compliance with industry regulatory standards and government
            orders related to Anti-Money Laundering (AML), Know-Your-Client
            (KYC), and Counter-Terrorist Financing (CTF), we collect personal
            information such as identity documents, proof of address, source of
            fund declaration, and more. This KYC data is used exclusively for
            verifying the identity of Crutox members.
          </p>
        </div>
        <div className="w-3/4 border-b-2 my-5" />
        <div className="my-5 w-5/6 ml-14">
          <p className="font-[ethnocentric] text-2xl">
            1.3 Information We Collect from Other Sources:
          </p>
          <p className="font-[ubuntu] ml-6">
            We may obtain information from third-party sources, including other
            users and companies. Information shared by other users about you
            when they use our services may also be collected.
          </p>
        </div>
        <div className="w-3/4 border-b-2 my-5" />
        <div className="my-5 w-5/6 ml-14">
          <p className="font-[ethnocentric] text-2xl">
            1.4 Information Automatically Collected:
          </p>
          <p className="font-[ubuntu] ml-6">
            When you use our services, we collect information related to your
            usage, including mining activity, security circle additions, and
            more. Device-specific information, such as your device's hardware
            model, operating system version, advertising identifier, and unique
            device identifiers. Location information, which may be collected
            with your consent using methods like GPS, wireless networks, and
            sensors. Log information about your usage of our website and
            services, including pages viewed, access times, and IP addresses.
          </p>
        </div>
        <div className="w-3/4 border-b-2 my-5" />
        <div className="my-5 w-5/6">
          <p className="font-[ethnocentric] text-2xl">
            2. How We Use Your Information
          </p>
          <p className="font-[ubuntu] ml-6">
            We use the collected information for various purposes, including:
          </p>
        </div>
        <div className="w-3/4 border-b-2 my-5" />
        <div className="my-5 w-5/6 ml-14">
          <p className="font-[ethnocentric] text-2xl">2.1 Service Provision:</p>
          <p className="font-[ubuntu] ml-6 mb-2">
            To develop, operate, improve, deliver, and maintain our services. To
            communicate with you, send confirmations, technical notices,
            updates, and support messages. To monitor and analyze usage,
            personalize content, and enhance user experience. To enhance the
            safety and security of our services. To verify your identity and
            protect against fraudulent or unauthorized activity. To use
            information collected through cookies and similar technologies to
            improve our services.
          </p>
        </div>
        <div className="w-3/4 border-b-2 my-5" />
        <div className="my-5 w-5/6 ml-14">
          <p className="font-[ethnocentric] text-2xl">
            2.2 Compliance and Law Enforcement:
          </p>
          <p className="font-[ubuntu] ml-6">
            We may use your personal information to comply with applicable laws
            and legal processes, including responding to subpoenas and
            government requests.
          </p>
        </div>
        <div className="w-3/4 border-b-2 my-5" />
        <div className="my-5 w-5/6 ml-14">
          <p className="font-[ethnocentric] text-2xl">
            2.3 Optimization and User Support:
          </p>
          <p className="font-[ubuntu] ml-6">
            To optimize the user experience and respond to user inquiries or
            reports. To fulfill your specific requests, such as opting into
            third-party marketing communications.
          </p>
        </div>
        <div className="w-3/4 border-b-2 my-5" />
        <div className="my-5 w-5/6">
          <p className="font-[ethnocentric] text-2xl">
            3. Sharing of Personal Information
          </p>
          <p className="font-[ubuntu] ml-6">
            We do not share or sell your personal information with organizations
            outside of Crutox without your explicit consent, except in the
            following cases:
          </p>
        </div>
        <div className="w-3/4 border-b-2 my-5" />
        <div className="my-5 w-5/6 ml-14">
          <p className="font-[ethnocentric] text-2xl">3.1 Affiliates:</p>
          <p className="font-[ubuntu] ml-6 mb-2">
            We may disclose your information to our subsidiaries and corporate
            affiliates for purposes consistent with this Privacy Policy.
          </p>
        </div>
        <div className="w-3/4 border-b-2 my-5" />
        <div className="my-5 w-5/6 ml-14">
          <p className="font-[ethnocentric] text-2xl">
            3.2 Business Transfers:
          </p>
          <p className="font-[ubuntu] ml-6 mb-2">
            We may share personal information in connection with business deals
            such as mergers, acquisitions, or asset sales.
          </p>
        </div>
        <div className="w-3/4 border-b-2 my-5" />
        <div className="my-5 w-5/6 ml-14">
          <p className="font-[ethnocentric] text-2xl">
            3.3 Compliance and Safety:
          </p>
          <p className="font-[ubuntu] ml-6 mb-2">
            We may share personal information to comply with legal requirements,
            protect safety, or enforce our terms of service.
          </p>
        </div>
        <div className="w-3/4 border-b-2 my-5" />
        <div className="my-5 w-5/6 ml-14">
          <p className="font-[ethnocentric] text-2xl">3.4 Service Providers:</p>
          <p className="font-[ubuntu] ml-6 mb-2">
            We may share information with third parties who help us provide our
            services, including customer support, hosting, email delivery,
            database management, and KYC verification.
          </p>
        </div>
        <div className="w-3/4 border-b-2 my-5" />
        <div className="my-5 w-5/6 ml-14">
          <p className="font-[ethnocentric] text-2xl">3.5 User Consent:</p>
          <p className="font-[ubuntu] ml-6 mb-2">
            We may share your personal information with other companies or
            entities if you provide your explicit consent.
          </p>
        </div>
        <div className="w-3/4 border-b-2 my-5" />
        <div className="my-5 w-5/6">
          <p className="font-[ethnocentric] text-2xl">
            4. How Information Is Secured
          </p>
          <p className="font-[ubuntu] ml-6">
            We employ industry-standard security measures to protect your
            information, but no method of data transmission or storage can be
            guaranteed as completely secure. You are responsible for maintaining
            the security of your authentication information. We may suspend your
            use of our services if a security breach is suspected.
          </p>
        </div>
        <div className="w-3/4 border-b-2 my-5" />
        <div className="my-5 w-5/6">
          <p className="font-[ethnocentric] text-2xl">
            5. Information Choices and Changes
          </p>
          <p className="font-[ubuntu] ml-6">
            You have rights regarding your personal information, including the
            right to access, correct, delete, or restrict its use. You can
            withdraw your consent for the collection, processing, and transfer
            of your data, but this may affect our ability to provide certain
            services. To exercise your rights or submit a complaint, contact us
            through [contact information].
          </p>
        </div>
        <div className="w-3/4 border-b-2 my-5" />
        <div className="my-5 w-5/6">
          <p className="font-[ethnocentric] text-2xl">6. Cookies Policy</p>
          <p className="font-[ubuntu] ml-6">
            We use cookies and similar technologies to enhance your browsing
            experience. For detailed information about our use of cookies, refer
            to our Cookies Policy.
          </p>
        </div>
        <div className="w-3/4 border-b-2 my-5" />
        <div className="my-5 w-5/6">
          <p className="font-[ethnocentric] text-2xl">
            7. Updates to this Privacy Policy
          </p>
          <p className="font-[ubuntu] ml-6">
            This Privacy Policy is subject to change. We will notify you of
            substantial changes by posting a prominent notice on our website or
            by sending you an email notification.
          </p>
        </div>
        <div className="w-3/4 border-b-2 my-5" />
        <div className="my-5 w-5/6">
          <p className="font-[ethnocentric] text-2xl">8. Contact Us</p>
          <p className="font-[ubuntu] ml-6">
            If you have any questions or concerns regarding this Privacy Policy
            or your personal information, please contact us at
            support@crutox.com.
          </p>
        </div>
        <div className="w-3/4 border-b-2 my-5" />

        <div className="w-5/6 mt-10">
          <p className="font-[ubuntu] text-lg">
            By using our services, you accept this Privacy Policy and consent to
            the collection, storage, use, and sharing of your personal
            information as described herein. If you do not agree with this
            policy, please do not use our services.
          </p>
          <p className="font-[ubuntu] italic mt-4 text-lg">Team Crutox</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Terms;
