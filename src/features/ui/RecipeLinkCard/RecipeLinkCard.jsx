import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const RecipeLinkCard = ({ src, alt, bgColor, position, link, text }) => {
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
          <img src={src} alt={alt} className="w-[50px]" />{" "}
        </div>
      </div>

      <div
        className={`absolute ${bgColor} h-24 w-52 top-4 right-0 rounded-tr-full rounded-br-full flex justify-center items-center  `}
      >
        <h4 className="font-[open-sans] text-center text w-36 font-bold">
          {text}
        </h4>
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
};
