import { createServer } from "miragejs";
import jsonPlaceHolderData from "./endpoints/jsonPlaceHolder.json";
import recipesListData from "./endpoints/recipes/list.json";
import recipesListSimilaritiesData from "./endpoints/recipes/listSimilarities.json";
import recipesAutocomplete from "./endpoints/recipes/autocomplete.json";
//import recipeGetMoreInfo from "./endpoints/recipes/get-more-info.json";

export default function () {
  const jsonPlaceholderAPIRoot = "https://jsonplaceholder.typicode.com";
  const tastyAPIRoot = "https://tasty.p.rapidapi.com";

  function fuzzyIncludes(term, arr) {
    let match = false;
    for (let i in arr) {
      if (JSON.stringify(arr[i]).indexOf(term) !== -1) {
        match = true;
        break;
      }
    }
    return match;
  }

  function matchSearchQuery(q, data) {
    if (!q) return false;
    const terms = q.split(" ");
    const results = data.results.filter((obj) => {
      for (let term of terms) {
        if (!fuzzyIncludes(term, Object.values(obj))) return false;
      }
      return true;
    });
    console.log(results);
    return { count: results.length, results: results };
  }

  function matchSearchId(q, data) {
    const id = q.match(/(?<=id:)[0-9]+/i);
    if (!id) return false;
    const result = data.results.find((recipe) => recipe.id === +id);
    if (!result) return false;
    return {
      count: 1,
      results: [result],
    };
  }

  createServer({
    routes() {
      this.get(`${jsonPlaceholderAPIRoot}/posts`, () => jsonPlaceHolderData, {
        timing: 1200,
      });
      this.get(
        `${tastyAPIRoot}/recipes/list`,
        (schema, request) => {
          const from = request.queryParams.from;
          const size = request.queryParams.size;
          const q = request.queryParams.q;
          const fullResults =
            matchSearchId(q, recipesListData) ||
            matchSearchQuery(q, recipesListData) ||
            recipesListData;
          const paginatedResults = {
            count: fullResults.count,
            results: fullResults.results.slice(from, from + size),
          };
          return paginatedResults;
        },
        {
          timing: 1200,
        },
      );
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
      this.get(
        `${tastyAPIRoot}/recipes/get-more-info`,
        (schema, request) => {
          const id = request.queryParams.id;
          const data = recipesListData;
          return data.results.find((recipe) => recipe.id === +id);
        },
        {
          timing: 1200,
        },
      );
    },
  });
}
