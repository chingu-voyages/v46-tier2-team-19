import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Icon, Button } from "@/features/ui";
export const SearchBox = ({ searchTerm, onSearch }) => {
  const [localTerm, setLocalTerm] = useState(searchTerm);

  useEffect(() => {
    setLocalTerm(searchTerm);
  }, [searchTerm]);

  const handleInputChange = (e) => {
    const newSearchTerm = e.target.value;
    setLocalTerm(newSearchTerm);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSearch(localTerm);
  };

  return (
    <div className="bg-gradient-tangerine-diagonal p-[1px] rounded-full flex items-center max-w-xl">
      <form className="flex w-full" onSubmit={handleFormSubmit}>
        <input
          type="search"
          value={localTerm}
          onChange={handleInputChange}
          placeholder="Enter an Ingredient..."
          size="30"
          className="w-full px-6 text-sm align-middle rounded-l-full lg:text-lg bg-earlyDawn-100 focus:outline-none placeholder:text-lava-300 text-lava-950 focus:ring-0"
        />
        <Button
          type="submit"
          variant="primary"
          size="large"
          className="rounded-l-none focus:ring-0 focus:ring-outline-0"
        >
          <Icon name="search" className="scale-125" />
        </Button>
      </form>
    </div>
  );
};

SearchBox.propTypes = {
  searchTerm: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};
