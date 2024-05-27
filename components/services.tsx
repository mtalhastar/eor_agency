import { BookUser, HandCoins, ScrollText } from "lucide-react";
import Image from "next/image";

const Services = () => {
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-center py-10">
        Services we offer
      </h1>
      <div className="flex pb-10 px-20 lg:space-x-24 md:space-x-14 sm:space-x-10 space-x-0 lg:flex-row md:flex-row sm:flex-row flex-col items-center justify-center">
        <div className="w-full text-center flex space-y-6 flex-col items-center justify-center">
          <BookUser size={80} strokeWidth='1px' color="green" />
          <h1 className="font-bold text-2xl">Employer of record services</h1>
          <p className="text-sm leading-7">
            Utilize our Employer of Record solutions to legally hire
            international staff without the requirement of establishing a
            foreign entity.
          </p>
        </div>
        <div className="w-full text-center flex space-y-6 flex-col items-center justify-center">
          <HandCoins size={80} strokeWidth='1px' color="green" />
          <h1 className="font-bold text-2xl">Payroll services</h1>
          <p className="text-sm leading-7">
            We offer assistance in ensuring compliant and timely payment for
            your staff members. Leveraging our expertise and top-notch software,
            we guarantee efficient completion of the task.
          </p>
        </div>
        <div className="w-full text-center flex space-y-6 flex-col items-center justify-center">
          <ScrollText size={80} strokeWidth='1px' color="green" />
          <h1 className="font-bold text-2xl">Work permits</h1>
          <p className="text-sm leading-7">
            Do you need assistance in obtaining work permits for your
            international staff members? We have fast-track solutions as a
            sponsor at the local authorities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
