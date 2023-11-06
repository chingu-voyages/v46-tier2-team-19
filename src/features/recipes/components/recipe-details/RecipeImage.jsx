import PropTypes from "prop-types";

export const RecipeImage = ({ src, alt }) => {
  return (
    <div>
      <div className="picture-wrapper -mt-6 mb-4 box-content flex justify-center overflow-visible border-b-[.3rem] border-dashed border-tangerine-500 pb-6 md:-mr-20 md:-mt-16 md:h-[17rem] md:w-[17rem] md:rotate-12 md:rounded-full md:border-[.5rem] md:p-3 xl:h-[25rem] xl:w-[25rem]">
        <picture className="-mx-6 block overflow-clip rounded-t-xl object-cover md:shadow-2xl md:h-[17rem] md:w-[17rem] md:rounded-full xl:h-[25rem] xl:w-[25rem]">
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        </picture>
      </div>
    </div>
  );
};

RecipeImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
