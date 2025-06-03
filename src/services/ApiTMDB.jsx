import axios from "axios";

const API_KEY = "3ba4340a00379f6d058ad68986d9cedc";
const BASE_URL = "https://api.themoviedb.org/3";
export const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";

const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});

export const fetchTrendingMovies = async () => {
  try {
    const response = await tmdb.get("/trending/movie/day");
    return response.data.results;
  } catch (error) {
    console.error("Ошибка при получении трендовых фильмов:", error);
    throw error;
  }
};
