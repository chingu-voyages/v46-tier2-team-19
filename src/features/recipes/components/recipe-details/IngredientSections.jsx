import PropTypes from "prop-types";
import { Heading } from "@/features/ui";
import { Section } from "./Section";
import Lime from "@/assets/brand/lime/Lime";

export const IngredientSections = ({ sections }) => {
  return (
    <div>
      <Heading level="h2" variant="tangerine">
        Ingredients
      </Heading>
      <div className="md:columns-2 lg:columns-1 relative pb-40">
        {sections.map((section, index) => {
          return (
            <Section
              key={index}
              list={section.components}
              name={section.name}
            />
          );
        })}
        <Lime className="absolute -bottom-16 -right-8 md:-right-[2.75rem] max-w-[50%]" />
      </div>
    </div>
  );
};

IngredientSections.propTypes = {
  sections: PropTypes.array,
};
