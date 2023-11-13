import PropTypes from "prop-types";
import ChefCarrots from "@/assets/brand/chef-carrots/ChefCarrots";
import RecipeDifficultyDetail from "./RecipeDifficultyDetail";

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
    <div className="relative flex min-h-[6rem] sm:justify-center pl-28 md:pl-[5rem] align-middle">
      <ChefCarrots
        resolution="180"
        className="pointer-events-none select-none w-36 h-56 md:h-auto max-w-[55%] md:bottom-[-3.75rem] md:left-[-4rem] -bottom-6 -left-4 absolute overflow-hidden"
      />
      <div className="difficulty-card-wrapper flex flex-col sm:items-center md:items-start lg:items-center sm:flex-row md:flex-col lg:flex-row">
        {easy && (
          <RecipeDifficultyDetail
            title="Easy"
            icon="easy"
            text="You've got this!"
          />
        )}
        {quickText && (
          <RecipeDifficultyDetail title="Quick" icon="clock" text={quickText} />
        )}
        {simple && (
          <RecipeDifficultyDetail
            title="Simple"
            icon="stars"
            text="5 Ingredients or Less"
          />
        )}
      </div>
    </div>
  );
};

RecipeDifficultyCard.propTypes = {
  tags: PropTypes.array,
};
