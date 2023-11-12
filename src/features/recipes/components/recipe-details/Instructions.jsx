import PropTypes from "prop-types";
import { Heading } from "@/features/ui";
import YumiWithBasket from "@/assets/brand/yumi-with-basket/YumiWithBasket";

export const Instructions = ({ instructions }) => {
  return (
    <div className="instructions-wrapper pr-[10rem]">
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
      <YumiWithBasket
        resolution="300"
        className="absolute -bottom-4 -right-6 max-w-[50%] w-[14rem]"
      />
    </div>
  );
};

Instructions.propTypes = {
  instructions: PropTypes.array,
};
