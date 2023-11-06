import PropTypes from "prop-types";
import { Button, Icon } from "@/features/ui";

export const QuickLink = ({ label, to }) => {
  return (
    <Button
      onClick={() => {
        console.log("Scrolling to ", to);
        document.querySelector(to)?.scrollIntoView();
      }}
      className="w-full text-center justify-between text-lg my-4"
    >
      <div className="inline-block w-full">{label}</div>
      <Icon name="right-arrow" className="text-2xl" />
    </Button>
  );
};

QuickLink.propTypes = {
  label: PropTypes.string,
  to: PropTypes.string,
};
