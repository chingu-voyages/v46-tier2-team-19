import PropTypes from "prop-types";
import { Heading } from "@/features/ui";
import { Section } from "./Section";

export const IngredientSections = ({ sections }) => {
  return (
    <div>
      <Heading level="h2" variant="tangerine">
        Ingredients
      </Heading>
      <div className="columns-2">
        {sections.map((section, index) => {
          return (
            <Section
              key={index}
              list={section.components}
              name={section.name}
            />
          );
        })}
      </div>
    </div>
  );
};

IngredientSections.propTypes = {
  sections: PropTypes.array,
};
