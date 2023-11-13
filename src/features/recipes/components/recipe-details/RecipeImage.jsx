import PropTypes from "prop-types";

export const RecipeImage = ({ src, alt, description }) => {
  let wrapperClasses = "";
  let pictureClasses = "";
  if (description) {
    wrapperClasses +=
      "picture-wrapper -mt-6 mb-4 box-content flex justify-center overflow-visible md:rotate-12 md:rounded-full md:border-[.5rem] border-b-[.3rem] border-dashed border-tangerine-500 pb-6 md:-mr-20 md:-mt-16 md:h-[17rem] md:w-[17rem] md:p-3 xl:h-[25rem] xl:max-h-[25vw] xl:w-[25rem] xl:max-w-[25vw]";
    pictureClasses +=
      "-mx-6 block h-full w-full overflow-clip rounded-t-xl object-cover md:rounded-full md:shadow-2xl";
  } else {
    wrapperClasses += "";
    pictureClasses += "";
  }
  return (
    <div>
      <div className={wrapperClasses}>
        <picture className={pictureClasses}>
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        </picture>
      </div>
    </div>
  );
};

RecipeImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  description: PropTypes.string,
};
