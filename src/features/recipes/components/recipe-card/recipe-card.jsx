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
    <div className="transition duration-500 bg-white shadow-md w-72 h-72 lg:w-96 hover:shsadow-xl rounded-2xl tranform hover:scale-105">
      <Link to={`/recipes/${id}`}>
        <img
          src={thumbnail_url}
          alt={thumbnail_alt_text}
          className="object-cover object-center h-48 w-72 lg:w-96 rounded-t-2xl"
        />
        <div className="py-3 mx-auto w-72 lg:w-80">
          <Heading
            level="h4"
            variant="lava"
            className="tracking-tighter truncate"
          >
            {name}
          </Heading>
          <div className="flex justify-between">
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
