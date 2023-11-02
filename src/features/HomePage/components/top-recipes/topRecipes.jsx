import {
  chickenWings,
  chocoPBChips,
  spicyChickenPizza,
  YumiWithSpatula,
} from "@/assets";

import { Heading } from "@/features/ui";
import { RecipeLinkCard } from "@/features/recipes";

export const TopRecipes = () => {
  return (
    <section className="top-recipes-section mt-[-2px] pb-8 bg-gradient-Top-recipes p-6 content-center">
      <Heading level="h2" variant="tangerine">
        Top Picks from Our Kitchen
      </Heading>
      <div className="flex flex-wrap gap-6 content-center justify-center xl:justify-start">
        <div className="recipe-link-cards-wrapper flex flex-wrap justify-around xl:content-end gap-x-2 gap-y-6 w-[300px] md:w-[50%] lg:w-[63%] xl:w-[75%]">
          <RecipeLinkCard
            text="Choco PB Chip Banana Muffins"
            src={chocoPBChips}
            variant="banana"
            link="/recipes/5813"
          />

          <RecipeLinkCard
            text="Spicy Chicken Pizza"
            src={spicyChickenPizza}
            variant="watermelon"
            link="/recipes/5149"
          />

          <RecipeLinkCard
            text="Chicken Wings"
            src={chickenWings}
            variant="tangerine"
            link="/recipes/5232"
          />
        </div>

        <YumiWithSpatula
          resolution="272"
          className="w-[272px] self-center xl:-mt-24 xl:max-w-[22%]"
          alt="Yumi holding a spatula surrounded by fruits"
        />
      </div>
    </section>
  );
};
