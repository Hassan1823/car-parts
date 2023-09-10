'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from 'next/navigation';


const partsLink = [
  {
    src: "https://toyota-img.amayama.com/imgjp/EM/271160/848977.png",
    desc: "Switch & relay & computer",
  },
  {
    src: "https://toyota-img.amayama.com/imgjp/EM/271160/848972B.png",
    desc: "Electronic fuel injection system",
  },
  {
    src: "https://toyota-img.amayama.com/imgjp/EM/271160/848877.png",
    desc: "Overdrive & electronic controlled transmission",
  },
  {
    src: "https://toyota-img.amayama.com/imgjp/EM/271160/848985B.png",
    desc: "Abs & vsc",
  },
  {
    src: "https://toyota-img.amayama.com/imgjp/EM/271160/848887B.png",
    desc: "Overdrive & electronic controlled transmission",
  },
  {
    src: "https://toyota-img.amayama.com/imgjp/EM/271160/84B419.png",
    desc: "Overdrive & electronic controlled transmission",
  },
  {
    src: "https://toyota-img.amayama.com/imgjp/EM/271160/864229A.png",
    desc: "Overdrive & electronic controlled transmission",
  },
  {
    src: "https://toyota-img.amayama.com/imgjp/EM/271160/879427B.png",
    desc: "Overdrive & electronic controlled transmission",
  },
  {
    src: "https://toyota-img.amayama.com/imgjp/EM/271160/879430.png",
    desc: "Overdrive & electronic controlled transmission",
  },
  {
    src: "https://toyota-img.amayama.com/imgjp/EM/271160/879424B.png",
    desc: "Overdrive & electronic controlled transmission",
  },
  {
    src: "https://toyota-img.amayama.com/imgjp/EM/271160/814251E.png",
    desc: "Overdrive & electronic controlled transmission",
  },
  {
    src: "https://toyota-img.amayama.com/imgjp/EM/271160/814237A.png",
    desc: "Overdrive & electronic controlled transmission",
  },
  {
    src: "https://toyota-img.amayama.com/imgjp/EM/271160/814240C.png",
    desc: "Overdrive & electronic controlled transmission",
  },
  {
    src: "https://toyota-img.amayama.com/imgjp/EM/271160/814242A.png",
    desc: "Overdrive & electronic controlled transmission",
  },
  {
    src: "https://toyota-img.amayama.com/imgjp/EM/271160/879424B.png",
    desc: "Overdrive & electronic controlled transmission",
  },
  {
    src: "https://toyota-img.amayama.com/imgjp/EM/271160/814245A.png",
    desc: "Overdrive & electronic controlled transmission",
  },
  {
    src: "https://toyota-img.amayama.com/imgjp/EM/271160/814238.png",
    desc: "Overdrive & electronic controlled transmission",
  },
  {
    src: "https://toyota-img.amayama.com/imgjp/EM/271160/814275A.png",
    desc: "Overdrive & electronic controlled transmission",
  },
  {
    src: "https://toyota-img.amayama.com/imgjp/EM/271160/814249.png",
    desc: "Overdrive & electronic controlled transmission",
  },
  {
    src: "https://toyota-img.amayama.com/imgjp/EM/271160/814253F.png",
    desc: "Overdrive & electronic controlled transmission",
  },
  {
    src: "https://toyota-img.amayama.com/imgjp/EM/271160/825531E.png",
    desc: "Overdrive & electronic controlled transmission",
  },
  {
    src: "https://toyota-img.amayama.com/imgjp/EM/271160/825517F.png",
    desc: "Overdrive & electronic controlled transmission",
  },
  {
    src: "https://toyota-img.amayama.com/imgjp/EM/271160/831349A.png",
    desc: "Overdrive & electronic controlled transmission",
  },
  {
    src: "https://toyota-img.amayama.com/imgjp/EM/271160/848878.png",
    desc: "Overdrive & electronic controlled transmission",
  },
  {
    src: "https://toyota-img.amayama.com/imgjp/EM/271160/848888A.png",
    desc: "Overdrive & electronic controlled transmission",
  },
  {
    src: "https://toyota-img.amayama.com/imgjp/EM/271160/848970A.png",
    desc: "Overdrive & electronic controlled transmission",
  },
  {
    src: "https://toyota-img.amayama.com/imgjp/EM/271160/851979B.png",
    desc: "Overdrive & electronic controlled transmission",
  },
  {
    src: "https://toyota-img.amayama.com/imgjp/EM/271160/851980A.png",
    desc: "Overdrive & electronic controlled transmission",
  },
];

const Parts = () => {
  const pathname = usePathname();
  
  return (
    <>
      {/* main container */}
      <div className="flex flex-col lg:px-32 md:px-14 px-4 text-center">
        {/* heading */}
        <h1 className="lg:text-4xl text-2xl font-semibold text-yellow-500 py-6">Choose schema</h1>

        {/* parts cards */}

        <div className="w-full h-auto flex flex-wrap items-center justify-center gap-8 my-6">
          {partsLink?.map((data, index) => {
            return (
              <Link
                key={index}
                href={`${pathname}/${data.desc}`}
                className="w-48 h-56 flex flex-col gap-2 hover:shadow-xl hover:border hover:duration-300 hover:scale-105 hover:border-opacity-10 rounded-md items-center  justify-around  text-yellow-500 p-1 hover:bg-slate-100 hover:bg-opacity-10"
              >
                <Image
                  src={data.src}
                  alt="parts"
                  width={130}
                  height={100}
                  className="object-contain"
                />
                <span className="lg:text-sm text-xs">{data.desc}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Parts;
