import PropTypes from "prop-types";
import { Heading } from "@/features/ui/Heading";
import { Link } from "react-router-dom";
import { Button } from "@/features/ui";
import Icon from "@/assets/icons/Icon";

export const RecipeDetails = ({ recipe }) => {
  const Card = ({ children, className }) => {
    return (
      <div
        className={`${className} card bg-earlyDawn-50 p-9 rounded-2xl text-xl my-6 shadow-lg`}
      >
        {children}
      </div>
    );
  };

  const Description = ({ description }) => {
    const words = recipe.description.split(" ");

    const title = `${words[0]} ${words[1]}...`;
    const body = words.slice(2).join(" ");

    return description ? (
      <div className="description">
        <h2 className="text-clamp-h2 not-italic">{title}</h2>
        <p>{body}</p>
      </div>
    ) : null;
  };

  const Topics = ({ topics }) => {
    return (
      <div className="tags">
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
    return (
      <div className="tags">
        <strong>Tags: </strong>
        {tags.map((tag, index) => (
          <>
            <Link
              to={`/search?q=${tag.name}`}
              className="text-watermelon font-bold"
              key={tag.name}
            >
              {tag.display_name}
            </Link>
            {index !== recipe.tags.length - 1 ? ", " : ""}
          </>
        ))}
      </div>
    );
  };

  const QuickLink = ({ label, to }) => {
    return (
      <Button
        action={to}
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
      <div className="recipe-video">
        <video controls className="rounded-xl w-[360px] max-w-full">
          {sources}
        </video>
      </div>
    );
  };

  const Section = ({ list, name }) => {
    const components = list.map((component, index) => {
      console.log(component);
      const quantity = component.measurements[0].quantity;
      const unit = component.measurements[0].unit;
      const isPlural = quantity > 1 ? true : false;
      console.log(isPlural);
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
        <Heading level="h2" variant="tangerine" id="ingredients">
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

  return (
    <div className="page-wrapper bg-sky">
      <div className="title-wrapper bg-title-cutout bg-cover bg-no-repeat p-4 pb-12">
        <Heading level="h1" variant="lava" className="pl-6 pt-6 leading-[1]">
          {recipe.name}
        </Heading>
        <hr className="mb-1 mt-3 h-2 w-[40%] rounded-full border-none bg-gradient-tangerine-diagonal" />
      </div>
      <div className="p-10">
        <Card className="intro-card">
          <div>
            <p>
              <Description description={recipe.description} />
            </p>
          </div>
          <img
            src={recipe.thumbnail_url}
            alt={recipe.name}
            className="h-[270px] w-[270px] rounded-full object-cover rotate-12"
          />
        </Card>
        <Card className="quick-links-card">
          <Heading level="h4" variant="lava">
            Filed Under
          </Heading>
          {recipe.topics && <Topics topics={recipe.topics} />}
          <Tags tags={recipe.tags} />
          <Heading level="h4" variant="lava" className="pt-4">
            Quick Links
          </Heading>
          <div className="quick-links">
            <QuickLink to="#ingredients" label="Ingredients" />
            <QuickLink to="#preparation" label="Preparation" />
            <QuickLink to="#nutrition" label="Nutrition" />
            <QuickLink to="#tops" label="Tips" />
          </div>
        </Card>
        <RecipeVideo
          videoUrl={recipe.video_url}
          renditions={recipe.renditions}
        />
        <Card className="ingredients-card">
          <IngredientSections sections={recipe.sections} />
        </Card>
      </div>
    </div>
  );
};

RecipeDetails.propTypes = {
  recipe: PropTypes.object,
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
};

export default RecipeDetails;
