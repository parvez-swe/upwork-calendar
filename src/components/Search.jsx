import React from "react";

const Search = () => {
  return (
    <div className="flex items-center ">
      <button className="text-gray-300 -mr-6 z-20">
        <img src="/icon/Magnifer.png" alt="" />
      </button>
      <input
        type="text"
        placeholder="Search"
        className=" z-10 border border-gray-300 pl-7 pr-1 py-2 rounded focus:outline-none "
      />
    </div>
  );
};

export default Search;
