import PropTypes from "prop-types";
import { Picture } from "@/features/ui";

// WebP Imports
import Webp50 from "./plants-tl-50w.webp";
import Webp126 from "./plants-tl-126w.webp";
import Webp166 from "./plants-tl-166w.webp";
import Webp252 from "./plants-tl-252w.webp";
import Webp377 from "./plants-tl-377w.webp";
import Webp402 from "./plants-tl-402w.webp";
import Webp503 from "./plants-tl-503w.webp";

// PNG Imports
import Png50 from "./plants-tl-50w.png";
import Png126 from "./plants-tl-126w.png";
import Png166 from "./plants-tl-166w.png";
import Png252 from "./plants-tl-252w.png";
import Png377 from "./plants-tl-377w.png";
import Png402 from "./plants-tl-402w.png";
import Png503 from "./plants-tl-503w.png";

const files = {
  webp: {
    50: Webp50,
    126: Webp126,
    166: Webp166,
    252: Webp252,
    377: Webp377,
    402: Webp402,
    503: Webp503,
  },
  png: {
    50: Png50,
    126: Png126,
    166: Png166,
    252: Png252,
    377: Png377,
    402: Png402,
    503: Png503,
  },
};

const PlantsTL = ({ resolution = 166, alt = "Green Leaves", className }) => {
  return (
    <Picture
      alt={alt}
      resolution={resolution}
      files={files}
      className={className}
    />
  );
};

PlantsTL.propTypes = {
  alt: PropTypes.string,
  resolution: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

export default PlantsTL;
