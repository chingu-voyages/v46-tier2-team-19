import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Tags = ({ tags }) => {
  const filteredCategories = [
    "equipment",
    "appliance",
    "difficulty",
    "business_tags",
  ];
  const displayTags = tags.filter(
    (tag) => !filteredCategories.includes(tag.type),
  );
  if (displayTags.length === 0) return null;
  return (
    <div className="tags">
      {displayTags.map((tag, index) => {
        return (
          <>
            <Link
              to={`/search?q=${tag.name}`}
              className="text-watermelon font-bold"
              key={tag.name}
            >
              {tag.display_name}
            </Link>
            {index !== displayTags.length - 1 ? ", " : ""}
          </>
        );
      })}
    </div>
  );
};

Tags.propTypes = {
  tags: PropTypes.object,
};
