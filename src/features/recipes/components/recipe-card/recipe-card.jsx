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
    <div className="w-full transition duration-500 bg-white shadow-xl rounded-2xl tranform hover:scale-110">
      <Link to={`/recipes/${id}`}>
        <div className="h-[200px] w-full">
          <img
            src={thumbnail_url}
            alt={thumbnail_alt_text}
            className="object-cover w-full h-full rounded-t-2xl"
          />
        </div>
        <div className="flex flex-col w-full gap-4 pb-4 text-center">
          {/* <h3 className="text-[14px] font-bold text-gray-900">{name}</h3> */}
          <Heading level="h3" variant="lava" className="tracking-tighter">
            {name}
          </Heading>
          <div className="flex flex-wrap justify-between px-8">
            <p className="text-1">{`${num_servings} serving(s)`}</p>
            <div>
              <StarRating {...user_ratings} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
