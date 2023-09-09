import React from "react";

function CarsFilterOptions() {
  return (
    <div className="mt-10 flex items-center justify-between">
      <div className="">
        <h2 className="text-[30px] font-bold text-yellow-500">Cars Catalog</h2>
        <h2 className="">Explore our cars parts you might likes</h2>
      </div>
      <div className="flex gap-5">
        <select className="select select-bordered w-full max-w-xs bg-yellow-500">
          <option disabled selected>
            Manufacturer
          </option>
          <option>Honda</option>
          <option>Toyota</option>
          <option>Suzuki</option>
          <option>Infiniti</option>
          <option>Suzuki</option>
          <option>Mazda</option>
        </select>
        <select className="select select-bordered w-full max-w-xs bg-yellow-500 md:block hidden">
          <option disabled selected>
            Price
          </option>
          <option>Min to Max</option>
          <option>Max to Min</option>
        </select>
      </div>
    </div>
  );
}

export default CarsFilterOptions;
