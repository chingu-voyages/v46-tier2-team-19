import PropTypes from "prop-types";
import { Picture } from "@/features/ui";

// WebP Imports
import Webp59 from "./lime-59w.webp";
import Webp147 from "./lime-147w.webp";
import Webp194 from "./lime-194w.webp";
import Webp295 from "./lime-295w.webp";
import Webp442 from "./lime-442w.webp";
import Webp471 from "./lime-471w.webp";
import Webp589 from "./lime-589w.webp";

// PNG Imports
import Png59 from "./lime-59w.png";
import Png147 from "./lime-147w.png";
import Png194 from "./lime-194w.png";
import Png295 from "./lime-295w.png";
import Png442 from "./lime-442w.png";
import Png471 from "./lime-471w.png";
import Png589 from "./lime-589w.png";

const files = {
  webp: {
    59: Webp59,
    147: Webp147,
    194: Webp194,
    295: Webp295,
    442: Webp442,
    471: Webp471,
    589: Webp589,
  },
  png: {
    59: Png59,
    147: Png147,
    194: Png194,
    295: Png295,
    442: Png442,
    471: Png471,
    589: Png589,
  },
};

const PlantsTL = ({ resolution = 360, alt = "Green Leaves", className }) => {
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
