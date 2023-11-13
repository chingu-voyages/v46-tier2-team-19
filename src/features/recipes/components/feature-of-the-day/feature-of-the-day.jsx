// import { downArrow } from "@/assets";
import { Heading, Button, Icon } from "@/features/ui";
import { FeatureChickenRecipe } from "@/assets";
import { useNavigate } from "react-router-dom";
export const FeatureOfTheDay = () => {
  const navigate = useNavigate();

  const handleNavigate = () => navigate("/recipes/3194");
  return (
    <div className="w-full mx-auto h-1/2">
      <Heading
        level="h1"
        variant="watermelon"
        className="text-center underline decoration-dashed decoration-tangerine-400 underline-offset-[24px] balance"
      >
        Recipe of the day
      </Heading>
      <div className="flex flex-col items-center justify-center px-4 py-6 lg:space-x-6 lg:flex-row">
        <img
          src={FeatureChickenRecipe}
          className="object-contain w-64 rounded-2xl mb-8"
        />
        <div className="flex flex-col max-w-lg text-left">
          <Heading
            level="h3"
            variant="tangerine"
            className="tracking-tight balance"
          >
            Roasted Chicken And Sweet Potatoes Recipe
          </Heading>
          <p className="tracking-tight font-rasa">
            Your ingredients, our creativity. Share what&apos;s in your kitchen,
            and we&apos;ll conjure a delectable recipe just for you. Let&apos;s
            cook up some magic together Here we have the recipe of the day for
            your delight!
          </p>
          <Button
            variant="primary"
            size="large"
            className="w-full mt-4 lg:w-1/2 mb-10"
            onClick={handleNavigate}
          >
            <span className="align-center w-full">See the Recipe</span>
            <Icon name="right-arrow" className="transform scale-125" />
          </Button>
        </div>
      </div>
    </div>
  );
};
