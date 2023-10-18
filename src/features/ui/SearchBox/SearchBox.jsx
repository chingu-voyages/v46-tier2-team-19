import { useState, useEffect } from "react";
import debounce from "lodash/debounce";
import PropTypes from "prop-types";
export const SearchBox = ({ onSearch }) => {
  const [localTerm, setLocalTerm] = useState("");
  const debouncedSearch = debounce(onSearch, 1500);

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const handleSearch = () => {
    onSearch(localTerm);
  };
  const handleInputChange = (e) => {
    setLocalTerm(e.target.value);
    debouncedSearch(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="flex w-1/2" onSubmit={handleFormSubmit}>
      <input
        type="search"
        value={localTerm}
        onChange={handleInputChange}
        placeholder="Enter a ingredient..."
        className="w-full p-2 bg-gray-600 rounded-l-md focus:outline-none placeholder:text-gray-500 text-gray-50 focus:ring-none"
      />
      <button
        className="px-4 bg-orange-200 hover:bg-orange-600 hover:text-white rounded-r-md"
        onClick={() => handleSearch()}
      >
        Search
      </button>
    </form>
  );
};

SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
