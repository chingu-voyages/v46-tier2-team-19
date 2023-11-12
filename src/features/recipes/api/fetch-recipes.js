import { fetchRecipes } from "@/api/recipes";
import { useQuery } from "@tanstack/react-query";
import { useSessionStorage } from "../hooks";

export function FetchRecipes(search) {
  const KEY = `${search}-searchRecipeResults`;
  const [cachedRecipes, setCachedRecipes] = useSessionStorage(KEY, null);
  const {
    data: recipes,
    isLoading,
    isError,
    error,
  } = useQuery(["recipes", search], () => fetchRecipes(search), {
    onSuccess: (data) => {
      setCachedRecipes(data);
    },

    enabled: !!search,
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 60, // 1 hour
  });

  return {
    data: recipes || cachedRecipes,
    isLoading: isLoading && !cachedRecipes,
    isError: isError,
    error: error,
  };
}
