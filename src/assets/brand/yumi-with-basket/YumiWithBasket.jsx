import PropTypes from "prop-types";
import { Picture } from "@/features/ui";

// WebP Imports
import Webp180 from "./yumi-with-basket-180w.webp";
import Webp300 from "./yumi-with-basket-300w.webp";
import Webp360 from "./yumi-with-basket-360w.webp";
import Webp396 from "./yumi-with-basket-396w.webp";
import Webp600 from "./yumi-with-basket-600w.webp";
import Webp900 from "./yumi-with-basket-900w.webp";
import Webp960 from "./yumi-with-basket-960w.webp";
import Webp1200 from "./yumi-with-basket-1200w.webp";

// PNG Imports
import Png180 from "./yumi-with-basket-180w.png";
import Png300 from "./yumi-with-basket-300w.png";
import Png360 from "./yumi-with-basket-360w.png";
import Png396 from "./yumi-with-basket-396w.png";
import Png600 from "./yumi-with-basket-600w.png";
import Png900 from "./yumi-with-basket-900w.png";
import Png960 from "./yumi-with-basket-960w.png";
import Png1200 from "./yumi-with-basket-1200w.png";

const files = {
  webp: {
    180: Webp180,
    300: Webp300,
    360: Webp360,
    396: Webp396,
    600: Webp600,
    900: Webp900,
    960: Webp960,
    1200: Webp1200,
  },
  png: {
    180: Png180,
    300: Png300,
    360: Png360,
    396: Png396,
    600: Png600,
    900: Png900,
    960: Png960,
    1200: Png1200,
  },
};

const YumiWithBasket = ({
  resolution = 360,
  alt = "Yumi Holding a Basket of Fresh Vegetables",
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

YumiWithBasket.propTypes = {
  alt: PropTypes.string,
  resolution: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

export default YumiWithBasket;
