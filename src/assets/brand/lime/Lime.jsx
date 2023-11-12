import PropTypes from "prop-types";
import { Picture } from "@/features/ui";

// WebP Imports
import Webp111 from "./lime-111w.webp";
import Webp167 from "./lime-167w.webp";
import Webp279 from "./lime-279w.webp";
import Webp368 from "./lime-368w.webp";
import Webp557 from "./lime-557w.webp";
import Webp836 from "./lime-836w.webp";
import Webp891 from "./lime-891w.webp";
import Webp1003 from "./lime-1003w.webp";
import Webp1114 from "./lime-1114w.webp";

// PNG Imports
import Png111 from "./lime-111w.png";
import Png167 from "./lime-167w.png";
import Png279 from "./lime-279w.png";
import Png368 from "./lime-368w.png";
import Png557 from "./lime-557w.png";
import Png836 from "./lime-836w.png";
import Png891 from "./lime-891w.png";
import Png1003 from "./lime-1003w.png";
import Png1114 from "./lime-1114w.png";

const files = {
  webp: {
    111: Webp111,
    167: Webp167,
    279: Webp279,
    368: Webp368,
    557: Webp557,
    836: Webp836,
    891: Webp891,
    1003: Webp1003,
    1114: Webp1114,
  },
  png: {
    111: Png111,
    167: Png167,
    279: Png279,
    368: Png368,
    557: Png557,
    836: Png836,
    891: Png891,
    1003: Png1003,
    1114: Png1114,
  },
};

const Lime = ({ resolution = 360, alt = "Lemons and Lime", className }) => {
  return (
    <Picture
      alt={alt}
      resolution={resolution}
      files={files}
      className={className}
    />
  );
};

Lime.propTypes = {
  alt: PropTypes.string,
  resolution: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

export default Lime;
