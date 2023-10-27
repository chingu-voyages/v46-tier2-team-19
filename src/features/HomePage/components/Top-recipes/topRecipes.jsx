import { BananaLabel, ChickenLabel, FruitLabel, littleYumi } from "@/assets";

export const TopRecipes = () => {
  return (
    <section className="Top-recipes Section mt-[-2px] pb-8 bg-gradient-Top-recipes p-4 grid grid-cols-3 place-content-center  gap-4 justify-center items-center grid-rows-[100px, repeat(3, 300px)] lg:grid-rows-2   ">
      <h3 className="text-transparent 2xl:indent-8 bg-clip-text bg-gradient-tangerine-diagonal pt-8 text-4xl md:text-5xl lg:text-6xl text-center lg:text-left col-start-1  lg:row-start-3 lg:col-start-1  col-end-5 md:col-[1/5]  ">
        Top Picks from Our Kitchen
      </h3>

      <img
        src={FruitLabel}
        alt=""
        className="col-start-1 col-end-4 md:col-start-1 md:col-end-4  lg:col-start-1 lg:col-end-2 lg:row-start-4  "
      />
      <img
        src={BananaLabel}
        alt=""
        className="col-start-1 col-end-4 md:col-start-1 md:col-end-4 lg:col-start-2 lg:col-end-3 lg:row-start-4 "
      />
      <img
        src={ChickenLabel}
        alt=""
        className="col-start-1 col-end-4 md:col-start-1 md:col-end-4 lg:col-start-3  lg:row-start-4"
      />

      <img
        src={littleYumi}
        className="w-[272px] col-start-1 col-end-4 md:col-start-4 row-start- md:col-end-5 md:row-[3/5]  "
        alt=""
      />
    </section>
  );
};
