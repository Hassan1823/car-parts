"use client";

import React, { useState } from "react";

function CarsFilterOptions() {
  const [selectGroupPart, setSelectGroupPart] = useState("");

  // handle group parts
  const handleGroupPartChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectGroupPart(e.target.value); // Update the selectedGroupParts state with the selected option
  };
  // console.log("Groups Parts :", selectGroupPart);

  return (
    <div className="mt-10 flex items-center justify-between">
      <div className="">
        <h2 className="text-[30px] font-bold text-yellow-500">Parts Catalog</h2>
        <h2 className="">Explore our cars parts you might likes</h2>
      </div>
      <div className="flex gap-5">
        <select className="select select-bordered w-full max-w-xs bg-yellow-500 px-2"
        value={selectGroupPart} // Set the selected value of the select element to the state variable
        onChange={handleGroupPartChange} // Handle the change event
        >
          <option disabled selected>
            Parts Group
          </option>
          <option>Engine, fuel system & tools</option>
          <option>Transmission and chassis</option>
          <option>Body & Interior</option>
          <option>Electrics</option>
        </select>
        {/* <select className="select select-bordered w-full max-w-xs bg-yellow-500 md:block hidden">
          <option disabled selected>
            Price
          </option>
          <option>Min to Max</option>
          <option>Max to Min</option>
        </select> */}
      </div>
    </div>
  );
}

export default CarsFilterOptions;
