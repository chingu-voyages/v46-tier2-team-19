import PropTypes from "prop-types";

export const Card = ({ children, className, id }) => {
  return (
    <div
      className={`${className} card my-6 md:my-0 rounded-2xl bg-earlyDawn-50 p-6 text-xl shadow-lg md:p-9`}
      id={id}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.object,
  className: PropTypes.string,
  id: PropTypes.string,
};
