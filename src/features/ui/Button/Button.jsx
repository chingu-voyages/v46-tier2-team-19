import PropTypes from "prop-types";

export const Button = (props) => {
  const { variant, size, className, children, ...attributes } = props;

  const baseClasses =
    "flex items-center gap-3 rounded-full px-6 font-body font-bold shadow-lg transition-all duration-200 ease-in-out active:opacity-70 focus:outline-none disabled:bg-gradient-gray-diagonal disabled:active:opacity-100";

  const variantsLookup = {
    primary:
      "bg-gradient-tangerine-diagonal text-white hover:bg-gradient-lilypad-diagonal focus:ring-tangerine",
    secondary:
      "bg-slate-50 text-sky-500 border-4 border-sky-500 hover:bg-sky-500 hover:text-slate-50 active:opactity-100 focus:ring-sky-500",
  };

  const sizesLookup = {
    small: "px-3 py-1.5 text-sm focus:ring-2 focus:ring-offset-1",
    medium: "px-5 py-3 text-base focus:ring-2 focus:ring-offset-2",
    large: "px-8 py-4 text-lg focus:ring focus:ring-offset-2",
  };

  return (
    <button
      {...attributes}
      className={`${baseClasses} ${variantsLookup[variant]} ${sizesLookup[size]} ${className}`}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: "primary",
  size: "medium",
};

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
