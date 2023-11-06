import PropTypes from "prop-types";
import { Heading } from "@/features/ui";

export const RecipeDifficultyCard = ({ tags }) => {
  // Available cards:
  // Difficulty: easy
  // Time: under_30_minutes || under_30_minutes || under_45_minutes || under_1_hour
  // Complexity: 5_ingredients_or_less
  const quickStrings = [
    "under_30_minutes",
    "under_30_minutes",
    "under_45_minutes",
    "under_1_hour",
  ];
  const easy = tags.find(
    (tag) => tag.type === "difficulty" && tag.name === "easy",
  );
  const quick = tags.find(
    (tag) => tag.type === "difficulty" && quickStrings.includes(tag.name),
  );
  const simple = tags.find(
    (tag) => tag.type === "difficulty" && tag.name === "5_ingredients_or_less",
  );
  return (
    <div className="difficulty-card-wrapper">
      {easy && (
        <Heading level="h4" variant="lava">
          Easy
        </Heading>
      )}
      {quick && (
        <Heading level="h4" variant="lava">
          Quick
        </Heading>
      )}
      {simple && (
        <Heading level="h4" variant="lava">
          Simple
        </Heading>
      )}
    </div>
  );
};

RecipeDifficultyCard.propTypes = {
  tags: PropTypes.object,
};
