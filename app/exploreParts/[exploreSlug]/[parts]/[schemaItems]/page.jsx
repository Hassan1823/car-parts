"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";
import { usePathname } from "next/navigation";

// local imports
import { hondaAllPartsData } from "@/public/utils/allPartsData";

const Parts = ({ params }) => {
  const pathname = usePathname();
  // const router = useRouter();
  const paramsPath =
    decodeURIComponent(params.schemaItems).replace(/%20/g, " ") + " ";

  const subSubCateg =
    decodeURIComponent(params.parts).replace(/%20/g, " ") + " ";
  const root = params.exploreSlug.split("%20");
  const mainCategory = root[0];
  const restOfElements = root.slice(1);
  const subCategory = restOfElements.join(" ");

  // console.log("Main Category is : ", mainCategory);
  // console.log("Sub Category is : ", subCategory);
  // console.log("Sub Sub Category is : ", subSubCateg);
  // console.log("last Params are :", paramsPath);

  const filterAllPartsData = useMemo(() => {
    let allPartsArray;
    switch (mainCategory) {
      case "Toyota":
        allPartsArray = toyotaCars;
        break;
      case "Suzuki":
        allPartsArray = suzukiCars;
        break;
      case "Lexus":
        allPartsArray = lexusCars;
        break;
      case "Mitsubishi":
        allPartsArray = mitsubishiCars;
        break;
      case "Honda":
        allPartsArray = hondaAllPartsData;
        break;
      case "Mazda":
        allPartsArray = mazdaCars;
        break;
      case "Nissan":
        allPartsArray = nissanCars;
        break;
      case "Subaru":
        allPartsArray = subaruCars;
        break;
      case "Infiniti":
        allPartsArray = infinitiCars;
        break;
      // Add cases for other categories as needed
      default:
        allPartsArray = [];
    }
    return allPartsArray;
  }, [mainCategory]);

  const arrayData = filterAllPartsData.filter(
    (item) => item.Family === subSubCateg
  );
  // console.log("last array data is : ", arrayData);

  const srcArray = arrayData.map((item) => item.ListOfHrefs).flat();
  // console.log("ListOfHrefs is : ", srcArray);

  const cardsData = srcArray.filter((item) => item.h1Tag === paramsPath);
  // console.log("cards are:", cardsData);

  // const cards = cardsData.map((item) => item.cards);

  return (
    <>
      {/* main container */}
      <div className="flex flex-col lg:px-32 md:px-12 px-4 text-center justify-center">
        {/* heading */}
        <h1 className="lg:text-4xl text-2xl font-semibold text-yellow-500 py-6">
          Choose schema for
        </h1>
        <h1 className="lg:text-2xl md:text-xl text-lg font-semibold text-yellow-500">
          {paramsPath && paramsPath}
        </h1>

        {/* parts cards */}

        <div className="w-full h-auto flex items-center justify-center gap-2 my-6">
          {cardsData ? (
            <>
              {cardsData.map((items, index) => {
                return (
                  <div
                    key={index}
                    // className="w-full h-auto flex flex-wrap justify-center items-center"
                    className="w-full h-auto grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-2 place-items-center gap-2 sm:gap-8 lg:gap-14"
                  >
                    {items.cards?.map((data, index) => {
                      return (
                        <Link
                          key={index}
                          href={`${pathname}/${data.Alt}`}
                          className="sm:w-48 w-auto h-56 sm:p-0 p-1 flex flex-col hover:shadow-xl hover:border hover:duration-300 hover:scale-105 hover:border-opacity-10 rounded-md items-center justify-around text-yellow-500 hover:bg-slate-100 hover:bg-opacity-10"
                        >
                          <img
                            src={data.imageLink}
                            alt={data.Alt}
                            // width={160}
                            height={100}
                            className="object-contain rounded-md lg:w-56 md:w-44 w-40"
                          />
                          <span className="lg:text-sm text-xs">{data.Alt}</span>
                        </Link>
                      );
                    })}
                  </div>
                );
              })}
            </>
          ) : (
            <>
              <h1 className="text-2xl font-semibold text-gray-500">
                No Data Found
              </h1>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Parts;
