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
    <div className="w-full transition duration-500 bg-white shadow-md h-fit md:h-80 hover:shadow-xl rounded-2xl tranform hover:scale-105">
      <Link to={`/recipes/${id}`}>
        <img
          src={thumbnail_url}
          alt={thumbnail_alt_text}
          className="object-cover object-center w-full h-48 rounded-t-2xl"
        />
        <div className="w-full p-3 mx-auto">
          <Heading
            level="h4"
            variant="lava"
            className="tracking-tighter break-words"
          >
            {name}
          </Heading>
          <div className="flex flex-wrap justify-between">
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
