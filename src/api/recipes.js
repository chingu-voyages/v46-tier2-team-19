import axios from "axios";

export async function getRecipes() {
  try {
    const { data } = await axios.get(
      `https://tasty.p.rapidapi.com/recipes/list`,
      {
        headers: {
          "X-RapidAPI-Key": import.meta.env.TASTY_API_KEY,
          "X-RapidAPI-Host": import.meta.env.TASTY_API_URL,
        },
        params: { from: "0", size: "8" },
      },
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchRecipes(search) {
  console.log(`Fetching ${search}`);
  try {
    const { data } = await axios.get(
      `https://tasty.p.rapidapi.com/recipes/list`,
      {
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_TASTY_API_KEY,
          "X-RapidAPI-Host": "tasty.p.rapidapi.com",
        },
        params: { from: "0", size: "9", q: search },
      },
    );
    localStorage.setItem(
      `${search}-searchRecipeResults`,
      JSON.stringify(data.results),
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}
