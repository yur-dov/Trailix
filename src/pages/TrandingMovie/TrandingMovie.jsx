import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/ApiTMDB";

function TrandingMovie() {
  const [films, setFilms] = useState([]);
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    const getTrandFilms = async () => {
      try {
        const data = await fetchTrendingMovies();
        setFilms(data);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };
    getTrandFilms();
  }, []);
  return (
    <div>
      <h3></h3>
    </div>
  );
}
export default TrandingMovie;
