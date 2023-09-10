"use client";

import Image from "next/image";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

const cardData = [
  {
    src: "https://static.amayama.com/amayama2/1644899741830_original.jpg",
    name: "(T260)",
    year: " 04.2010 - 05.2016",
    DBA: "DBA-NZT260 , DBA-ZRT260",
    generation: "2 generation restyling",
  },
];

const partsGroup = [
  {
    src: "https://www.amayama.com/i/catalogs/group_1.png",
    desc: "Engine, fuel system and tools",
  },
  {
    src: "https://www.amayama.com/i/catalogs/group_2.png",
    desc: "Transmission and chassis",
  },
  {
    src: "https://www.amayama.com/i/catalogs/group_3.png",
    desc: "Body and interior",
  },
  {
    src: "https://www.amayama.com/i/catalogs/group_4.png",
    desc: "Electrics",
  },
];

const featuresList = ["Best-selling parts"];

const carDesc = [
  {
    name: "Sedan",
    detail: `In the second generation, Allion retained the status of a middle-class sedan with a fairly spacious interior and optimal external dimensions, guaranteeing ease of use in the difficult conditions of Japanese traffic. The updated model is equipped with engines from 1.5 to 2 liters in combination with a variator. In contrast to the balanced nature of the exterior of the “brother” Premio, the Allion body is made in a more expressive, sporty style. The front lines form the letter “T”, and the front overhang looks shorter than it is - these are the new proportions of the sedan. The quality of interior decoration has become better, and the internal volume has also increased: the interior has become longer by 80 mm and wider by 55 mm.
    
    If we talk about the interior, it has become even more luxurious. One can note the intricate forms of decorative panels that give the cabin a certain extravagance and certainly an eccentricity. Compared with the previous generation, the Allion rear seats have become more comfortable due to the new folding mechanism. The range of equipment was significantly expanded, and the rear-view monitor, remote access and engine start systems were included in the list of standard equipment. In the maximum configuration, the car is equipped with an optitron dashboard, xenon headlights, fog lights, electric and heated seats, mirrors, cruise control, upholstery, which has improved tactile properties, and other top-class options. In 2010, the car underwent changes - the design of the front of the body was slightly changed, the quality of materials in the cabin was improved. Much attention is paid to the color scheme of the cabin. It looks especially impressive in leather ivory.
   
    The base for Allion remains a 1.5-liter engine with 109 hp. But it should be noted that in terms of specific power the 1.5-liter versions of the new generation are slightly inferior to the previous one - after all, the car has slightly increased in size (has become higher and longer), and has added weight. Therefore, a more optimal option is the motor of the new 2ZR-FE series, whose power is 125-136 hp. depending on vehicle modification. In 2010, the 1.8-liter model received the innovative Valvematic variable valve timing system, which contributes to a more rational use of engine power. As a result, more efficient fuel consumption and less impact on the environment. The most powerful engine in the range is the two-liter 3ZR-FAE. In his asset - 158 "forces". All motors come with a CVT, and the 1.8-liter versions, as before, offer not only front-wheel drive, but also four-wheel drive.
   
    The Allion pendant has retained its original design. At the front there are suspension struts on springs, at the rear there is a semi-independent suspension on a torsion beam for front-wheel drive cars and an independent two-link suspension for all-wheel drive. Starting from a certain period, even the basic versions of the Allion are now shod in tires with a dimension of 185 / 65R15, not to mention the lower profile 195 / 55R16 in the top versions, which makes the nature of the movement even tougher. With regard to maneuverability, there were no changes - after all, the car retained the same base size, and the turning radius remained the same.
   
    The safety of Allion has undergone changes of an expected evolutionary nature. And before this car had a good set of systems and equipment. In the new generation, the list was supplemented by the VSC stability control system, TCS traction control system, and an intelligent parking assistance system. True, all this is present only in the top versions. In the basic modification, the car is equipped with ABS with EBD and an auxiliary braking system, two front airbags. Side airbags and curtain airbags are available as an option.
   
    Toyota Allion successfully continues the tradition of Toyota's comfortable family sedans, standing one step above the Corolla family. In addition, the veneration that Toyota Carina won at one time plays in favor of this model, and Allion, already introduced by the second generation, did not lose it at all. The level of car equipment is fully consistent with the standards adopted in the domestic market - that is, it is quite rich. Reliability, as before, remains at its best. Therefore, despite the high prices of cars of fresh years of release, the model is in stable demand.`,
  },
];

