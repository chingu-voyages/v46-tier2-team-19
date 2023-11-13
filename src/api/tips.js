import axios from "axios";

export async function fetchTips(id, from = 0, size = 20) {
  console.log(`Fetching ${id} tips`);
  try {
    const { data } = await axios.get(`https://tasty.p.rapidapi.com/tips/list`, {
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_TASTY_API_KEY,
        "X-RapidAPI-Host": "tasty.p.rapidapi.com",
      },
      params: { from, size, id: id },
    });
    return data.results;
  } catch (error) {
    console.error(error);
  }
}
