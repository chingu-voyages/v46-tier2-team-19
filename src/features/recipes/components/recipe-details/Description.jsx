import PropTypes from "prop-types";
import { Heading } from "@/features/ui/Heading";

export const Description = ({ description }) => {
  const words = description.split(" ");

  let titleLength = 2;

  const inflectionWords = [
    "is",
    "are",
    "was",
    "were",
    "has",
    "can",
    "at",
    "to",
    "for",
    "so",
    "tastes",
  ];

  let indexOfInflectionWord = words
    .slice(0, 6)
    .findIndex((w) => inflectionWords.includes(w));
  if (indexOfInflectionWord !== -1) {
    titleLength = indexOfInflectionWord;
  }

  const title = `${words.slice(0, titleLength).join(" ")}`;
  const body = words.slice(titleLength).join(" ");
  console.log("body length:", body.length);
  return description ? (
    <div className="description px-8 pt-2 md:pl-20">
      <Heading level="h2" variant="lava" className="leading-none">
        <span className={title.length > 10 ? "text-clamp-h3" : ""}>
          {title}
        </span>
      </Heading>
      <p
        className={`${body.length > 100 ? "" : "text-2xl"} italic md:text-2xl`}
      >
        {body}
      </p>
    </div>
  ) : null;
};

Description.propTypes = {
  description: PropTypes.string,
};
