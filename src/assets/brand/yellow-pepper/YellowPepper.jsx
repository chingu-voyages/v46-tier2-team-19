import PropTypes from "prop-types";
import { Picture } from "@/features/ui";

// WebP Imports
import Webp48 from "./yellow-pepper-48w.webp";
import Webp79 from "./yellow-pepper-79w.webp";
import Webp105 from "./yellow-pepper-105w.webp";
import Webp159 from "./yellow-pepper-159w.webp";
import Webp238 from "./yellow-pepper-238w.webp";
import Webp317 from "./yellow-pepper-317w.webp";

// PNG Imports
import Png48 from "./yellow-pepper-48w.png";
import Png79 from "./yellow-pepper-79w.png";
import Png105 from "./yellow-pepper-105w.png";
import Png159 from "./yellow-pepper-159w.png";
import Png238 from "./yellow-pepper-238w.png";
import Png317 from "./yellow-pepper-317w.png";

const files = {
  webp: {
    48: Webp48,
    79: Webp79,
    105: Webp105,
    159: Webp159,
    238: Webp238,
    317: Webp317,
  },
  png: {
    48: Png48,
    79: Png79,
    105: Png105,
    159: Png159,
    238: Png238,
    317: Png317,
  },
};

const YellowPepper = ({
  resolution = 360,
  alt = "A Large Yellow Pepper",
  className,
}) => {
  return (
    <Picture
      alt={alt}
      resolution={resolution}
      files={files}
      className={className}
    />
  );
};

YellowPepper.propTypes = {
  alt: PropTypes.string,
  resolution: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

export default YellowPepper;
