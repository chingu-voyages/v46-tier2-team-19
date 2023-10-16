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
