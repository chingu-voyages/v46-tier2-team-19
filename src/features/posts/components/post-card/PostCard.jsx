import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export const PostCard = ({ post }) => {
  return post ? (
    <li className="px-8 py-2 ml-4 border rounded-lg w-fit hover:bg-gray-600 hover:text-gray-100">
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ) : null;
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }),
};
