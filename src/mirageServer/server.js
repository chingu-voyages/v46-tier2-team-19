import { createServer } from "miragejs";
import jsonPlaceHolderData from "./endpoints/jsonPlaceHolder.json";
import recipesListData from "./endpoints/recipes/list.json";
import recipesListSimilaritiesData from "./endpoints/recipes/listSimilarities.json";
import recipesAutocomplete from "./endpoints/recipes/autocomplete.json";

export default function () {
  const jsonPlaceholderAPIRoot = "https://jsonplaceholder.typicode.com";
  const tastyAPIRoot = "https://tasty.p.rapidapi.com";

  createServer({
    routes() {
      this.get(`${jsonPlaceholderAPIRoot}/posts`, () => jsonPlaceHolderData, {
        timing: 1200,
      });
      this.get(`${tastyAPIRoot}/recipes/list`, () => recipesListData, {
        timing: 1200,
      });
      this.get(
        `${tastyAPIRoot}/recipes/list-similarities`,
        () => recipesListSimilaritiesData,
        {
          timing: 1200,
        },
      );
      this.get(
        `${tastyAPIRoot}/recipes/autocomplete`,
        () => recipesAutocomplete,
        {
          timing: 1200,
        },
      );
    },
  });
}
