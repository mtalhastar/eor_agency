'use client'

import Image from "next/image";
import { Input } from "./ui/input";
import { useState } from "react";
import toast from "react-hot-toast";

const NewsLetter = () => {
  const [companyName, setCompanyName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  
  const sendEmail = async () => {
    try {
      const data = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyName: companyName,
          email: email,
        }),
      });
      console.log(data);
      toast.success("Email sent successfully");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error sending email");
    }
  };

  return (
    <div id="newsletter-section" className="relative flex items-center">
      {/* Blue Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#116436]" />

      {/* Content Container */}
      <div className="relative w-full flex lg:flex-row md:flex-row sm:flex-row flex-col justify-between px-8 lg:py-0 md:py-0 sm:py-0 py-10 z-10">
        {/* Image Section */}
        <div className="lg:w-1/2 sm:w-full flex justify-center items-center lg:pr-8 md:pr-5 sm:pr-4 pr-0">
          <Image src="/eor_person.png" alt="Hero" width={450} height={450} />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 md:w-full lg:text-start md:text-start sm:text-start text-center sm:w-full w-full flex flex-col justify-center items-start text-white">
          <h1 className="text-5xl  leading-tight font-bold mb-4">
            Want to learn more?
          </h1>
          <p className="text-sm text-gray-200 mb-4">
            Reach out today to book a free consultation with our expert team.
            Get helpful insights and start your journey to success.
          </p>
          <div className="flex flex-row w-full space-x-5 lg:flex-row lg:space-x-5 md:space-x-5 sm:space-x-5 md:flex-row sm:flex-row">
            <div className="space-y-3 mt-6">
              <label htmlFor="email">Company name</label>
              <Input
                type="text"
                name="company-name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full px-3 py-2 border bg-gray-100 text-black rounded-lg placeholder-gray-900 focus:outline-none border-gray-400"
              />
            </div>

            <div className="space-y-3 mt-6">
              <label htmlFor="email">Email address</label>
              <Input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border bg-gray-100 text-black rounded-lg placeholder-gray-900 focus:outline-none border-gray-400"
              />
            </div>
          </div>
          <p className="mt-8">
            By submitting this form you agree to the{" "}
            <span className="text-green-500">privacy statement.</span>
          </p>
          <button onClick={sendEmail} className="uppercase mt-8 py-2 px-16 bg-green-600 hover:bg-green-700 transition duration-100 ease-in rounded-md text-white font-bold lg:w-[200px] md:w-[200px] sm:[200px] w-full">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
