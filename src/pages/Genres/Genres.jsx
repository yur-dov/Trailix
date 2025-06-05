import { getGenres } from "../../services/ApiTMDB";
import { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import s from "./Genres.module.css";

function Genres() {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genres = await getGenres();
        setGenres(genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };
    fetchGenres();
  }, []);

  return (
    <Container>
      <ul className={s.genreList}>
        {genres.map((genre) => (
          <li key={genre.id} className={s.genreitem}>
            {genre.name}
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Genres;
