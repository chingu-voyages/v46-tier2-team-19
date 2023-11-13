import PropTypes from "prop-types";
import { Picture } from "@/features/ui";

// WebP Imports
import Webp180 from "./chef-carrots-180w.webp";
import Webp300 from "./chef-carrots-300w.webp";
import Webp396 from "./chef-carrots-396w.webp";
import Webp600 from "./chef-carrots-600w.webp";
import Webp900 from "./chef-carrots-900w.webp";
import Webp1200 from "./chef-carrots-1200w.webp";

// PNG Imports
import Png180 from "./chef-carrots-180w.png";
import Png300 from "./chef-carrots-300w.png";
import Png396 from "./chef-carrots-396w.png";
import Png600 from "./chef-carrots-600w.png";
import Png900 from "./chef-carrots-900w.png";
import Png1200 from "./chef-carrots-1200w.png";

const files = {
  webp: {
    180: Webp180,
    300: Webp300,
    396: Webp396,
    600: Webp600,
    900: Webp900,
    1200: Webp1200,
  },
  png: {
    180: Png180,
    300: Png300,
    396: Png396,
    600: Png600,
    900: Png900,
    1200: Png1200,
  },
};

const ChefCarrots = ({
  resolution = 300,
  alt = "Chef Carrots the Friendly Bunny",
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

ChefCarrots.propTypes = {
  alt: PropTypes.string,
  resolution: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

export default ChefCarrots;
