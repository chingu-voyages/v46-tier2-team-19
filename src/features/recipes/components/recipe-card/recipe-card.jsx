/* eslint-disable react/prop-types */
import { StarRating } from "@/features/ui";
export const RecipeCard = ({
  thumbnail_url,
  name,
  thumbnail_alt_text,
  num_servings,
  user_ratings,
}) => {
  return (
    <div className="w-full rounded-2xl bg-white sm:w-[311px] shadow-xl">
      <div className="h-[150px] w-full">
        <img
          src={thumbnail_url}
          alt={thumbnail_alt_text}
          className="object-cover w-full h-full rounded-t-2xl"
        />
      </div>
      <div className="flex flex-col w-full gap-12 mb-2 text-left px-7">
        <h3 className="text-[14px] font-bold text-gray-900">{name}</h3>
        <div className="flex flex-wrap justify-between">
          <p className="text-[12px]">{`${num_servings} serving(s)`}</p>
          <div>
            <StarRating {...user_ratings} />
          </div>
        </div>
      </div>
    </div>
  );
};
