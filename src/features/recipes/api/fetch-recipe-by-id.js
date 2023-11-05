import { fetchRecipeDetails } from "@/api/recipes";
import { useQuery } from "@tanstack/react-query";

export function FetchRecipeDetailsById(id) {
  console.log("recipes/api", id);
  const search = "id:" + id;
  return useQuery(["search", search], () => fetchRecipeDetails(id), {
    enabled: !!id,
  });
}
