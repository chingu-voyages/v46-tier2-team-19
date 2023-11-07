import PropTypes from "prop-types";
import { Description } from "./Description";
import { Card } from "./Card";

export const IntroCard = ({ name, imageUrl, description }) => {
  if (description)
    return (
      <Card className="intro-card md:col-start-1 md:col-end-13 md:row-start-3 lg:col-start-5 lg:row-start-1 2xl:col-start-4">
        <div className="intro-wrapper flex-row-reverse gap-4 md:flex">
          <div>
            <div className="picture-wrapper -mt-6 mb-4 box-content flex justify-center overflow-visible md:rotate-12 md:rounded-full md:border-[.5rem] border-b-[.3rem] border-dashed border-tangerine-500 pb-6 md:-mr-20 md:-mt-16 md:h-[17rem] md:w-[17rem] md:p-3 xl:h-[25rem] xl:max-h-[25vw] xl:w-[25rem] xl:max-w-[25vw]">
              <picture className="-mx-6 block h-full w-full overflow-clip rounded-t-xl object-cover md:rounded-full md:shadow-2xl">
                <img
                  src={imageUrl}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>
          </div>
          <Description description={description} />
        </div>
      </Card>
    );
  return (
    <div className="picture-wrapper md:col-start-1 md:col-end-13 md:row-start-3 lg:col-start-5 lg:row-start-1 2xl:col-start-4 overflow-hidden rounded-xl">
      <picture className="w-full">
        <img
          src={imageUrl}
          alt={name}
          className="h-full max-h-[25rem] w-full object-cover"
        />
      </picture>
    </div>
  );
};

IntroCard.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  description: PropTypes.string,
};