const Chassis = ({ params }) => {
  const router = useRouter();
  const pathname = usePathname();
  const subSubCateg = decodeURIComponent(params.parts).replace(/%20/g, " ");
  const root = params.exploreSlug.split("%20");
  const mainCategory = root[0];
  const restOfElements = root.slice(1);
  const subCategory = restOfElements.join(" ");

  console.log("Sub Category is : ", subCategory);
  console.log("Main Category is : ", subSubCateg);

  console.table("data is :", params);

  return (
    <>
      {/* main conatiner */}
      <div className="w-full min-h-screen h-auto lg:px-32 px-4 flex flex-col gap-8">
        <h1 className="lg:text-3xl text-lg text-yellow-500 font-semibold py-6">
          {mainCategory} {subCategory} , {subSubCateg}
        </h1>
        {/* parts group */}
        <div className="w-full h-auto flex lg:justify-start justify-center flex-wrap gap-8">
          {/* card */}
          {cardData?.map((data, index) => {
            return (
              <div
                key={index}
                // onClick={() => router.push(`${pathname}/${data.name}`)}
                // href={`${pathname}/${data.generation}`}
                className="w-48 h-60 rounded-md hover:shadow-xl flex flex-col justify-start items-center text-[0.75rem] gap-2 text-[#A5A5A5] hover:cursor-not-allowed "
              >
                <Image
                  src={data.src}
                  alt="cars"
                  width={180}
                  height={48}
                  className=" object-contain "
                />

                <span className="text-blue-600 hover:text-red-600">
                  {params.chassis}
                </span>
                <span>{data.year}</span>
                <span>{data.generation}</span>
              </div>
            );
          })}
          {/* parts grid group */}
          <div className="flex flex-col gap-2">
            <h1 className="lg:text-2xl text-base">Choose parts group:</h1>
            {/* parts */}
            <div className="w-full h-auto flex flex-wrap lg:justify-start justify-center gap-4 hover:cursor-pointer">
              {partsGroup?.map((data, index) => {
                return (
                  <span
                    key={index}
                    onClick={() => router.push(`${pathname}/${data.desc}`)}
                    // href={`/toyota/Alphard/2%20generation/${data.desc}`}
                    className="hover:shadow-xl w-44 h-44 rounded-md text-yellow-500 hover:text-yellow-600 font-medium flex flex-col justify-start text-center items-center gap-2 hover:scale-105 hover:duration-300 hover:bg-slate-100 hover:bg-opacity-10"
                  >
                    <Image
                      src={data.src}
                      alt="chassis"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                    <span>{data.desc}</span>
                  </span>
                );
              })}
            </div>
            {/* features list */}
            <div className="flex flex-col">
              <h1 className="lg:text-2xl text-lg mt-8">
                Choose featured list:
              </h1>
              <div className="w-full h-auto flex flex-wrap gap-4 text-yellow-500 lg:text-lg text-sm my-4">
                {featuresList?.map((data, index) => {
                  return (
                    <span
                      key={index}
                      onClick={() => router.push(`/best-selling-parts`)}
                      // href={`/best-selling-parts`}
                      className="hover:text-yellow-600 hover:cursor-pointer"
                    >
                      {data}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* description of a car  */}
        {carDesc?.map((data, index) => {
          return (
            <div key={index} className="flex flex-col gap-8 pb-20">
              <h1
                key={index}
                className="lg:text-lg text-sm font-medium text-yellow-500"
              >
                {data.name}
              </h1>
              <p className="lg:text-sm text-xs leading-5">{data.detail}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Chassis;
