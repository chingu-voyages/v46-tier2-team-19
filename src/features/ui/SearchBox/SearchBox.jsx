import { useState, useEffect } from "react";
import debounce from "lodash/debounce";
import PropTypes from "prop-types";
import { Icon } from "@/features/ui/Icon";
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
    setLocalTerm("");
  };
  const handleInputChange = (e) => {
    setLocalTerm(e.target.value);
    debouncedSearch(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-tangerine-400 p-[1px] rounded-full flex items-center max-w-xl">
      <form className="flex w-full" onSubmit={handleFormSubmit}>
        <input
          type="search"
          value={localTerm}
          onChange={handleInputChange}
          placeholder="Enter an Ingredient..."
          className="w-full p-2 pl-6 text-sm rounded-l-full lg:text-base bg-earlyDawn-100 focus:outline-none placeholder:text-lava-300 text-lava-950 focus:ring-none"
        />
        <button
          className="px-4 rounded-r-full text-white bg-tangerine-400 hover:bg-tangerine-600 flex flex-col align-middle justify-center text-3xl"
          onClick={() => handleSearch()}
        >
          <Icon name="search" />
        </button>
      </form>
    </div>
  );
};

SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
