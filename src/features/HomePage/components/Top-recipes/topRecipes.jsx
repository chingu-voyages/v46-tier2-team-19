// import { BananaLabel, ChickenLabel, FruitLabel } from "@/assets";
import { ChocoPBChip, SpicyChickenPizza, ChickenWings } from "@/assets";

import { RecipeLinkCard } from "@/features/ui";

import YumiWithspatula from "@/assets/brand/yumi-with-spatula/YumiWithSpatula";

export const TopRecipes = () => {
  return (
    <section className="Top-recipes Section mt-[-2px] pb-8 bg-gradient-Top-recipes p-4  grid grid-cols-3 place-content-center  gap-4 justify-center items-center grid-rows-[100px, repeat(3, 300px)] lg:grid-rows-2   ">
      <h3 className="text-transparent 2xl:indent-8 bg-clip-text bg-gradient-tangerine-diagonal pt-8 text-4xl md:text-5xl lg:text-6xl text-center lg:text-left col-start-1  lg:row-start-3 lg:col-start-1  col-end-5 md:col-[1/5]  ">
        Top Picks from Our Kitchen
      </h3>

      <RecipeLinkCard
        text="ChocoPB Chip"
        src={ChocoPBChip}
        bgColor="bg-[#FFC945]"
        position="col-start-1 col-end-4 md:col-start-1 md:col-end-4  lg:col-start-1 lg:col-end-2 lg:row-start-4 mx-auto"
        link="/recipes/5813"
      />

      <RecipeLinkCard
        bgColor="bg-[#68D00A]"
        position="col-start-1 col-end-4 mx-auto md:col-start-1 md:col-end-4 lg:col-start-2 lg:col-end-3 lg:row-start-4"
        text="Spicy Chicken Pizza"
        src={SpicyChickenPizza}
        link="/recipes/5149"
      />

      <RecipeLinkCard
        text="Chicken Wings"
        src={ChickenWings}
        bgColor="bg-[#FF7D16]"
        position="col-start-1 col-end-4 mx-auto md:col-start-1 md:col-end-4  lg:col-start-3 lg:row-start-4"
        link="/recipes/5232"
      />

      <YumiWithspatula
        resolution="272"
        className="col-start-1 col-end-4 mx-auto w-[272px] md:col-start-4 md:col-end-5 md:row-[3/5]"
        alt="Yumi holding a spatula surrounded by fruits"
      />
    </section>
  );
};
