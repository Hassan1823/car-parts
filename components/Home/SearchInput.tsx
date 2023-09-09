import React from "react";

function SearchInput() {
  return (
    <div className="mt-5">
      <h2 className="text-center text-[20px] text-yellow-400 mb-3">
        Lets Search What You Need
      </h2>
      <div className="flex justify-center ">
        {/* bg */}
        <div className="flex bg-yellow-500 p-1 px-3 gap-2 divide-x divide-black rounded-full ">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>

            <input
              type="text"
              placeholder="Location"
              className="p-2 outline-none bg-transparent placeholder:text-white"
            />
          </div>
          <div className="">
            <input
              type="date"
              className="p-2 outline-none bg-transparent text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
