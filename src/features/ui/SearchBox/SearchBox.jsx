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
    <form
      className="flex items-center w-full bg-white rounded-full shadow-md"
      onSubmit={handleFormSubmit}
    >
      <input
        type="search"
        value={localTerm}
        onChange={handleInputChange}
        placeholder="Onion, salt, eggs..."
        size="30"
        className="flex-grow h-12 px-6 text-xl tracking-wider bg-white rounded-l-full focus:outline-none placeholder:text-lava-400 placeholder:"
      />
      <Button
        type="submit"
        variant="primary"
        size="large"
        className="h-12 rounded-full focus:ring-0 focus:ring-outline-0"
      >
        <Icon name="search" className="scale-125" />
      </Button>
    </form>
  );
};

SearchBox.propTypes = {
  searchTerm: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};
