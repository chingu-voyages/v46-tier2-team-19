import PropTypes from "prop-types";
import { Heading } from "@/features/ui";

// Section is the term the Tasty api uses for an individual ingredient for a recipe component
export const Section = ({ list, name }) => {
  const components = list.map((component, index) => {
    const quantity = component.measurements[0].quantity;
    const unit = component.measurements[0].unit;
    const isPlural = quantity > 1 ? true : false;
    const measurement = (
      <span className="measurement text-tangerine font-bold font-open-sans">
        <span className="quantity">
          {quantity && quantity !== "0" ? quantity + " " : "-"}
        </span>
        <span className="unit">
          {isPlural ? unit.display_plural + " " : unit.display_singular + " "}
        </span>
      </span>
    );
    const name =
      isPlural && unit.display_plural === ""
        ? component.ingredient.display_plural + " "
        : component.ingredient.display_singular + " ";
    const note = component.extra_comment ? ` (${component.extra_comment})` : "";
    return (
      <li key={index}>
        {measurement}
        {name}
        {note}
      </li>
    );
  });
  return (
    <div className="recipe-component py-2 break-inside-avoid">
      <Heading level="h4" variant="lava">
        {name || "You'll Need:"}
      </Heading>
      <ul>{components}</ul>
    </div>
  );
};

Section.propTypes = {
  list: PropTypes.object,
  name: PropTypes.string,
};
