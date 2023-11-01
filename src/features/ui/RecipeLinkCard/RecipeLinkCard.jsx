import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Heading } from "@/features/ui";

export const RecipeLinkCard = ({
  src,
  alt,
  bgColor,
  bgGradient,
  position,
  link,
  text,
}) => {
  return (
    <Link
      to={link}
      className={`flex  ${position} w-[300px]   relative drop-shadow-2xl`}
    >
      <div
        className={`w-32 h-32  rounded-full ${bgColor} flex justify-center items-center z-10 `}
      >
        <div className="white-circle w-24 h-24 bg-white rounded-full flex justify-center items-center ">
          {" "}
          <img src={src} alt={alt} className="w-20" />{" "}
        </div>
      </div>

      <div
        className={`absolute ${bgGradient} h-24 w-52 top-4 right-0 rounded-tr-full rounded-br-full flex justify-center items-center  `}
      >
        <Heading
          level="h4"
          variant="lava"
          className="text-[18px] text-center p-4 w-40 "
        >
          {text}
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
  position: PropTypes.string,
  text: PropTypes.string,
  bgGradient: PropTypes,
};
