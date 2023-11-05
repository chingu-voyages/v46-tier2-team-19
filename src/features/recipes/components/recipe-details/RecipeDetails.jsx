import PropTypes from "prop-types";

import { Heading } from "@/features/ui";

// Page Components
import { Description } from "./Description";
import { Card } from "./Card";
import { RecipeImage } from "./RecipeImage";
import { Topics } from "./Topics";
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
      <div className="title-wrapper bg-title-cutout bg-cover bg-no-repeat p-4 pb-12">
        <Heading level="h1" variant="lava" className="pl-6 pt-6 leading-[1]">
          {recipe.name}
        </Heading>
        <hr className="mb-1 mt-3 h-2 w-[40%] rounded-full border-none bg-gradient-tangerine-diagonal" />
      </div>

      <FavoriteButton recipe={recipe} />

      <div className="page-body p-5 md:p-8 md:pt-0 xl:p-10 md:grid md:grid-cols-4 md:grid-rows-10 md:gap-10">
        <Card className="intro-card md:col-start-2 md:col-end-5">
          <div className="intro-wrapper flex-row-reverse gap-4 md:flex">
            <RecipeImage src={recipe.thumbnail_url} alt={recipe.name} />
            <Description description={recipe.description} />
          </div>
        </Card>
        <Card className="quick-links-card flex flex-col md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3 md:flex md:[&_.card]:my-0">
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
        <RecipeVideo
          videoUrl={recipe.video_url}
          renditions={recipe.renditions}
          className="md:col-start-1 md:row-start-3"
        />
        <Card className="difficulty-card md:col-start-2 md:col-end-5 md:row-start-2">
          <RecipeDifficultyCard tags={recipe.tags} />
        </Card>
        <Card
          className="ingredients-card md:col-start-1 md:col-end-5 md:row-start-3 md:row-end-5 xl:col-start-2 xl:col-end-5"
          id="ingredients"
        >
          <IngredientSections sections={recipe.sections} />
        </Card>
        <Card
          className="instructions-card md:col-start-2 md:col-end-5"
          id="preparation"
        >
          <Instructions instructions={recipe.instructions} />
        </Card>
        <Card id="nutrition" className="md:col-start-2 md:col-end-5">
          <Heading level="h2" variant="sky">
            Nutrition
          </Heading>
          <NutritionSection nutrition={recipe.nutrition} />
        </Card>
        <Card
          id="tips"
          className="md:col-start-1 md:col-end-2 md:row-start-4 md:row-end-6 md:align-self-start"
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
