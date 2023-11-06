import PropTypes from "prop-types";

export const RecipeVideo = ({ videoUrl, renditions, ...attributes }) => {
  if (!videoUrl) return null;
  const sources = Object.values(renditions).map((src, index) => {
    return <source key={index} type={src.content_type} src={src.url} />;
  });
  return (
    <div className="recipe-video mb-4" {...attributes}>
      <video controls className="rounded-xl w-full md:w-[360px] max-w-full">
        {sources}
      </video>
    </div>
  );
};

RecipeVideo.propTypes = {
  videoUrl: PropTypes.string,
  renditions: PropTypes.object,
};
