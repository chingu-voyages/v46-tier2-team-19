import { fetchRecipes } from "@/api/recipes";
import { useQuery } from "@tanstack/react-query";

export function FetchRecipes(search) {
  return useQuery(["search", search], () => fetchRecipes(search), {
    enabled: !!search,
  });
}
