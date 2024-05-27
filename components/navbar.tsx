import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./mobile-nav";

const Navbar = () => {
  const pathname = "/";

  return (
    <div className="sticky top-0 z-50 bg-white lg:px-12 md:px-12 sm:px-12 px-3 shadow-md flex justify-between">
      <div className="mt-3">
        <Image
          src="/eor_agency.png"
          alt="EOR Agency"
          width={200}
          height={200}
        />
      </div>
      {/* <div className="py-9 space-x-10 font-semibold hidden sm:flex">
        <ul className="flex w-full lg:text-lg md:text-[16px] sm:text-[12px] flex-col items-start lg:gap-10 md:gap-5 sm:gap-5 lg:flex-row md:flex-row sm:flex-row">
          {navLinks.map((link) => {
            const isActive = pathname === link.route;

            return (
              <li
                key={link.route}
                className={`${
                  isActive &&
                  "text-green-600 hover:text-green-700 hover:scale-110 transition-transform duration-200"
                } flex-center p-medium-16 whitespace-nowrap`}
              >
                <Link href={link.route}>{link.label}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <MobileNav pathname={pathname} /> */}
    </div>
  );
};

export default Navbar;
