import PropTypes from "prop-types";

export const Heading = (props) => {
  const { level, variant, className, children, ...attributes } = props;

  let textSizes = "1rem";
  switch (level) {
    case "h1":
      // textSizes = "text-[5.5rem] md:text-[8rem] xl:text-[8rem]";
      textSizes = "text-clamp-h1";
      break;
    case "h2":
      // textSizes = "text-[3rem] md:text-[4rem] xl:text-[5rem]";
      textSizes = "text-clamp-h2";
      break;
    case "h3":
      // textSizes = "text-[2.5rem] md:text-[3rem] xl:text-[4rem]";
      textSizes = "text-clamp-h3";
      break;
    case "h4":
      // textSizes = "text-[2rem] md:text-[2.5rem] xl:text-[3rem]";
      textSizes = "text-clamp-h4";
      break;
    default:
      break;
  }

  const baseClasses =
    "font-display font-bold text-transparent bg-clip-text text-shadow text-stroke";

  const variantsLookup = {
    sky: "bg-gradient-sky-diagonal",
    watermelon: "bg-gradient-watermelon-diagonal",
    tangerine: "bg-gradient-tangerine-diagonal",
    lava: "bg-gradient-lava-diagonal",
  };

  const CustomTag = `${level}`;

  return (
    <CustomTag
      {...attributes}
      className={`${baseClasses} ${textSizes} ${variantsLookup[variant]} ${className}`}
    >
      {children}
    </CustomTag>
  );
};

Heading.defaultProps = {
  level: "h1",
  variant: "sky",
};

Heading.propTypes = {
  level: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
