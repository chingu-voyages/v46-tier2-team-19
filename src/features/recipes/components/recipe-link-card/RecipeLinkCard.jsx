import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Heading } from "@/features/ui";

export const RecipeLinkCard = ({
  src,
  alt,
  bgColor,
  bgGradient,
  link,
  text,
  variant,
}) => {
  switch (variant) {
    case "tangerine":
      bgColor = "bg-[#fe7d1a]";
      bgGradient = "bg-gradient-tangerine-diagonal";
      break;
    case "banana":
      bgColor = "bg-[#FFC945]";
      bgGradient = "bg-gradient-banana-Top-Recipes";
      break;
    default: // "watermelon"
      bgColor = "bg-[#04c023]";
      bgGradient = "bg-gradient-watermelon-diagonal";
      break;
  }

  return (
    <Link to={link} className={`relative flex w-[300px] drop-shadow-2xl`}>
      <div
        className={`${bgColor} z-10 flex h-32 w-32 items-center justify-center rounded-full`}
      >
        <div className="white-circle flex h-24 w-24 items-center justify-center rounded-full bg-white">
          <img src={src} alt={alt} className="w-20" />
        </div>
      </div>

      <div
        className={`${bgGradient} absolute right-0 top-4 flex h-24 w-52 items-center justify-center rounded-br-full rounded-tr-full`}
      >
        <Heading level="h4" className="w-40 p-4 text-center">
          <span className="text-xl text-white font-['Open_Sans']">{text}</span>
        </Heading>
      </div>
    </Link>
  );
};

RecipeLinkCard.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  link: PropTypes.string,
  bgColor: PropTypes.string,
  text: PropTypes.string,
  variant: PropTypes.string,
  bgGradient: PropTypes.string,
};
