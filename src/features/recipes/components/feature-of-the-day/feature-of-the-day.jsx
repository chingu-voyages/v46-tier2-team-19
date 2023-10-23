import { downArrow } from "@/assets";

export const FeatureOfTheDay = () => {
  return (
    <div className="w-full mx-auto h-1/2">
      <h1 className="text-center underline text-watermelon-600 decoration-dashed decoration-tangerine-400 underline-offset-[18px]">
        Recipe of the day
      </h1>
      <div className="flex flex-col items-center justify-center py-6 space-x-6 lg:flex-row">
        <div className="w-64 h-64 bg-gray-400 rounded-2xl" />
        <div className="max-w-md text-left">
          <h2 className="text-4xl text-tangerine-400">
            Roasted Chicken Recipe
          </h2>
          <p className="font-rasa text-">
            Your ingredients, our creativity. Share what&apos;s in your kitchen,
            and we&apos;ll conjure a delectable recipe just for you. Let&apos;s
            cook up some magic together Here we have the recipe of the day for
            your delight!
          </p>
          <button className="flex py-3 pl-12 pr-8 space-x-2 text-white rounded-full bg-tangerine-400">
            <p className="text-xl font-rasa">Explore</p>
            <img src={downArrow} alt="go explore arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};
