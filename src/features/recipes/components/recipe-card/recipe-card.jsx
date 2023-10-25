/* eslint-disable react/prop-types */
import { Heading, StarRating } from "@/features/ui";
import { Link } from "react-router-dom";
export const RecipeCard = ({
  thumbnail_url,
  name,
  thumbnail_alt_text,
  num_servings,
  user_ratings,
  id,
}) => {
  return (
    <div className="w-full rounded-2xl bg-white sm:w-[311px] shadow-xl">
      <Link to={`/recipes/${id}`}>
        <div className="h-[150px] w-full">
          <img
            src={thumbnail_url}
            alt={thumbnail_alt_text}
            className="object-cover w-full h-full rounded-t-2xl"
          />
        </div>
        <div className="flex flex-col w-full gap-12 mb-2 text-left px-7">
          {/* <h3 className="text-[14px] font-bold text-gray-900">{name}</h3> */}
          <Heading level="h3" variant="lava">
            {name}
          </Heading>
          <div className="flex flex-wrap justify-between">
            <p className="text-[12px]">{`${num_servings} serving(s)`}</p>
            <div>
              <StarRating {...user_ratings} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
