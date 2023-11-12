import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Tags = ({ tags }) => {
  const filteredCategories = [
    "equipment",
    "appliance",
    "difficulty",
    "business_tags",
  ];
  const displayTags = tags
    .filter((tag) => !filteredCategories.includes(tag.type))
    .slice(0, 20);
  if (displayTags.length === 0) return null;
  return (
    <div className="tags" key="tags">
      {displayTags.map((tag, index) => {
        return (
          <span key={tag.name}>
            <Link
              to={`/search?q=${tag.name}`}
              className="text-watermelon font-bold decoration-tangerine decoration-2 underline-offset-2 hover:underline"
              key={tag.name + String(Math.random())}
            >
              {tag.display_name}
            </Link>
            {index !== displayTags.length - 1 ? ", " : ""}
          </span>
        );
      })}
    </div>
  );
};

Tags.propTypes = {
  tags: PropTypes.array,
};
