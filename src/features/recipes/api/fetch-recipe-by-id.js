import { fetchRecipes } from "@/api/recipes";
import { useQuery } from "@tanstack/react-query";

export function FetchRecipeById(id) {
  const search = "id:" + id;
  return useQuery(["search", search], () => fetchRecipes(search), {
    enabled: !!search,
  });
}
