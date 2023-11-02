import PropTypes from "prop-types";
import { Picture } from "@/features/ui";

// WebP Imports
import Webp240 from "./yumi-with-spoon-240w.webp";
import Webp360 from "./yumi-with-spoon-360w.webp";
import Webp600 from "./yumi-with-spoon-600w.webp";
import Webp1200 from "./yumi-with-spoon-1200w.webp";

// PNG Imports
import Png240 from "./yumi-with-spoon-240w.png";
import Png360 from "./yumi-with-spoon-360w.png";
import Png600 from "./yumi-with-spoon-600w.png";
import Png1200 from "./yumi-with-spoon-1200w.png";

const files = {
  webp: {
    240: Webp240,
    360: Webp360,
    600: Webp600,
    1200: Webp1200,
  },
  png: {
    240: Png240,
    360: Png360,
    600: Png600,
    1200: Png1200,
  },
};

const YumiWithSpoon = ({ resolution = 360, alt = "Chef Yumi", className }) => {
  return (
    <Picture
      alt={alt}
      resolution={resolution}
      files={files}
      className={className}
    />
  );
};

YumiWithSpoon.propTypes = {
  alt: PropTypes.string,
  resolution: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

export default YumiWithSpoon;
