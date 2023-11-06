import PropTypes from "prop-types";
import { FetchTipsById } from "../../api";
import { LoadingState } from "@/features/ui";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Tips = ({ recipeId }) => {
  const { data: tips, isLoading, isError, error } = FetchTipsById(recipeId);

  if (isLoading) {
    return <LoadingState />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      showThumbs={false}
      showStatus={false}
      showIndicators={true}
      dynamicHeight={false}
      stopOnHover={true}
      className="shadow-xl bg-tangerine-300 rounded-xl"
    >
      {tips.map((tip) => (
        <div key={tip.tip_id}>
          <TipCard {...tip} />
        </div>
      ))}
    </Carousel>
  );
};

const TipCard = ({
  tip_body,
  author_name,
  author_username,
  author_avatar_url,
  updated_at,
}) => {
  const RenderYearsSinceTimeStamp = (timeStamp) => {
    const timeStampDate = new Date(timeStamp * 1000);
    const currentDate = new Date();
    const differenceInMilliseconds = currentDate - timeStampDate;
    const differenceInYears =
      differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365);
    const fullYears = Math.round(differenceInYears);

    return `${fullYears} years ago`;
  };

  return (
    <div className="flex flex-col w-full p-5 cursor-pointer">
      <div className="flex items-center gap-2">
        <div>
          <img
            src={author_avatar_url}
            className="object-cover w-6 h-6 rounded-full"
          />
        </div>
        <p className="text-[18px] font-bold">
          {author_name ? author_name : author_username}
        </p>
      </div>
      <div className="flex flex-col items-start p-2">
        <p className="tracking-wide text-lava-900 text-[14px] ">
          &#34;{tip_body}&#34;
        </p>
      </div>
      <div>
        <p className="text-sm">{RenderYearsSinceTimeStamp(updated_at)}</p>
      </div>
    </div>
  );
};
Tips.propTypes = {
  recipeId: PropTypes.number,
};

TipCard.propTypes = {
  tip_body: PropTypes.string,
  author_avatar_url: PropTypes.string,
  author_name: PropTypes.string,
  author_username: PropTypes.string,
  updated_at: PropTypes.number,
};
