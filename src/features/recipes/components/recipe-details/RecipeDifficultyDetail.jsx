import { Heading, Icon } from "@/features/ui";
import PropTypes from "prop-types";

const RecipeDifficultyDetail = ({ title, icon, text }) => {
  const className =
    "sm:border-r-2 " +
    "md:border-r-0 " +
    "lg:border-r-2 " +
    "last:border-r-0 " +
    "border-dotted " +
    "border-lava-300 " +
    "px-2 md:px-0 " +
    "lg:px-2 ";
  return (
    <div className={className}>
      <Heading level="h4" variant="lava">
        <Icon name={icon} className="text-black text-5xl -mb-3" /> {title}
      </Heading>
      <p className="ml-11 mt-2 sm:text-base xl:text-xl balance">{text}</p>
    </div>
  );
};

export default RecipeDifficultyDetail;

RecipeDifficultyDetail.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
};
