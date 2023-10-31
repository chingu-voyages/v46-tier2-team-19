// import { downArrow } from "@/assets";
import { Heading, Button, Icon } from "@/features/ui";
import { FeatureRecipe } from "@/assets";
export const FeatureOfTheDay = () => {
  return (
    <div className="w-full pt-10 mx-auto h-1/2">
      <Heading
        level="h1"
        variant="watermelon"
        className="text-center underline decoration-dashed decoration-tangerine-400 underline-offset-[18px]"
      >
        Recipe of the day
      </Heading>
      <div className="flex flex-col items-center justify-center px-4 py-6 space-x-6 lg:flex-row">
        <img src={FeatureRecipe} className="w-64" />
        <div className="flex flex-col max-w-lg text-left">
          <Heading level="h3" variant="tangerine" className="tracking-tight">
            Roasted Chicken Recipe
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
            className="w-1/2 mt-4 lg:w-1/4"
          >
            Explore
            <Icon name="right-arrow" className="transform scale-125" />
          </Button>
        </div>
      </div>
    </div>
  );
};
