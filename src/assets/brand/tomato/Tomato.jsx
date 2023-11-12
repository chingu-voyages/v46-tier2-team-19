import PropTypes from "prop-types";
import { Picture } from "@/features/ui";

// WebP Imports
import Webp29 from "./tomato-29w.webp";
import Webp44 from "./tomato-44w.webp";
import Webp73 from "./tomato-73w.webp";
import Webp145 from "./tomato-145w.webp";
import Webp218 from "./tomato-218w.webp";
import Webp290 from "./tomato-290w.webp";

// PNG Imports
import Png29 from "./tomato-29w.png";
import Png44 from "./tomato-44w.png";
import Png73 from "./tomato-73w.png";
import Png145 from "./tomato-145w.png";
import Png218 from "./tomato-218w.png";
import Png290 from "./tomato-290w.png";

const files = {
  webp: {
    29: Webp29,
    44: Webp44,
    73: Webp73,
    145: Webp145,
    218: Webp218,
    290: Webp290,
  },
  png: {
    29: Png29,
    44: Png44,
    73: Png73,
    145: Png145,
    218: Png218,
    290: Png290,
  },
};

const Tomato = ({ resolution = 360, alt = "A Tomato", className }) => {
  return (
    <Picture
      alt={alt}
      resolution={resolution}
      files={files}
      className={className}
    />
  );
};

Tomato.propTypes = {
  alt: PropTypes.string,
  resolution: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

export default Tomato;
