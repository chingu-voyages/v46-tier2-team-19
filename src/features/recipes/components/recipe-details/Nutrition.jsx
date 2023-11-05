import PropTypes from "prop-types";
import { Heading } from "@/features/ui";

export const NutritionSection = ({ nutrition }) => {
  if (!nutrition || Object.keys(nutrition).length === 0) {
    return <p>No nutritional information available.</p>;
  }
  const { updated_at, ...rest } = nutrition;
  return (
    <>
      <div className="flex flex-wrap justify-start lg:divide-x-2 lg:divide-sky-300">
        {Object.entries(rest).map(([key, value]) => {
          return (
            <div
              key={key}
              className="flex items-center gap-1 px-1 lg:gap-2 lg:flex-col lg:px-4"
            >
              <Heading level="h5" variant="sky">
                {key}
              </Heading>
              <p className="text-2xl font-semibold font-rasa text-sky-700">
                {value}
                {key === "calories" ? "" : "g"}
              </p>
            </div>
          );
        })}
      </div>
      <p className="pl-2 mt-2 text-xs font-rasa">
        {`Last updated on ${updated_at.slice(0, 10)}`}
      </p>
    </>
  );
};

NutritionSection.propTypes = {
  nutrition: PropTypes.array,
};
