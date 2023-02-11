import React from "react";
import Icon from "../../../components/Icon";

const Search = ({ value, onChange }) => (
  <div className="focus:shadow-xl flex items-center px-2 mt-1 space-x-2 py-2 border text-gray-800 dark:text-gray-100">
    <Icon>search</Icon>
    <input
      name="search"
      value={value}
      className="w-full outline-none bg-transparent"
      onChange={(event) => onChange(event.target.value)}
      placeholder="Search"
    />
    <Icon className="flex items-center" button onClick={() => onChange("")}>
      close
    </Icon>
  </div>
);

export default Search;