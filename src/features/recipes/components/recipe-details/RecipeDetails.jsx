import PropTypes from "prop-types";
import { Heading } from "@/features/ui/Heading";
import { Link } from "react-router-dom";
import { Button } from "@/features/ui";
import Icon from "@/assets/icons/Icon";

export const RecipeDetails = ({ recipe }) => {
  const Card = ({ children, className, id }) => {
    return (
      <div
        className={`${className} card my-6 md:my-10 rounded-2xl bg-earlyDawn-50 p-6 text-xl shadow-lg md:p-9`}
        id={id}
      >
        {children}
      </div>
    );
  };

  const Description = ({ description }) => {
    const words = recipe.description.split(" ");

    // Be smart about title cutoff...
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
      <div className="description">
        <Heading level="h2" variant="lava" className="leading-none">
          <span className={title.length > 10 ? "text-clamp-h3" : ""}>
            {title}
          </span>
        </Heading>
        <p className={`${body.length > 100 ? "" : "text-2xl"} italic`}>
          {body}
        </p>
      </div>
    ) : null;
  };

  const RecipeImage = ({ src, alt }) => {
    return (
      <div>
        <div className="picture-wrapper -mt-6 mb-4 box-content flex justify-center overflow-visible border-b-[.3rem] border-dashed border-tangerine-500 pb-6 md:-mr-20 md:-mt-16 md:h-[17rem] md:w-[17rem] md:rotate-12 md:rounded-full md:border-[.5rem] md:p-3 xl:h-[25rem] xl:w-[25rem]">
          <picture className="-mx-6 block overflow-clip rounded-t-xl object-cover md:shadow-2xl md:h-[17rem] md:w-[17rem] md:rounded-full xl:h-[25rem] xl:w-[25rem]">
            <img src={src} alt={alt} className="w-full h-full object-cover" />
          </picture>
        </div>
      </div>
    );
  };

  const Topics = ({ topics }) => {
    if (topics.length === 0) return null;
    return (
      <div className="topics">
        <strong>Topics: </strong>
        {topics.map((topic, index) => {
          return (
            <>
              <Link
                to={`/search?q=${topic.slug}`}
                className="text-watermelon font-bold"
                key={topic.name}
              >
                {topic.name}
              </Link>
              {index !== recipe.topics.length - 1 ? ", " : ""}
            </>
          );
        })}
      </div>
    );
  };

  const Tags = ({ tags }) => {
    const filteredCategories = [
      "equipment",
      "appliance",
      "difficulty",
      "business_tags",
    ];
    const displayTags = tags.filter(
      (tag) => !filteredCategories.includes(tag.type),
    );
    if (displayTags.length === 0) return null;
    return (
      <div className="tags">
        <strong>Tags: </strong>
        {displayTags.map((tag, index) => {
          console.log(tag);
          return (
            <>
              <Link
                to={`/search?q=${tag.name}`}
                className="text-watermelon font-bold"
                key={tag.name}
              >
                {tag.display_name}
              </Link>
              {index !== displayTags.length - 1 ? ", " : ""}
            </>
          );
        })}
      </div>
    );
  };

  const QuickLink = ({ label, to }) => {
    return (
      <Button
        onClick={() => {
          console.log("Scrolling to ", to);
          document.querySelector(to)?.scrollIntoView();
        }}
        className="w-full text-center justify-between text-lg my-4"
      >
        <div className="inline-block w-full">{label}</div>
        <Icon name="right-arrow" className="text-2xl" />
      </Button>
    );
  };

  const RecipeVideo = ({ videoUrl, renditions }) => {
    if (!videoUrl) return null;
    const sources = Object.values(renditions).map((src, index) => {
      return <source key={index} type={src.content_type} src={src.url} />;
    });
    return (
      <div className="recipe-video mb-4">
        <video controls className="rounded-xl w-full md:w-[360px] max-w-full">
          {sources}
        </video>
      </div>
    );
  };

  const RecipeDifficultyCard = ({ tags }) => {
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
      (tag) =>
        tag.type === "difficulty" && tag.name === "5_ingredients_or_less",
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

  // Section is the term the Tasty api uses for an individual ingredient for a recipe component
  const Section = ({ list, name }) => {
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
      const note = component.extra_comment
        ? ` (${component.extra_comment})`
        : "";
      return (
        <li key={index}>
          {measurement}
          {name}
          {note}
        </li>
      );
    });
    return (
      <div className="recipe-component py-2">
        <Heading level="h4" variant="lava">
          {name || "You'll Need:"}
        </Heading>
        <ul>{components}</ul>
      </div>
    );
  };

  const IngredientSections = ({ sections }) => {
    return (
      <div>
        <Heading level="h2" variant="tangerine">
          Ingredients
        </Heading>
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
    );
  };

  const Instructions = ({ instructions }) => {
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

  return (
    <div className="page-wrapper bg-sky">
      <div className="title-wrapper bg-title-cutout bg-cover bg-no-repeat p-4 pb-12">
        <Heading level="h1" variant="lava" className="pl-6 pt-6 leading-[1]">
          {recipe.name}
        </Heading>
        <hr className="mb-1 mt-3 h-2 w-[40%] rounded-full border-none bg-gradient-tangerine-diagonal" />
      </div>
      <div className="p-5 md:p-8 md:pt-0 xl:p-10">
        <Card className="intro-card">
          <div className="md:flex flex-row-reverse gap-4">
            <RecipeImage src={recipe.thumbnail_url} alt={recipe.name} />
            <Description description={recipe.description} />
          </div>
        </Card>
        <div className="md:flex gap-6 md:[&_.card]:my-0">
          <Card className="quick-links-card">
            <Heading level="h4" variant="lava">
              Filed Under
            </Heading>
            <Topics topics={recipe.topics} />
            <Tags tags={recipe.tags} />
            <Heading level="h4" variant="lava" className="pt-4">
              Quick Links
            </Heading>
            <div className="quick-links">
              <QuickLink to="#ingredients" label="Ingredients" />
              <QuickLink to="#preparation" label="Preparation" />
              <QuickLink to="#nutrition" label="Nutrition" />
              <QuickLink to="#tips" label="Tips" />
            </div>
          </Card>
          <div className="flex flex-col justify-stretch items-stretch">
            <RecipeVideo
              videoUrl={recipe.video_url}
              renditions={recipe.renditions}
            />
            <Card className="difficulty-card self-stretch">
              <RecipeDifficultyCard tags={recipe.tags} />
            </Card>
          </div>
        </div>
        <Card className="ingredients-card" id="ingredients">
          <IngredientSections sections={recipe.sections} />
        </Card>
        <Card className="instructions-card" id="preparation">
          <Instructions instructions={recipe.instructions} />
        </Card>
        <Card id="nutrition">
          <Heading level="h2" variant="sky">
            Nutrition
          </Heading>
        </Card>
        <Card id="tips">
          <Heading level="h2" variant="lava">
            Tips
          </Heading>
        </Card>
      </div>
    </div>
  );
};

RecipeDetails.propTypes = {
  recipe: PropTypes.object,
  id: PropTypes.string,
  topics: PropTypes.object,
  tags: PropTypes.object,
  description: PropTypes.string,
  label: PropTypes.string,
  to: PropTypes.string,
  videoUrl: PropTypes.string,
  children: PropTypes.object,
  className: PropTypes.string,
  renditions: PropTypes.object,
  sections: PropTypes.object,
  list: PropTypes.object,
  name: PropTypes.string,
  instructions: PropTypes.object,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default RecipeDetails;
