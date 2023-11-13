import PropTypes from "prop-types";
import { Description } from "./Description";
import { Card } from "./Card";
import PlantsTL from "@/assets/brand/plants-tl/PlantsTL";

export const IntroCard = ({ name, imageUrl, description }) => {
  if (description)
    return (
      <Card className="intro-card relative md:col-start-1 md:col-end-13 md:row-start-3 lg:col-start-5 lg:row-start-1 2xl:col-start-4">
        <div className="absolute left-0 top-0 z-0 h-full overflow-hidden rounded-tl-[1rem] pt-[20rem] md:pt-0">
          <PlantsTL
            resolution="128"
            className="select-none pointer-events-none block h-full w-[8rem] lg:w-[8rem] overflow-hidden lg:rounded-tl-[1rem]"
          />
        </div>
        <div className="intro-wrapper relative flex-row-reverse gap-4 md:flex">
          <div>
            <div className="picture-wrapper -mx-6 -mt-6 mb-4 box-content flex max-h-[20rem] justify-center overflow-hidden border-b-[.3rem] border-dashed border-tangerine-500 pb-6 md:-mr-20 md:-mt-16 md:h-[17rem] md:w-[17rem] md:rotate-12 md:overflow-visible md:rounded-full md:border-[.5rem] md:p-3 xl:h-[25rem] xl:max-h-[25vw] xl:w-[25rem] xl:max-w-[25vw]">
              <picture className="block h-full w-full overflow-clip rounded-t-xl object-cover md:rounded-full md:shadow-2xl">
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
