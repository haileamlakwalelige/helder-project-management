import Image from "next/image";
import React from "react";
import logo from "../../public/Helder Footer.webp";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="shadow-2xl shadow-gray-200 px-10 py-3">
      <div className="flex justify-between items-center">
        <div>
          <Image src={logo} alt="Logo Of Helder" height={70} width={70} />
        </div>
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
