import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Topics = ({ topics }) => {
  if (topics.length === 0) return null;
  return (
    <div className="topics">
      <strong>Topics: </strong>
      {topics.map((topic, index) => {
        return (
          <>
            <Link
              to={`/search?q=${topic.slug}`}
              className="text-watermelon font-bold"
              key={topic.name}
            >
              {topic.name}
            </Link>
            {index !== topics.length - 1 ? ", " : ""}
          </>
        );
      })}
    </div>
  );
};

Topics.propTypes = {
  topics: PropTypes.object,
};
