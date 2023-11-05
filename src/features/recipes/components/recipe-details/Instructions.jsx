import PropTypes from "prop-types";
import { Heading } from "@/features/ui";

export const Instructions = ({ instructions }) => {
  return (
    <div className="instructions-wrapper">
      <Heading level="h2" variant="watermelon">
        Preparation
      </Heading>
      <ol className="list-decimal flex flex-col gap-6 ml-5">
        {instructions.map((step, index) => {
          const { display_text } = step;
          return (
            <li key={index} className="pl-4">
              {`${display_text}`}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

Instructions.propTypes = {
  instructions: PropTypes.array,
};
