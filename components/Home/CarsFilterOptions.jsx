"use client";

import React, { useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

// local import
import {
  toyotaCars,
  suzukiCars,
  subaruCars,
  nissanCars,
  mitsubishiCars,
  mazdaCars,
  lexusCars,
  infinitiCars,
  hondaCars,
} from "@/public/utils/cars";

const CarsFilterOptions = ({ selectManufacture, selectYear }) => {
  const [getInputSearch, setGetInputSearch] = useState("");
  // console.log("INput seacrh value is :", getInputSearch);

  const router = useRouter();
  const pathname = usePathname();

  const defaultArray = useMemo(() => {
    let arrayData;
    switch (selectManufacture) {
      case "Toyota":
        arrayData = toyotaCars;
        break;
      case "Suzuki":
        arrayData = suzukiCars;
        break;
      case "Lexus":
        arrayData = lexusCars;
        break;
      case "Mitsubishi":
        arrayData = mitsubishiCars;
        break;
      case "Honda":
        arrayData = hondaCars;
        break;
      case "Mazda":
        arrayData = mazdaCars;
        break;
      case "Nissan":
        arrayData = nissanCars;
        break;
      case "Subaru":
        arrayData = subaruCars;
        break;
      case "Infiniti":
        arrayData = infinitiCars;
        break;
      // Add cases for other categories as needed
      default:
        arrayData = [];
    }
    return arrayData;
  }, [selectManufacture]);

  // console.table("Default data is :", defaultArray);

  const mainArrayFunction = useMemo(() => {
    let arrayData;
    switch (selectManufacture) {
      case "Toyota":
        arrayData = toyotaCars;
        break;
      case "Suzuki":
        arrayData = suzukiCars;
        break;
      case "Lexus":
        arrayData = lexusCars;
        break;
      case "Mitsubishi":
        arrayData = mitsubishiCars;
        break;
      case "Honda":
        arrayData = hondaCars;
        break;
      case "Mazda":
        arrayData = mazdaCars;
        break;
      case "Nissan":
        arrayData = nissanCars;
        break;
      case "Subaru":
        arrayData = subaruCars;
        break;
      case "Infiniti":
        arrayData = infinitiCars;
        break;
    }
    // filtering data by selected year
    const splitYearArray = arrayData
      .filter((item) => {
        const yearRange = item.Years.split("-");
        const [startYearStr, endYearStr] = yearRange.map((item) => item.trim());

        // Convert the startYear and endYear to numbers
        const startYear = parseInt(startYearStr.split(".")[1], 10);
        const endYear = parseInt(endYearStr.split(".")[1], 10);

        // console.log("startYear: ", startYear);
        // console.log("endYear: ", endYear);

        // user selected year
        const yearY = selectYear.split("-");
        const [selectedStartYear, selectedEndYear] = yearY.map((item) =>
          item.trim()
        );
        const sSYear = parseInt(selectedStartYear, 10);
        const sEYear = parseInt(selectedEndYear, 10);
        // console.log("sSYear: ", sSYear);
        // console.log("sEYear: ", sEYear);
        // console.log("main array data is :", arrayData);

        // return the data to array
        if (
          (sSYear >= startYear && sSYear <= endYear) ||
          (sEYear >= startYear && sEYear <= endYear)
        ) {
          return true; // Include this car in the filtered results
        } else {
          return false; // Exclude this car from the filtered results
        }
      })
      .map((item) => {
        // const parentTitleParts = item.parentTitle.split(" ");
        // parentTitleParts.splice(0, 2);
        // Remove the first two words
        // return parentTitleParts.join(" ");
        return item;
      });

    return splitYearArray;
  }, [selectManufacture, selectYear]);

  // console.log("mainArrayFunction is :", mainArrayFunction);

  // button search function

  const supportArray = selectYear ? mainArrayFunction : defaultArray;

  function searchFrames(inputSearch) {
    const matchingObjects = [];

    supportArray.forEach((item) => {
      const framesArray = item.Frames.split(",").map((frame) => frame.trim());
      if (framesArray.includes(inputSearch)) {
        matchingObjects.push(item);
      }
    });

    return matchingObjects;
  }

  // const inputSearch = "GRN210";
  const result = searchFrames(getInputSearch);
  // console.log("Search By Chassis :", result);

  const searchFunction = () => {
    if (getInputSearch.length !== 0) {
      console.log("Button clicked");
    } else {
      console.log("Please enter something to search");
    }
  };

  const finalArray =
    !getInputSearch && !selectYear
      ? defaultArray
      : getInputSearch && !selectYear
      ? result
      : !getInputSearch && selectYear
      ? mainArrayFunction
      : result;
  return (
    <div className="w-full min-h-screen h-auto">
      <div className="mt-10 flex sm:flex-row flex-col items-center justify-between sm:text-start text-center">
        <div className="">
          <h2 className="text-[30px] font-bold text-yellow-500">
            Search Catalog
          </h2>
          <h2 className="">Explore our cars parts you might likes</h2>
        </div>
        <div className="flex gap-5 my-8 sm:my-0">
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search By Chassis…"
                className="input input-bordered placeholder:text-yellow-500 text-yellow-500"
                onChange={(e) => setGetInputSearch(e.target.value)}
              />
              <button className="btn btn-square" onClick={searchFunction}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* seacrh by chassis  */}
      <div className="w-full h-auto flex flex-wrap justify-center items-center gap-4 py-16">
        {finalArray.length !== 0 ? (
          <>
            {finalArray?.map((data, index) => {
              const href = data.parentTitle.trim();
              return (
                <div key={index}>
                  <div
                    onClick={() =>
                      router.push(`/${`exploreParts`}/${href}/${data.Family}`)
                    }
                    className="w-48 h-60 rounded-md hover:shadow-xl flex flex-col justify-start items-center text-[0.75rem] text-[#A5A5A5] hover:cursor-pointer"
                  >
                    <img
                      src={data.imageLink}
                      alt={data.Frames}
                      height={100}
                      className=" object-contain rounded-md my-4 lg:w-56 md:w-44 w-36 border"
                    />

                    <span className="text-white hover:text-yellow-500">
                      {data.Family}
                    </span>
                    <span className="text-yellow-500 hover:text-white">
                      {data.parentTitle}
                    </span>
                    <span className="text-white hover:text-yellow-500">
                      {data.Years}
                    </span>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <>
            <h1 className="">No Related Data Found</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default CarsFilterOptions;
