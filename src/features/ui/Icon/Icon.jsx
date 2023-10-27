/* eslint-disable react/prop-types */
import { icons } from "@/assets/icons/index";

export const Icon = ({
  name,
  className,
  containerClassName,
  color,
  ...props
}) => {
  name = name[0].toUpperCase() + name.slice(1);
  name = name.replace(/-[A-Za-z]/g, (m) => m[1].toUpperCase());
  if (!icons[name]) return null;
  if (!className || className.indexOf("w-") === -1) className += " w-[.8em]";
  return (
    <span className={`inline-block ${containerClassName}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 128 128"
        fill={color || "currentColor"}
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        {icons[name]}
      </svg>
    </span>
  );
};
