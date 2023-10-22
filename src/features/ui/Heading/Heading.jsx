/* eslint-disable react/prop-types */

export const Heading = (props) => {
  const { level, variant, children, ...attributes } = props;

  let textSizes = "1rem";
  switch (level) {
    case "h1":
      textSizes = "text-[5.5rem] md:text-[8rem] xl:text-[8rem]";
      break;
    case "h2":
      textSizes = "text-[3rem] md:text-[4rem] xl:text-[5rem]";
      break;
    case "h3":
      textSizes = "text-[2.5rem] md:text-[3rem] xl:text-[4rem]";
      break;
    case "h4":
      textSizes = "text-[2rem] md:text-[2.5rem] xl:text-[3rem]";
      break;
    case "h5":
      textSizes = "text-[1.375rem] md:text-[1.5rem] xl:text-[1.5rem]";
      break;
    default:
      break;
  }

  const baseClasses = "font-display font-bold text-transparent bg-clip-text";

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
      className={`${baseClasses} ${textSizes} ${variantsLookup[variant]}`}
    >
      {children}
    </CustomTag>
  );
};

Heading.defaultProps = {
  level: "h1",
  variant: "sky",
};
