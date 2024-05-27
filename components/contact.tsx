import Image from "next/image";

const Contact = () => {
  return (
    <div className="bg-gray-200/80 text-white">
      <div className="flex px-10 py-10 lg:space-x-10 md:space-x-10 sm:space-x-6 space-x-0 lg:flex-row md:flex-row sm:flex-row flex-col items-center justify-center">
        <div className="w-full lg:mb-0 md:mb-0 sm:mb-0 mb-10 lg:py-24 md:py-14 sm:py-10 py-10 px-10 bg-green-600 rounded-lg p-8 flex flex-col">
          <h1 className="lg:text-5xl md:text-3xl sm:text-3xl text-2xl font-bold">
            Milan van den Bosch
          </h1>
          <p className="text-xl leading-8 font-bold mt-5">+31 6 37 35 02 85</p>
          <p className="text-xl leading-8 font-bold mt-2">milan@thisworks.nl</p>
        </div>
        <div className="w-full bg-[#116436] rounded-lg flex px-7 pt-8">
          <div className="flex flex-col items-start">
            <h1 className="lg:text-[26px] md:text-[20px] sm:text-[20px] text-[16px] font-bold pb-5">
              FOLLOW US ON LINKEDIN
            </h1>
            <Image src="/linkedin.svg" alt="Linkedin" width={70} height={70} />
          </div>
          <div className="ml-7">
            <Image
              src="/eor_person.png"
              alt="Hero"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
