"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

// other imports
// import { UserButton } from "@clerk/nextjs";

function NavBar() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between p-3 px-5 shadow-sm border-b-[1px]">
      <Image src="/logo.png" alt="logo" height={100} width={100} />
      <div className="hidden md:flex gap-5">
        <h2
          className="hover:bg-yellow-500 hover:text-white px-3 cursor-pointer p-2 rounded-full"
          onClick={() => router.push("/")}
        >
          Home
        </h2>
        <h2
          className="hover:bg-yellow-500 hover:text-white px-3 cursor-pointer p-2 rounded-full"
          onClick={() => router.push("/exploreParts")}
        >
          Explore
        </h2>
        <h2
          className="hover:bg-yellow-500 hover:text-white px-3 cursor-pointer p-2 rounded-full"
          onClick={() => router.push("/contactUs")}
        >
          Contact Us
        </h2>
      </div>
      {/* <UserButton afterSignOutUrl="/" /> */}
    </div>
  );
}

export default NavBar;
