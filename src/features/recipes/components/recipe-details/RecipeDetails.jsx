import PropTypes from "prop-types";
import { Heading } from "@/features/ui";

// Page Components
import { IntroCard } from "./IntroCard";
import { Card } from "./Card";
import { Tags } from "./Tags";
import { QuickLink } from "./QuickLink";
import { RecipeVideo } from "./RecipeVideo";
import { RecipeDifficultyCard } from "./RecipeDifficultyCard";
import { IngredientSections } from "./IngredientSections";
import { Instructions } from "./Instructions";
import { FavoriteButton } from "./FavoriteButton";
import { NutritionSection } from "./Nutrition";
import { Tips } from "./Tips";

export const RecipeDetails = ({ recipe }) => {
  return (
    <div className="page-wrapper bg-sky">
      <div className="p-4 pb-12 bg-no-repeat bg-cover title-wrapper bg-title-cutout">
        <Heading level="h1" variant="lava" className="pl-6 pt-6 leading-[1]">
          {recipe.name}
        </Heading>
        <hr className="mb-1 mt-3 h-2 w-[40%] rounded-full border-none bg-gradient-tangerine-diagonal" />
      </div>

      <div className="page-body p-5 md:p-8 md:pt-0 xl:p-10 md:grid md:grid-cols-12 md:grid-rows-10 md:gap-10">
        <IntroCard
          description={recipe.description}
          imageUrl={recipe.thumbnail_url}
          name={recipe.name}
        />
        <Card className="quick-links-card flex flex-col self-start md:col-start-1 md:col-end-7 md:row-start-1 md:row-end-3 md:flex lg:col-end-5 lg:row-end-3 lg:self-auto 2xl:col-end-4 md:[&_.card]:my-0">
          <Heading level="h4" variant="lava">
            Filed Under
          </Heading>
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
          <FavoriteButton recipe={recipe} />
        </Card>
        <RecipeVideo
          videoUrl={recipe.video_url}
          renditions={recipe.renditions}
          className="mb-4 outline-4 md:col-start-7 md:col-end-13 md:row-start-1 lg:col-start-1 lg:col-end-5 lg:row-start-3 lg:-mx-4 lg:-mb-4 2xl:col-end-4"
        />
        <Card className="difficulty-card md:col-start-7 md:col-end-13 md:row-start-2 lg:col-start-5 2xl:col-start-4">
          <RecipeDifficultyCard tags={recipe.tags} />
        </Card>
        <Card
          className="ingredients-card md:col-start-1 md:col-end-13 lg:col-start-5 lg:col-end-13 lg:row-span-2 2xl:col-start-4"
          id="ingredients"
        >
          <IngredientSections sections={recipe.sections} />
        </Card>
        <Card
          className="instructions-card md:col-start-1 md:col-end-13 lg:col-start-5 lg:col-end-13 2xl:col-start-4"
          id="preparation"
        >
          <Instructions instructions={recipe.instructions} />
        </Card>
        <Card
          id="nutrition"
          className=" md:col-start-1 md:col-end-13 lg:col-start-5 lg:col-end-13 2xl:col-start-4"
        >
          <Heading level="h2" variant="sky">
            Nutrition
          </Heading>
          <NutritionSection nutrition={recipe.nutrition} />
        </Card>
        <Card
          id="tips"
          className={`md:col-start-1 md:col-end-13 lg:col-start-1 lg:col-end-5 ${
            recipe.video_url ? "lg:row-start-4" : "lg:row-start-3"
          } lg:row-end-7 lg:self-start 2xl:col-end-4 bg-gradient-to-bl from-earlyDawn-50 to-watermelon-200`}
        >
          <Heading level="h2" variant="lava">
            Tips
          </Heading>
          <Tips tips={recipe.tips} />
        </Card>
      </div>
    </div>
  );
};

RecipeDetails.propTypes = {
  recipe: PropTypes.object,
};

export default RecipeDetails;
