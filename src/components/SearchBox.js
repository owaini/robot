import React from "react";

const SearchBax = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa2 ba b--blue bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBax;
