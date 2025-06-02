import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/ApiTMDB";
import Container from "../Container/Container";
// import s from "./TrandingFilms.module.css";

function TrandingFilms() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const getTrandFilms = async () => {
      try {
        const data = await fetchTrendingMovies();
        console.log(data);
        setFilms(data);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };
    getTrandFilms();
  }, []);
  return (
    <Container>
      <h1>TrandingFilms</h1>
      <p>View all</p>
      <ul>
        {films.map((film) => (
          <li key={film.id}>{film.title || film.name}</li>
        ))}
      </ul>
    </Container>
  );
}
export default TrandingFilms;
