import PropTypes from "prop-types";
import { Heading, Icon } from "@/features/ui";

export const RecipeDifficultyCard = ({ tags }) => {
  // Available cards:
  // Difficulty: easy
  // Time: under_15_minutes || under_30_minutes || under_45_minutes || under_1_hour
  // Complexity: 5_ingredients_or_less

  const under15Minutes = tags.find((tag) => tag.name === "under_15_minutes");
  const under30Minutes = tags.find((tag) => tag.name === "under_30_minutes");
  const under45Minutes = tags.find((tag) => tag.name === "under_45_minutes");
  const under1Hour = tags.find((tag) => tag.name === "under_1_hour");

  const easy = tags.find(
    (tag) => tag.type === "difficulty" && tag.name === "easy",
  );

  let quickText = "";

  if (under15Minutes) quickText = "Under 15 Minutes";
  if (under30Minutes) quickText = "Under 30 Minutes";
  if (under45Minutes) quickText = "Under 45 Minutes";
  if (under1Hour) quickText = "Under 1 Hour";

  const simple = tags.find(
    (tag) => tag.type === "difficulty" && tag.name === "5_ingredients_or_less",
  );
  return (
    <div className="difficulty-card-wrapper flex gap-4 flex-col xl:flex-row">
      {easy && (
        <div>
          <Heading level="h4" variant="lava">
            <Icon name="easy" className="text-black text-5xl -mb-3" /> Easy
          </Heading>
          <p className="ml-11 mt-2">You&apos;ve got this!</p>
        </div>
      )}
      {quickText && (
        <div>
          <Heading level="h4" variant="lava">
            <Icon name="clock" className="text-black text-5xl -mb-3" /> Quick
          </Heading>
          <p className="ml-11 mt-2">{quickText}</p>
        </div>
      )}
      {simple && (
        <div>
          <Heading level="h4" variant="lava">
            <Icon
              name="stars"
              className="text-black text-4xl -mb-2 mx-[.4rem]"
            />{" "}
            Simple
          </Heading>
          <p className="ml-11 mt-2">5 Ingredients or Less</p>
        </div>
      )}
    </div>
  );
};

RecipeDifficultyCard.propTypes = {
  tags: PropTypes.array,
};
