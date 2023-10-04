import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <>
      <input
        className="placeholder-gray-500::placeholder text-[#2A2B2E] p-2 rounded-lg"
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default SearchBox;
