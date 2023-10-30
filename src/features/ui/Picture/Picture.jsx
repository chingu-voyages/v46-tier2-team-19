import PropTypes from "prop-types";

export const Picture = ({ resolution, files, alt, className }) => {
  let defaultSource = null;

  const sources = Object.keys(files).map((format) => {
    let base = 0;
    const srcSet = Object.keys(files[format])
      .map((w) => {
        if (+w < resolution) return null;
        if (base === 0) {
          base = w;
          if (!defaultSource) defaultSource = files[format][base];
          return defaultSource;
        }
        return `${files[format][`${w}`]} ${(w / base).toFixed(2)}x`;
      })
      .filter((s) => s)
      .join(", ");
    return <source key={format} type={`image/${format}`} srcSet={srcSet} />;
  });

  return (
    <picture className={className}>
      {sources}
      <img src={defaultSource} alt={alt} />
    </picture>
  );
};

Picture.propTypes = {
  resolution: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  files: PropTypes.object,
  alt: PropTypes.string,
  className: PropTypes.string,
};
