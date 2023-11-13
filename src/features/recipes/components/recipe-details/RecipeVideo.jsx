import PropTypes from "prop-types";

export const RecipeVideo = ({ videoUrl, renditions, ...attributes }) => {
  if (!videoUrl) return null;
  const sources = Object.values(renditions).map((src, index) => {
    return <source key={index} type={src.content_type} src={src.url} />;
  });
  return (
    <div {...attributes}>
      <video controls className="rounded-xl w-full">
        {sources}
      </video>
    </div>
  );
};

RecipeVideo.propTypes = {
  videoUrl: PropTypes.string,
  renditions: PropTypes.array,
};
