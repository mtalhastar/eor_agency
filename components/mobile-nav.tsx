// MobileNav.tsx

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { navLinks } from "@/constants";
import Link from "next/link";

const font = Poppins({
  weight: "600",
  subsets: ["latin"],
});

const MobileNav = ({ pathname }: { pathname: string }) => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger asChild className="align-middle">
          <Image
            src="/menu.svg"
            alt="Menu"
            width={24}
            height={24}
            className="cursor-pointer mt-8"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row mt-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.route;

              return (
                <li
                  key={link.route}
                  className={`${
                    isActive && "text-green-500"
                  } flex-center p-medium-16 whitespace-nowrap`}
                >
                  <Link href={link.route}>{link.label}</Link>
                </li>
              );
            })}
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
