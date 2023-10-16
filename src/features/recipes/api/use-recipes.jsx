import { getRecipes } from "@/api/recipes";
import { useQuery } from "@tanstack/react-query";

export function UseRecipes() {
  return useQuery(["recipes"], () => getRecipes());
}
